<template>
  <div>
    <div class="cardsBox">
    <el-col :span="3" v-for="(card, index) in infoCards" :key="index" :offset="index%7 == 0 ? 1 : 0">
      <el-card :body-style="{ padding: '0px' }" class="image-card">
        <img :src="card.img" class="image">
        <div>
          <span>{{card.info}}</span>
          <div class="bottom clearfix">
          </div>
        </div>
      </el-card>
    </el-col>
    </div>
    <div class="bottom clearfix">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Member',
  //数据
  data(){
      return {
        infoCards:[
          {img:'/images/member-lichen.jpg',info:'李晨'},
          {img:'/images/member-fengxiaoyu.jpeg',info:'冯晓玉'},
          {img:'/images/member-yangmanyu.jpeg',info:'杨满玉'},
          {img:'/images/member-lijing.jpg',info:'李晶'},
          {img:'/images/member-nieyunli.jpg',info:'聂云丽'},
          {img:'/images/member-xuyang.jpg',info:'徐杨'},
          {img:'/images/member-liyu.jpg',info:'李宇'},
          {img:'/images/member-dongxiang.jpg',info:'董翔'},
          {img:'/images/member-zhangjiabao.jpeg',info:'张嘉宝'},
          {img:'/images/member-liuyilin.jpeg',info:'刘祎琳'},
          {img:'/images/member-wanjing.jpeg',info:'万静'},
          {img:'/images/member-lixingwu.png',info:'李兴五'},
          {img:'/images/member-huayuanpeng.jpeg',info:'华远鹏'},
          {img:'/images/member-huyubo.jpeg',info:'胡宇博'}
        ]
      };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cardsBox {
    width: 100%;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
  .image-card{

  }

  .image {
    width: 100%;
    height: 30%;
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