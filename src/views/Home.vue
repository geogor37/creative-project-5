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
          <br>
          <h4 v-show="lists.length === 0" style="font-style: italic">You have no wishlists! Add one to get started.</h4>
          <div v-for="list in lists" class="wishlist" v-bind:class="{ selected: list === selectedList }" @click="toggleSelectedList(list)">
            <p><b>{{ list.name }}</b> - {{ list.items.length }} items</p>
<!--            <button @click.stop="deleteList(list)">Delete</button>-->
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
      },
      lists() {
        return this.$store.state.lists;
      }
    },
    async created() {
      await this.$store.dispatch("getUser");
      await this.$store.dispatch("getLists");
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
        try {
          await this.$store.dispatch("createList", this.newListName);
          this.newListName = '';
        } catch (e) {
          console.log(e)
        }
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

  .centered {
    margin: 0 15%;
  }

  .centered > * {
    text-align: center;
  }

  .wishlist {
    padding: 8px;
    vertical-align: center;
  }

  .wishlist > * {
    margin: auto 0;
    display: inline-block;
  }

  .wishlist > p {
    font-size: 20px;
  }

  .wishlist > button {
    margin-left: 8px;
    margin-right: 8px;
    height: auto;
    float: right;
  }

  .wishlist:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
</style>
