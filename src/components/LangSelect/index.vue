<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div class="textandsvg-container">
      <div class="svg-container">
        <svg-icon class-name="international-icon" icon-class="international" />
      </div>
      <div class="dropdownText">{{ uppercase }}</div>
      <div class="wrapperDropdownArrowDown" />
    </div>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">
        中文
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">
        English
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='es'" command="es">
        Español
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='ja'" command="ja">
        日本語
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.language
    },
    uppercase() {
      return this.$store.getters.language.toString().toUpperCase()
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.textandsvg-container {
  width:100px;
  display:flex;
  align-items: center;
}

.svg-container {
  margin-right: 6px;
}
.dropdownText {
  font-size: 12px !important;
    margin-right: 6px;
}
.wrapperDropdownArrowDown {
    display: inline-block;
    width: 8px;
    height: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAQAAAAXtxYXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfhBRYPLQZuS11TAAAAdElEQVQY02XNoRECMRBA0ccs4gQCGZESEFcCJaQABOIKowCKQSAQFHAFIBAIDOFyk5X7386GwSR76Kc4uoeTLNl3pBjt5DA72HakGPF2DS/PjtR8MQcdaTKb301yNuBGmxewEG0m/qA+WuUWVPJpcz9JWi++7iolaFSA1LsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDUtMjJUMTU6NDU6MDYrMDg6MDACAq7nAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA1LTIyVDE1OjQ1OjA2KzA4OjAwc18WWwAAAABJRU5ErkJggg==);
}
</style>
