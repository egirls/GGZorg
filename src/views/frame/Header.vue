<template>
  <div id="header">
<el-menu :default-active="this.$route.push" router class="el-menu" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="scientificResearch">科学研究</el-menu-item>
  <el-submenu index="3">
    <template slot="title">研究团队</template>
    <el-menu-item index="docterG">高国忠博士</el-menu-item>
    <el-menu-item index="member">团队成员</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">公开发表</template>
    <el-menu-item index="4-1">书籍</el-menu-item>
    <el-menu-item index="papers">学术论文</el-menu-item>
    <el-menu-item index="4-3">学术会议报告</el-menu-item>
    <el-menu-item index="4-4">专利</el-menu-item>
  </el-submenu>
  <el-menu-item index="5" disabled>新闻</el-menu-item>
  <el-menu-item index="6" disabled>博客</el-menu-item>
  <el-menu-item index="logIn">登录</el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
  width: 100%;
  margin-right: 0;
  min-height: 60px;
  padding-bottom: 20px;
}
.el-menu{
  width: 60%;
  margin-right: 0;
  float: right;
}
</style>