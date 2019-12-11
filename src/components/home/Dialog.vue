<template>
  <div class="login">
    <el-dialog :visible.sync="isShow" width="60%" :before-close="handleClose">
      <!-- 登录 -->
      <img v-if="this.isImg" @click="clickImg()" :src="this.imageSrc" alt srcset class="logo-image">
      <!-- 注册 -->
      <div v-if="this.isRegister" class="register">
        <div>
         <div style="text-align:left">手机号码:</div> 
          <input type="number" placeholder="请输入手机号码">
        </div>
        <div style="margin:5px 0;">
           <div style="text-align:left">验证码:</div>
          <input type="number" placeholder="请输入验证码">
        </div>
        <button @click="clickRegister()">提交注册</button>
      </div>
      <!-- 选择城市 -->
      <div v-if="this.isCity" class="choice-city">
        <div class="city-position">
          <div style="text-align:left">定位/最近访问:</div>
          <div class="city-position-items">
            <span>长沙</span>
            <span>怀化</span>
          </div>
        </div>
        <div class="city-hot">
          <div style="text-align:left">热门城市:</div>
          <div class="city-hot-items">
            <span>北京</span>
            <span>上海</span>
            <span>广州</span>
            <span>深圳</span>
            <span>长沙</span>
            <span>重庆</span>
          </div>
        </div>
        <div class="city-search">
          <input type="text">
          <button>搜索</button>
        </div>
        <div class="city-search-items">
          <span>A</span>
          <span>鞍山</span>
          <span>安阳</span>
          <span>安庆</span>
          <span>安康</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data() {
    return {
      imageSrc: require("../../assets/images/account.png"),
      isImg: true,
      isRegister: false,
      isCity: false
    };
  },
  props: {
    isShow: Boolean
  },
  methods: {
    handleClose() {
      this.$emit("setFalse", false);
    },
    // 点击登录图片
    clickImg() {
      this.isImg = false;
      this.isRegister = true;
      this.isCity = false;
    },
    // 提交注册
    clickRegister() {
      this.isImg = false;
      this.isRegister = false;
      this.isCity = true;
    }
  }
};
</script>
<style scoped>
.choice-city {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.city-position,.city-hot-items{
  padding: 5px;
  border-bottom: 1px solid gray;
}
.city-position-items,.city-hot-items{
  flex-flow: wrap;
  display: flex;
}
.city-position-items span,.city-hot-items span {
  display: inline-block;
  max-width: 60px;
  padding: 4px;
  margin: 3px;
  border: 1px solid gray;
}
.city-search-items{
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
.city-search-items span{
  display: block;
  border-bottom: 1px solid gray;
  text-align: left;
}
.city-search{
  padding: 5px;
}
</style>
