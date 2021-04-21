<template>
  <div>
    <el-row>
      <el-col :span="22"><el-input ref='md_title' class="md_title" v-model='mdTitle'>{{this.MDTitle}}</el-input></el-col>
      <el-col :span="2"><el-button @click="handleSubmit">发表</el-button></el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="editor">
        <el-input type='textarea' ref='md_editor' class="md_editor" v-model='mdString'></el-input>
      </el-col>
      <el-col :span="12" class="preview">
        <div ref='md_preview' class="md_preview"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
const markdown = require('markdown-js')

export default {
  name: 'MDEditor',
  //数据
  data(){
      return {
        mdString:'',
        mdTitle:'',
      };
  },
  props: {},
  computed: {
    ...mapGetters([
      'MDText',
      'MDTitle'
    ]),
    ...mapMutations([
      'changeMDText',
      'changeMDTitle'
    ]),
  },
  methods: {
    handleSubmit () {
      // 执行post请求 
      this.axios.post('/submitANews',{
        ANewsAuthor: 'fei',
        ANewsTitle: this.mdTitle,
        ANewsText: this.MDText
      })
      .then((response)=>{
        const data = response.data;

        if (data) {
          // 跳转至新聞頁
          this.$router.push('/news')
        }else{
          console.log('發表出現問題')
        }
      })
      .catch((response)=>{
        console.log(response);
      })
    }
  },
  watch: {
    mdTitle: function(title){
      this.$store.commit('changeMDTitle',title)
    },
    mdString: function(value){
      this.$store.commit('changeMDText',value)
      
    },
    MDText: function(value){
      this.$refs.md_preview.innerHTML = markdown.makeHtml(value);
    }
  }
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
  .md_title >>> input {
    border: none;
    background-color: #ffcb6d;
  }
  .editor {
    display: inline-block;
    height: 80%;
    background-color: #f9f9f9;
  }
  .md_editor >>> textarea{
    width: 100%;
    height: 100%;
    border: none;
    overflow: hidden;
    scroll-behavior: 
  }
  .preview {
    display: inline-block;
    height: 80%;
    background-color: #ffffec;
  }
  .md_preview {
    margin:10px 10px;
  }
</style>