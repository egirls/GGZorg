<template>
  <div>
    <div class="newsBoard">
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>小组新闻</span>
            <el-button style="float: right; padding: 3px 0" type="text">发表</el-button>
          </div>
          <div v-for="(card, index) in news" :key="index" @click="onANew(card)" class="text item">
            {{'新闻概要 ' + card.info }}
          </div>
        </el-card>
      </div>     
    </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'

export default {
  name: 'News',
  //数据
  data(){
      return {
      };
  },
  props: {},
  computed: {
    ...mapGetters([
      'news',
      'aNews'
    ]),
    ...mapMutations([
      'changeANews', // 将 `this.changeNews()` 映射为 `this.$store.commit('changeNews')`
    ]),
  },
  methods: {
    onANew (aNews) {
      const newsId = aNews.newsId
        
      // 执行get请求
      this.axios.get('/getANews',{newsId:newsId})
      .then((response)=>{
        const data = response.data;

        this.$store.commit('changeANews',data)
        this.$router.push('aNews')

      })
      .catch((response)=>{
        console.log(response);
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .newsBoard {
    width: 100%;
    margin-top:30px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 100%;
  }
</style>