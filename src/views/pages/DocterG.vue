<template>
  <div>
    <div class="infoCard">
      <el-card>
        <img :src="infoCard.img" class="image">
        <div>
          <span>{{infoCard.info}}</span>
          <div class="bottom clearfix">
          </div>
        </div>
      </el-card>
    </div>
    <div class="bottom clearfix">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocterG',
  //数据
  data(){
      return {
        infoCard: {img:'/images/Guozhong_Gao.jpg',info:'Dr. Guozhong (Gary) Gao 高国忠博士 特聘教授'},
      };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .infoCard {
    width: 20%;
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
    height: 35%;
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