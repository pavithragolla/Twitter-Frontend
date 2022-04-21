export const state = () => ({
    id: null,
    name:null,
    email:null,
    token: null,
    posts: [],
    post: [],
    user_id: null,
    postId: null,
    comments: [],
})


const getters ={};

const actions ={
    async login({commit}, data) {
       const response = await this.$axios.post('http://localhost:5157/api/user/Login', data)
        console.log(response.data)
        commit("Login", response.data)
        this.$axios.setHeader('Authorization', 'Bearer ' + response.data.token)
        this.$router.push('/Posts');




    },
    async register({commit, state}, data) {
        // console.log(data);
        const response = await this.$axios.post('http://localhost:5157/api/user/register', data).then(response => {
            // console.log(response.data);
            // commit(response.data)
        })
    },
    async getPosts({commit, state}) {
       const response = await this.$axios.get('http://localhost:5157/api/post')
    //    .then(response => {
            // console.log("hi");
            commit('setList', response.data);
        // })
    },
    async createPost({commit}, data) {
        await this.$axios.post('http://localhost:5157/api/post',{
            title:data.title
        })
    },
    async updatePost({ state }, data) {
        // console.log(data);
        const response=  await this.$axios.put('http://localhost:5157/api/user/',{
            name: data})
            console.log('hlo')
    },
    async updateTitle({state}, data) {
        const response = await this.$axios.put('http://localhost:5157/api/post/'+state.post.id, {title: data});
    },
    async deletePost({state}, data) {
        const response = await this.$axios.delete('http://localhost:5157/api/post/'+state.post.id, {title: data});
    },
    async getPost({commit, state}, data) {
        const response = await this.$axios.get('http://localhost:5157/api/post/' +state.postId)
        commit('setPost', response.data);
        // console.log('hi')
         // })
     },
     async createComment({commit,state}, data){
         console.log(data)
        const res = await this.$axios.post('http://localhost:5157/api/comment?post_id='+state.post.id, {comment: data});
        console.log("hiiiii");

      },
      async getComments({ commit, state }, data) {
          console.log('nithin')
        const res = await this.$axios.get('http://localhost:5157/api/comment?post_id=' + state.post.id)
        commit('setComments', res.data)
        console.log(res.data)
       },
       async deleteComment({commit,state}, data) {
        const response = await this.$axios.delete('http://localhost:5157/api/comment/'
        +data);
        console.log(response.data);
    },

};

export const mutations = {

    Login(state, data) {
        state.token = data.token
        state.user_id = data.id
        state.name = data.name
        state.email = data.email
    },
    setList(state, data) {
        state.posts = data;
    },
    updatePost(state, data) {
        state.name = data;

      },
      setPostId(state, data) {
          state.postId = data;
      },
      updateTitle(state,data) {
          state.post.title = data;
      },
      setPost(state, data) {
        state.post = data;
    },
    setComments(state, data) {
        state.comments = data;
    },



}
export default{
    state,
    mutations,
    getters,
    actions,
 }



