<template>
  <div class="login">
    <el-dialog class="dialog-width" :visible.sync="isShow" :width="width" :before-close="handleClose">
      <!-- 登录 -->
      <img v-if="this.isImg" @click="clickImg()" :src="this.imageSrc" alt srcset class="logo-image">
      <!-- 注册 -->
      <div v-if="this.isRegister" class="register">
        <div>
          <div style="text-align:left">手机号码:</div>
          <el-input
            v-model="phoneNumber"
            placeholder="请输入手机号码"
            size="mini"
            type="text"
            maxlength="11"
            show-word-limit
            @input="phoneNumbers($event)"
          ></el-input>
        </div>
        <div style="margin:5px 0;">
          <div style="text-align:left">验证码:</div>
          <el-input v-model="verCode" placeholder="请输入验证码" size="mini" @input="verCodes($event)"></el-input>
        </div>
        <el-button size="mini" @click="clickRegister()">提交注册</el-button>
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
        <v-distpicker
          :province="select.province"
          :city="select.city"
          hide-area
          @selected="selected"
        ></v-distpicker>
        <div class="city-search">
          <el-input v-model="cityName"
            placeholder="请输入城市名称"
            type="text"
            size="mini" @input="searchCity()">
            <template slot="prepend">搜索</template>
          </el-input>
        </div>
        
        <div class="city-search-items">
          <!-- <span>A</span>
          <span>鞍山</span>
          <span>安阳</span>
          <span>安庆</span>
          <span>安康</span> -->
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
      phoneNumber: null, // 手机号码
      verCode: null, // 验证码
      cityName: null, // 搜索的城市名称
      imageSrc: require("../../assets/images/account.png"),
      // 显示对应视图的Boolea
      isImg: true,
      isRegister: false,
      isCity: false,
      width: "60%",
      select: { province: "广东省", city: "广州市" } //地区默认值
    };
  },
  props: {
    isShow: Boolean
  },
  methods: {
    // 关闭弹窗
    handleClose() {
      this.$emit("setFalse", false);
    },
    // 手机号码
    phoneNumbers(e) {
      console.log(e);
      this.$forceUpdate();
    },
    // 验证码
    verCodes(e) {
      console.log(e);
      this.$forceUpdate();
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
      this.width = "95%";
      console.log("phone:", this.phoneNumber, "verCode:", this.verCode);
    },
    // 搜索城市
    searchCity() {
      console.log("搜索城市名：", this.cityName);
    },
    // 选择城市
    selected(data) {
      console.log(data);
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
.city-position,
.city-hot{
  padding: 5px;
  border-bottom: 1px solid gray;
}
.city-position-items,
.city-hot-items {
  flex-flow: wrap;
  display: flex;
}
.city-position-items span,
.city-hot-items span {
  display: inline-block;
  max-width: 60px;
  margin: 3px;
}
.city-search-items {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
.city-search-items span {
  display: block;
  border-bottom: 1px solid gray;
  text-align: left;
}
.city-search {
  display: flex;
  padding: 5px;
  margin: 0 auto;
}

.distpicker-address-wrapper{
    margin: 10px 0;
  }
</style>
