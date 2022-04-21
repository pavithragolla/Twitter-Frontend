<template>
    <div>


            <postbar />

    <div id="myDIV" class="header">
      <form @submit.prevent="createPost">
        <div class="container">
          <label for="title"><b>Title</b></label>
          <input
            type="text"
            placeholder="Enter title"
            v-model="title"
            required
          />

          <button type="submit">Create</button>
        </div>
      </form>

    </div>
    </div>
</template>

<script>
import Postbar from '~/components/Postbar.vue'
    export default {
  components: { Postbar },

     data() {
        return{
        title: '',
    }
},


   methods: {
    async createPost() {
      console.log(this.formData)
      await this.$store.dispatch('createPost',{
         title: this.title
      })
    },


   }
    }
</script>

<style scoped>
.container {
  padding: 16px;
}
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>