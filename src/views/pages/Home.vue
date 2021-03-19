<template>
  <div>
    <!-- banner-->
    <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in banners" :key="item">
      <el-image :src="item"></el-image>
    </el-carousel-item>
    </el-carousel>
    <!-- info card-->
    <el-row>
    <el-col :span="6" v-for="(card, index) in infoCards" :key="index" :offset="index > 0 ? 3 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="card.img" class="image">
      <div>
        <span>{{card.info}}</span>
        <div class="bottom clearfix">
        </div>
      </div>
    </el-card>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  //数据
  data(){
      return {
        banners:[
           '/images/banner1.jpeg',
           '/images/banner2.jpg',
           '/images/banner3.jpeg',
           '/images/banner4.jpeg',
           '/images/banner5.jpeg',
           '/images/banner6.jpeg',
        ],
        infoCards:[
        {img:'/images/banner6.jpeg',info:'测井和钻井技术'},
        {img:'/images/banner4.jpeg',info:'地球物理研发'},
        {img:'/images/banner5.jpeg',info:'数据科学和人工智能'},
        ]
      };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel {
    width: 100%;
  }

  .el-carousel__item .el-image {
    margin: 0 auto;
    width: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 260px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>