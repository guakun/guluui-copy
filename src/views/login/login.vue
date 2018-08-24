<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card icon="log-in" title="Welcome to join us." :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleLogin"></login-form>
          <p class="login-tip">I am a shy tip~</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '@components/login-form/login-form'
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  components: { LoginForm },
  methods: {
    ...mapActions([
      'handleLogin'
    ]),
    handleLoginIn ({userName, password}) {
      this.handleLogin({ userName, password })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style lang="scss">
@import './login.scss';
</style>
