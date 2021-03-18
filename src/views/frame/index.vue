<template>
  <div id="frame">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
  name: 'Frame',
  //数据
  data(){
      return {
      };
  },
  //组件
  components: {
    Header,
    Content,
    Footer
  }
}
</script>
