<template>
    <div>
        <Postbar />
        <div class="profile">
        <h1>Profile</h1>
        <p>
        Name:
            <input v-model="userName" v-if="isUpdating" type="text">
        <span v-else> {{name}}</span>
             <button v-if="!isUpdating" @click="edit" >Edit</button>
             <button v-if="isUpdating"  @click="updatePost" >Submit</button>
        </p>


        <p>Email: {{email}}</p>
        </div>

    </div>
</template>

<script>
import{ mapState } from'vuex'
import Postbar from '~/components/Postbar.vue'
    export default {
        // props: {
        //     items: {
        //         type: Object,
        //         required: true,
        //     }
        // },


  components: { Postbar },


    data() {
        return {
            userName: '',
            // email: '',
            isUpdating: false,


        }
    },
    computed: {
        ...mapState(['name', 'email']),
    },
    methods: {
    //     async updatePost(id) {
    //  await this. $store.dispatch('updatePost',id)
    //   },
         updatePost() {
        this.isUpdating = false;
        this.$store.dispatch('updatePost', this.userName);
        this.$store.commit('updatePost', this.userName);
      },
        edit() {
            this.isUpdating = true;
            this.userName =this.name
            // console.log(data);
            console.log("haiiiiii");
        }
    },

}
</script>

<style scoped>

</style>