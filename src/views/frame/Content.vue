<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Content',
  //数据
  data(){
      return {
      };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content{
	min-height: 78%;
}
</style>