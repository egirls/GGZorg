<template>
  <div id="signInBox">
    <el-form ref="form" :model="form" label-width="5%" :span="8" :xs="10" :sm="10" :md="6" :lg="6" :xl="6" :offset="2">
      <el-col>
        <el-form-item label="学号/ID">
          <el-input v-model="form.sno"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">注册</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'SignIn',
  data () {
    return {
      form: {
        sno:'',
        nickname: '',
        password: ''
      },
      userMes: null
    }
  },
  props: {},
  computed: {

  },
  methods: {
    // 取消
    onCancel () {
      this.$router.push('/')
    },

    // 登录
    onSubmit () {
      const userId = this.form.sno
      const userName = this.form.nickname
      const userPassword = this.form.password
      if (userId.length === 0 || userName.length === 0 || userPassword.length === 0) {
        console.log('未填写完整')
      } else {

        localStorage.setItem('useMes', {userId,userName})

        // 执行post请求
        this.axios.post('/submitSignIn',{
          userId:userId,
          userName:userName,
          userPassword:userPassword
        })
        .then((response)=>{
          const isSuccess = response.data;
          console.log(isSuccess)

          this.userMes = {
            userId:userId,
            userName:userName,
          };

          if (isSuccess) {
            // 跳转至首页
            this.$router.push('/')
          }
        })
        .catch((response)=>{
          console.log(response);
        })

      }
    }
  }
}
</script>
<style scoped>
#signInBox{
  overflow: hidden;
}

.el-form {
  margin-top: 5%;
}
</style>