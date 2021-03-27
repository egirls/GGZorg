<template>
  <div>
    <div class="newsBoard">
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>小组论文</span>
            <el-button style="float: right; padding: 3px 0" type="text">发表</el-button>
          </div>
          <div v-for="(paper, index) in papers" :key="index"  @click="getDetailPaper(paper)" class="text item">
            {{'论文简介 ' + paper.paperIntro }}
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
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'

export default {
  name: 'Papers',
  //数据
  data(){
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        paperMes:null,
      };
  },
  props: {},
  computed: {
    ...mapGetters([
      'papers'
    ]),
    ...mapMutations([
      'changePaperD', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getDetailPaper(paper){
        const paperId = paper.paperId
        
         // 执行get请求
        this.axios.get('/getPaperContent',{paperId:paperId})
        .then((response)=>{
          const data = response.data;

          this.paperMes = data
          this.$store.commit('changePaperD',data)
          this.$router.push('detailPaper')

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
  .paperD{
    width: 100%;
    display: float;
    z-index:3;
  }
</style>