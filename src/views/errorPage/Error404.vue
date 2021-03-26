<template>
  <div>
    404 Not Found
    <div>
      <el-button @click="onBackIndex">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  props: {},
  methods: {
  	onBackIndex () {
      this.$router.push('/')
  	}
  }
}
</script>