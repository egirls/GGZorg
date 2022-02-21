<template>
  <div id="foot-container">
  	<el-row>
      <el-col :span="10" :offset="2">
      	<div class="grid-content">
      	  长江大学油气高性能计算与智能探测研发中心
        </div>
      </el-col>
      <el-col :span="6"  :offset="6" class="bg-left">
      	<div class="grid-content">
      		鄂ICP备2021022197号
      	</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #foot-container {
  	width: 100%;
    min-height: 10%;
  	margin: 0 auto;
    position: relative;
    bottom: 0;
    display: block;
    background: #35373b;
  }
  .el-row {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
  	min-height: 50px;
    color: #fff;
  }
  .el-col {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-content {
    vertical-align: middle;
    text-align: center;
  }
  .bg-left{
    background-color: #94969c;
  }
</style>