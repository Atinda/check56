<template>
  <div class="login">
    <el-dialog :visible.sync="isShow" width="60%" :before-close="handleClose">
      <!-- <span>登录</span> -->
      <img :src="this.imageSrc" alt srcset class="logo-image"/>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      imageSrc:require('../../assets/images/account.png'),
    };
  },
  props: {
    isShow: Boolean
  },
  methods: {
    handleClose() {
      this.$emit("setFalse", false);
    }
  },
};
</script>
<style scoped>
</style>
