<template>
  <div id="foot-container">
  	<el-row :gutter="20">
      <el-col :span="6">
      	<div class="grid-content bg-purple">
      	Addres<br />
      	Yangtze University<br />
        Caidian Street Daxue Rd No. 111<br />
        </div>
      </el-col>
      <el-col :span="6">
      	<div class="grid-content bg-purple">
      		Latest Events
      	</div>
      </el-col>
      <el-col :span="6">
      	<div class="grid-content bg-purple">
      		Quick Links
      	</div>
      </el-col>
      <el-col :span="6">
      	<div class="grid-content bg-purple">
      		Publications Statistics
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
  .foot-container {
  	width: 100%;
  	margin: 0 auto;
  }
  .el-row {
  	text-align: center;
  	background: #F2F6FC;
  	min-height: 50px;
  	max-height: 100px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {

  }
  .bg-purple {

  }
  .bg-purple-light {

  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>