<template>
  <div class="m-header">
    <el-row>
      <el-col :span="12">
        <div class="grid-content logo_content">
          <img 
            src="~assets/images/index/logo.png" 
            class="logo">
          <div class="logo_text">寻艾AI</div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-row>
            <el-col :span="4">
              <nuxt-link to="/">首页</nuxt-link>
            </el-col>
            <el-col :span="4">
              <nuxt-link to="/product">产品介绍</nuxt-link>
            </el-col>
            <el-col :span="4">
              <nuxt-link to="/about">寻艾APP</nuxt-link>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/public/header.scss";
</style>

