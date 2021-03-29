<template>
  <div>
    <div class="newsBoard">
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>小组论文</span>
            <input style="float: right; padding: 3px 0" size="small" type="file" @change="uploadPaper($event)">点击上传</input>
          </div>
          <div v-for="(paper, index) in papers" :key="index"  @click="getDetailPaper(paper)" class="text item">
            {{'论文标题 ' + paper.paperTitle }}
          </div>
        </el-card>
      </div>
      <div v-if="false" class="block">
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
        fileList:[]
      };
  },
  props: {},
  computed: {
    ...mapGetters([
      'papers'
    ]),
    ...mapMutations([
      'changePaperD', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      'changePapers', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
  },
  mounted(){
    let _this = this

    this.axios.get('getAllPapers')
    .then((response)=>{
      const isSuccess = response.data.isSuccess;
      const papers = response.data.papers;


      if (isSuccess) {
        _this.$store.commit('changePapers',papers)              
      }
    })
    .catch((response)=>{
      console.log(response);
    })
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      uploadPaper(e){
        let _this = this
        // 利用fileReader对象获取file
        let file = e.target.files[0];
        let filesize = file.size;
        let filename = file.name;
        // 2,621,440   2M
        if (filesize > 2101440) {
            // 文件大小大于2MB
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
     
            // 读取到的文件base64url 数据编码 将此编码字符串传给后台即可
            let fileCode = e.target.result;
            // 执行post请求
            _this.axios.post('/submitPaperUpload',{
              paperTitle:'这是一个标题2',
              paperAuthor:'作者2',
              paperIntro:'这是简介这是简介这是简介这是简介2',
              paperPath:fileCode,
            })
            .then((response)=>{
              const isSuccess = response.data;
              console.log(isSuccess)

              if (isSuccess) {
                _this.$store.commit('changePaperD',fileCode)
                _this.$router.push('detailPaper')                
              }
            })
            .catch((response)=>{
              console.log(response);
            })
        }
      },
      getDetailPaper(paper){
        const paperId = paper.paperId

         // 执行请求
        this.axios.post('/getPaperContent',{'paperId':paperId})
        .then((response)=>{
          if (response.data.isExist) {
            const paperMes = response.data.paperMes;

            const paperD = paperMes.paperPath
            this.$store.commit('changePaperD',paperD)
          }
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