 Mail with screen readers
Conversations
Using 0 GB
Program Policies
Powered by Google
Last account activity: 0 minutes ago
Open in 1 other location · Details

<template>
    <div>
        <input v-model="postText " v-if="isUpdating" type="text">
        <p v-else>{{post.title}}</p>
        <div class="btns" v-if="post.user_id == user_id">
            <button v-if="!isUpdating" @click="updateTitle" class="button1">Update</button>
            <button v-if="!isUpdating" @click="deletePost(post.id)" class="button2">Delete</button>
            <button v-else @click="submitPost">Submit</button>
        </div>
        <div>

             <h3>Comments</h3>
              <div v-for="(comment, i) in $store.state.comments" :key="i">
                  <div>
                      <span>{{comment.comments}}</span>


                      <button v-if="comment.userId ==  user_id" @click="deleteComment(comment.id)">Delete</button>
                  </div>
              </div>
              <div>
                  <label>Comment Here:</label>
                  <input type="text" v-model="comment">
                  <button  class="btn btn-button bg-success" @click="createComment">Comment</button>
                  </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        // props: {
        //     postId: {
        //         type: String,
        //         required: true,
        //     }
        // },
        data() {
            return {
            postText: '',
            isUpdating: false,
            comment: '',
            }
        },
        computed: {
            ...mapState(['post','user_id'])
        },
        async created() {
            await this.$store.dispatch('getPost')
            await this.$store.dispatch('getComments')
        },

        methods: {
            async deletePost(id){
                await this.$store.dispatch('deletePost', id)
                // this.$router.push('/');
            },
             updateTitle(){
            this.isUpdating = true;
             this.postText = this.post.title
            },

            submitPost() {
            this.isUpdating = false;
            this.$store.dispatch('updateTitle', this.postText);
            this.$store.commit('updateTitle', this.postText);
            },
            // async updatePost(id) {
            //     await this.$store.dispatch('updatePost', id)

            // }
            async createComment(id){
                await this.$store.dispatch('createComment', this.comment);
                await this.$store.dispatch('getComments');
                 this.comment = '';
                console.log("hi");
    },
             async deleteComment(id){
            await this.$store.dispatch('deleteComment', id);
            await this.$store.dispatch('getComments');
    },

 }
    }
</script>

<style scoped>

</style>