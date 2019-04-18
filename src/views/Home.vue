<template>
  <div class="col-sm">
    <div v-if="user">
      <div class="row">
        <div class="col-sm centered">
          <h1>My Wishlists</h1>
          <p class="subtitle">Logged in as {{ user.name }} <a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i></a></p>
          <div class="row">
            <div class="col-sm">
              <form @submit.prevent="createList">
                <input type="text" v-model="newListName" placeholder="List Name">
                <button type="submit">Add List</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="centered">
        <p><strong>In order to create or view lists, you must register for an account or login.</strong></p>
        <div class="centered">
          <router-link to="/register" class="pure-button">Register</router-link>
          or
          <router-link to="/login" class="pure-button">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    data() {
      return {
        newListName: '',
      }
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    async created() {
      await this.$store.dispatch("getUser")
    },
    methods: {
      async logout() {
        try {
          this.error = await this.$store.dispatch("logout");
        } catch (error) {
          console.log(error);
        }
      },
      async createList() {
        console.log(this.newListName);
      }
    }
  }
</script>

<style>
  h1 {
    font-weight: bold;
    margin-bottom: 2px;
  }

  .subtitle {
    /*font-style: italic;*/
    margin: 0 auto;
    color: gray;
  }

  .subtitle a {
    padding-left: 20px;
    color: #222;
    font-size: 1.5em;
  }

  .centered > * {
    text-align: center;
  }
</style>
