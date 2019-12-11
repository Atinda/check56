<template>
  <div id="app">
    <el-header>
      <el-row>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="">
            <span>当前城市</span>
            <span>长沙市</span>
            <span>晴 18°C</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="">
            <el-button size="small">登录</el-button>
            <span>关注微信公众号</span>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "/assets/styles/common.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
