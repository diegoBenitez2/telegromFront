<template>
    <article class="userList">
        <section class="userList__options">
            <i class="mdi mdi-menu options__menu" />
            <el-input placeholder="search"
            prefix-icon="el-icon-search" class=" input-search options__input"/>
        </section>
        <section class="userList__list">
            <ul class="list__container">
                <CardUserList />
            </ul>
        </section>
    </article>
</template>

<script>
import CardUserList from '../components/CardUserList.vue';

export default {
    name: 'UsersActive',
    components: {
        CardUserList,
    },
};

</script>
<style lang="scss" scoped>
.userList{
    min-width: 342px;
    height: 100vh;
    &__options{
        display: flex;
        justify-content: center;
        padding: 5px 20px 15px;
    }
    .options{
        &__menu{
            font-size:14px;
            margin:0px;
            margin-right: 20px;
        }
    }
    .list{
        &__container{
            padding: 0;
            margin:0;
            border: 0;
        }
    }
}
</style>
