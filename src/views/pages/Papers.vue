<template>
  <div>
    <div class="newsBoard">
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>小组新闻</span>
            <el-button style="float: right; padding: 3px 0" type="text">发表</el-button>
          </div>
          <div v-for="(card, index) in news" :key="index"  @click="getDetailPaper" class="text item">
            {{'列表内容 ' + card.info }}
          </div>
        </el-card>
      </div>
      <div class="block">
         <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
          </el-pagination>
       </div>      
    </div>
    <div id="paperD" ref="paperD">
      {{paperMes}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Papers',
  //数据
  data(){
      return {
        news:[
        {img:'/images/banner6.jpeg',info:'测井和钻井技术'},
        {img:'/images/banner4.jpeg',info:'地球物理研发'},
        {img:'/images/banner5.jpeg',info:'数据科学和人工智能'},
        {img:'/images/banner6.jpeg',info:'测井和钻井技术'},
        {img:'/images/banner4.jpeg',info:'地球物理研发'},
        {img:'/images/banner5.jpeg',info:'数据科学和人工智能'},
        {img:'/images/banner6.jpeg',info:'测井和钻井技术'},
        {img:'/images/banner4.jpeg',info:'地球物理研发'},
        {img:'/images/banner5.jpeg',info:'数据科学和人工智能'},
        ],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        paperMes:null,
      };
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getDetailPaper(){
         // 执行get请求
        this.axios.get('/getPaperContent')
        .then((response)=>{
          const data = response.data;

          this.paperMes = data
          this.$refs.paperD.innerHTML = data;
          

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

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
</style>