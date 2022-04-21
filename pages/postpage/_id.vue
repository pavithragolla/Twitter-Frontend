<template>
    <div>
        <Postbar />
        <SinglePost />
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.commit('setPostId', this.$route.params.id)
        }

    }
</script>

<style lang="scss" scoped>

</style>