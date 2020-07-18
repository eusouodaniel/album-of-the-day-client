<template>
<v-layout align-center>
  <v-dialog v-model="dialog" max-width="460px">
    <v-btn class='btn-login' round flat slot="activator">Login / Cadastro</v-btn>
    <v-tabs
      color="white"
      slider-color="#008000"
      right
    >
      <v-tab class='label-sign' ripple>
        Login
      </v-tab>
      <v-tab class='label-sign' ripple>
        Cadastro
      </v-tab>
      <v-tab-item>
        <login-form @done="dialog = false"/>
      </v-tab-item>
      <v-tab-item>
        <sign-up-form @done="dialog = false"/>
      </v-tab-item>
    </v-tabs>
  </v-dialog>
</v-layout>
</template>

<script>
import LoginForm from './LoginForm.vue';
import SignUpForm from './SignUpForm.vue';

export default {
  name: 'AuthPopUp',
  components: {
    LoginForm,
    SignUpForm,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
<style lang="scss" scoped>
.btn-login {
  text-decoration: none;
  color: #008000;
  :hover {
    cursor: pointer;
  }
}
.label-sign {
  color: #008000;
}
</style>
