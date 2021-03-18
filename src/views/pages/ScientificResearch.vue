<template>
  <div>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="(card, index) in infoCards" :key="index" >
      <h3 class="medium">{{ card.info }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'ScientificResearch',
  //数据
  data(){
      return {
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>