<template>
  <div class="col-sm">
    <div v-if="user">
      <div class="row">
        <div class="col-sm centered">
          <h1>My Wishlists</h1>
          <p class="subtitle">Logged in as {{ user.name }}</p>
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
    <!--    <div class="row">-->
    <!--      <form @submit.prevent="createList">-->
    <!--        <input type="text" v-model="newListName" placeholder="List Name">-->
    <!--        <button type="submit">Add List</button>-->
    <!--      </form>-->
    <!--    </div>-->
    <!--    <br>-->
    <!--    <h4 v-show="lists.length === 0" style="font-style: italic">You have no wishlists! Add one to get started.</h4>-->
    <!--    <div v-for="list in lists" class="wishlist" v-bind:class="{ selected: list === selectedList }" @click="toggleSelectedList(list)">-->
    <!--      <p><b>{{ list.name }}</b> - {{ list.items.length }} items</p>-->
    <!--      <button @click.stop="deleteList(list)">Delete</button>-->
    <!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    computed: {
      user() {
        return this.$store.state.user;
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
    margin-top: 2px;
    color: gray;
  }

  .centered > * {
    text-align: center;
  }
</style>
