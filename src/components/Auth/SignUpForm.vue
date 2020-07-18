<template>
<v-card>
  <v-img
    height="120px"
    src="https://i.imgur.com/II93eew.jpg">
    <v-container fill-height fluid>
      <v-layout>
        <v-flex xs12 align-end d-flex>
          <span class="headline white--text">Cadastrar</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
  <v-card-text>
    <div class="error" v-html="error" />
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        prepend-icon="person"
        type="text"
        label="Nome"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        prepend-icon="email"
        type="email"
        label="E-mail"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="celphone"
        prepend-icon="phone"
        type="text"
        label="Celular"
        :rules="celPhoneRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        prepend-icon="lock"
        type="password"
        label="Senha"
        :rules="passwordRules"
        required
      ></v-text-field>
    </v-form>
  </v-card-text>

  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
    class="btn-register"
    color="#008000"
    :disabled="!valid"
    @click="register">
      Cadastrar
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import AuthService from '@/services/auth';

export default {
  data() {
    return {
      name: '',
      nameRules: [v => !!v || 'Nome é obrigatório'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+/.test(v) || 'O E-mail precisa ser válido',
      ],
      celphone: '',
      celPhoneRules: [v => !!v || 'Telefone é obrigatório'],
      address: '',
      addressRules: [v => !!v || 'Endereço é obrigatório'],
      password: '',
      passwordRules: [
        v => !!v || 'Senha é obrigatória',
        v =>
          (v && v.length >= 8) ||
          'A senha precisa conter no mínimo 8 caracteres',
      ],
      error: null,
      valid: false,
    };
  },
  mounted() {
    this.valid = false;
  },
  methods: {
    async register() {
      try {
        const response = await AuthService.register({
          name: this.name,
          email: this.email,
          celphone: this.celphone,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$emit('done');
        this.$refs.form.reset();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  font-size: 1.1em;
  padding-left: 15px;
  text-decoration: none;
}
.btn-register {
  color: #ffffff !important;
}
.error {
  color: white;
  border-radius: 4px;
  padding-left: 4px;
}
</style>
