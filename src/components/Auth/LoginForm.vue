<template>
	<v-card>
		<v-img
		height="120px"
		src="https://external-preview.redd.it/6YEsWQR234WHx6qzVJtkPFd4OsAku4iadAGmQDpE6To.png?auto=webp&s=a17c6360f3174b1c57999708adaa89df6d76131a">
			<v-container fill-height fluid>
				<v-layout>
					<v-flex xs12 align-center d-flex>
						<span class="headline white--text">Login</span>
					</v-flex>
				</v-layout>
			</v-container>
		</v-img>
		<v-card-text>
			<div class="error" v-html="error" />
			<v-form ref="form" v-model="valid" lazy-validation>
				<v-text-field
					v-model="email"
					prepend-icon="email"
					type="email"
					label="E-mail"
					:rules="emailRules"
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
				<vue-recaptcha
					ref="recaptcha"
					@verify="onVerify"
					:sitekey="sitekey">
				</vue-recaptcha>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<a class="lbl-forgot-password" @click="redirect">
				Esqueceu a senha?
			</a>
			<v-spacer></v-spacer>
			<v-btn
        class='btn-login'
				color="#008000"
				:disabled="!valid"
				@click="login">
				Entrar
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import AuthService from '@/services/auth';

export default {
  data() {
    return {
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+/.test(v) || 'E-mail precisa ser válido',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Senha é obrigatória',
        v =>
          (v && v.length >= 8) ||
          'A senha precisa conter no mínimo 8 caracteres',
      ],
      error: null,
      valid: false,
      recaptchaResponse: null,
      sitekey: process.env.VUE_APP_RECAPTCHA,
    };
  },
  components: {
    VueRecaptcha,
  },
  mounted() {
    this.valid = false;
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login(
          {
            email: this.email,
            password: this.password,
          },
          this.recaptchaResponse
        );
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$emit('done');
        this.$refs.form.reset();
      } catch (error) {
        this.error = error.response.data.error;
      } finally {
        this.recaptchaResponse = null;
        this.$refs.recaptcha.reset();
      }
    },
    redirect() {
      this.$router.push('/esqueceu-a-senha');
      this.$emit('done');
    },
    onVerify(response) {
      this.recaptchaResponse = response;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-login {
  color: #ffffff !important;
}
.lbl-forgot-password {
  font-size: 1.1em;
  padding-left: 15px;
  text-decoration: none;
  color: #008000 !important;
}
.error {
  color: white;
  border-radius: 4px;
  padding-left: 4px;
}
</style>
