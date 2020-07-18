<template>
<v-layout justify-center mt-4 mb-4>
  <v-flex xs12 sm10 md8 lg6 v-if="isUserLoggedIn">
    <panel title="Editar perfil">
      <v-text-field
        label="Nome"
        v-model="user.name"
        prepend-icon="face"
        required
      ></v-text-field>

      <v-text-field
        label="Telefone"
        v-model="user.celphone"
        prepend-icon="phone_android"
        required
      ></v-text-field>

      <v-btn color="primary" @click="save">Atualizar</v-btn>
    </panel>

    <v-dialog
      v-model="dialog"
      max-width="290">
      <v-card>
        <v-card-text>
          Informações pessoais atualizadas com sucesso
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
  <v-flex xs10 v-else>
    <h3>Logue-se para acessar essa função</h3>
  </v-flex>
</v-layout>
</template>

<script>
import { mapState } from 'vuex';
import Panel from '@/components/Base/Panel.vue';
import UserService from '@/services/user';

export default {
  data() {
    return {
      user: {
        name: null,
        celphone: null,
      },
      dialog: false,
    };
  },
  components: {
    Panel,
  },
  methods: {
    async save() {
      try {
        const { user, updated } = (await UserService.update(this.user)).data;
        this.$store.dispatch('updateUser', this.user);
        if (!updated) throw new Error('Fail to update');
        this.$store.dispatch('setUser', user);
        this.dialog = true;
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
    }),
  },
  mounted() {
    if (!this.isUserLoggedIn) {
      this.$router.push('/');
      return;
    }
    this.user.address = this.$store.state.auth.user.address;
    this.user.name = this.$store.state.auth.user.name;
    this.user.celphone = this.$store.state.auth.user.celphone;
  },
};
</script>
