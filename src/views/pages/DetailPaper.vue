<template>
  <div>
    <div class="paperDBoard" ref="paperDBoard">
      <div v-if="!paperD">未找到对应文件</div>
      <div v-if="paperD">
      <canvas ref="myCanvas" class="theCanvas"></canvas>
       <el-button @click="onLastPageNum">上一页</el-button>
       <span>共{{numPages}}页，位于第{{pageNumber}}页</span>
      <el-button @click="onNextPageNum">下一页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'

const PDFJS = require('pdfjs-dist/webpack');
PDFJS.disableWorker = true

PDFJS.GlobalWorkerOptions.workerSrc = '/node_modules/pdfjs-dist/build/pdf.worker.js'//具体路径看自己项目中的文件位置

export default {
  name: 'DetailPaper',
  //数据
  data(){
      return {
          numPages:0, // 总页数
          pageNumber: 0, // 位于第几页
          pdfDOc:null, // pdf文档信息
      };
  },
  mounted() {
    if (this.paperD) {
      this.loadPDF()
    }
  },
  props: {},
  computed: {
    ...mapGetters([
      'paperD'
    ]),
    ...mapMutations([
    ]),
  },
  methods: {
   // refs
    loadPDF(){
        let _this = this
        // 引入pdf.js的字体
        let CMAP_URL = '/node_modules/pdfjs-dist/cmaps/'
        //读取base64的pdf流文件
        let loadingTask = PDFJS.getDocument({       
          data: atob(this.paperD.split(',')[1]), // PDF base64编码
          cMapUrl: CMAP_URL,
          cMapPacked: true
        })
        console.log('loadingTask:',loadingTask)

        loadingTask.promise.then((pdf) => {  
          console.log('PDF loaded'); 

          _this.loadFinished = true

          _this.pdfDOc = pdf
          _this.numPages = pdf.numPages
          _this.pageNumber = 1

          _this.getPage(pdf, 1 , pdf.numPages)
        })
    },
    // 绘制pdf的pageNumber页
    getPage(pdf, pageNumber, numPages) {
      let _this = this

      pdf.getPage(pageNumber)
        .then((page) => {
          // 获取DOM中为预览PDF准备好的canvasDOM对象
          let canvas = _this.$refs.myCanvas

          let ctx = canvas.getContext('2d')

          let dpr = window.devicePixelRatio || 1
          let bsr = ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio || 1
          let ratio = dpr / bsr

          let scale = 1;
          let viewport = page.getViewport({ scale: scale, })

          canvas.height = viewport.height
          canvas.width = viewport.width

          ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

          let renderContext = {
            canvasContext: ctx,
            viewport: viewport
          }
          
          page.render(renderContext)
          // let renderTask = page.render(renderContext)

          // renderTask.promise.then(function(){
          //   if (pageNumber <= numPages) {
          //     _this.getPage(pdf, pageNumber, numPages)
          //   }
          // })

        })
    },

    // 上一页
    onLastPageNum() {
      let _this = this

      if (this.pageNumber > 1 && this.pdfDOc && this.numPages > 0) {

        this.pageNumber = this.pageNumber - 1
        if (this.pageNumber >= 1) {
         this.getPage(_this.pdfDOc, _this.pageNumber, _this.numPages)          
        }
      }
    },
    // 下一页
    onNextPageNum() {
      let _this = this

      if (this.pageNumber < this.numPages && this.pdfDOc && this.numPages > 0) {

        this.pageNumber = this.pageNumber + 1
        if (this.pageNumber <= this.numPages) {
           this.getPage(_this.pdfDOc, _this.pageNumber, _this.numPages)
        }
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paperDBoard{
  margin: 0 20px;
}
.theCanvas{
  min-width: 80%;
  min-height: 100px;
  border: 1px #999 solid;
  margin:0 10%;
}
</style>