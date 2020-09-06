<template>
  <div class="login-container">

    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
      <img :src="EmptyLogo" :alt="$t('login.title')" style="height: 30px;">
      <div class="title-container">
        <h3 class="title">
          {{ $t('login.title') }}
        </h3>

      </div>
      <div class="title-container">
        <p class="title-static">登录</p>
      </div>
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
          @focus="CurrentFoucsUserName = true"
          @blur="UserNameBlur"
        />
        <div :class="['mtitle',CurrentFoucsUserName?'mtitlefocus':'']">手机号或邮箱</div>

      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="PassWordBlur"
            @keyup.enter.native="handleLogin"
            @focus="CurrentFoucsPassWord = true"
          />
          <div :class="['mtitle',CurrentFoucsPassWord?'mtitlefocus':'']">密码</div>
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
        {{ $t('login.logIn') }}
      </el-button>

      <div style="position:relative">
        <div class="tips">
          <span>{{ $t('login.username') }} : admin</span>
          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">
            {{ $t('login.username') }} : editor
          </span>
          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
        </div>

      </div>
    </el-form>
    <div class="ShowLangChangeBottom">
      <lang-select class="set-language" />
    </div>

  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import EmptyLogo from '../../assets/images/emptylogo.png'

export default {
  name: 'Login',
  components: { LangSelect },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不低于6位数'))
      } else {
        callback()
      }
    }
    return {
      EmptyLogo: EmptyLogo,
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      CurrentFoucsPassWord: false,
      CurrentFoucsUserName: false,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    UserNameBlur() {
      if (this.loginForm.username === '') {
        this.CurrentFoucsUserName = false
      }
    },
    PassWordBlur() {
      this.capsTooltip = false
      if (this.loginForm.password === '') {
        this.CurrentFoucsPassWord = false
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: rgb(15, 15, 15);

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    input {
      background: transparent;
      -webkit-appearance: none;
      border-radius: 3px;
      caret-color: $cursor;
      color: #333;
      transition: all 0.25s ease-out;
      padding: 5px 10px;
      height: 40px;
      line-height: 30px;
      box-sizing: border-box;
      font-size: 13px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px rgb(232, 240, 254) inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }

  .el-form-item .mtitle {
    position: absolute;
    left: 12px;
    top: 13px;
    color: #9e9e9e;
    font-size: 14px;
    z-index: 0;
    line-height: 1;
    transition: all 0.3s;
  }

  .el-form-item .mtitle.mtitlefocus {
    color: #2196f3;
    font-size: 12px;
    top: -7px;
    background-color: white;
  }
}
</style>

<style lang="scss" scoped>

$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  line-height: 1.5;
  width: 100%;
  background-image: url('../../assets/images/HomeImage_1.jpg');
  overflow: hidden;
  background-position: center;

  .login-form {
    max-width: 420px;
    padding: 48px 48px 23px;
    box-sizing: border-box;
    margin: 80px auto 0;
    background: #ffffff;
    border-radius: 4px;
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    position: relative;

    .title {
      font-size: 17px;
      font-family: "Helvetica" !important;
      font-weight: 400 !important;
      color: #333;
      margin-top: 16px;
      font-weight: bold;
    }
    .title-static {
      font-size: 20px !important;
      margin-top: 30px !important;
      color: #333;
    }
    .set-language {
      color: #ccc;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .ShowLangChangeBottom {
    text-align: center;
    width: 100%;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }

}
</style>
