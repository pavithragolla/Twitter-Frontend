<template>
    <div>
   <postbar />
   <div class="post">
    <h2>All Posts</h2>
    <ul>
    <li  v-for="(task, i) in $store.state.posts" :key="i">
    <span @click="postpage(task.id)" class="postspan"><span>{{ task.title }} </span></span>
    </li>
    <!-- <span>
        next
    </span> -->
    </ul>
   </div>
    </div>
</template>

<script>
import mapState from 'vuex'
import Postbar from '~/components/Postbar.vue'
    export default {
  components: {
      Postbar
  },


 async mounted() {
    await this.$store.dispatch('getPosts')
    // console.log("post");
},
// computed: {
//     ...mapState(['posts'])
// },
methods: {
    postpage(id) {
        this.$router.push('/Postpage/' + id)
        console.log(id);
    }
}



    }
</script>

<style scoped>
h2{
  align-items: center;
}
</style>