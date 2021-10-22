<template>
    <div class="home">
        <UsersActive />
        <Chat />
        <SearchMessage />
    </div>
</template>

<script>
import UsersActive from './UsersActive.vue';
import SearchMessage from './SearchMessage';
import Chat from './Chat.vue';

export default {
    name: 'Home',
    components: {
        UsersActive,
        SearchMessage,
        Chat,
    },
};
</script>

<style lang="scss" scoped>
    .home{
        max-width: 1600px;
        margin: 0 auto;
        display: flex;
        border-left: 1px solid rgb(193,195,197);
        border-right: 1px solid rgb(193,195,197);
    }
</style>
