<template>
    <article class="search__message">
        <section class="options">
            <i class="mdi mdi-close close"/>
            <el-input prefix-icon="el-icon-search"
            placeholder="search" class="input-search inputSearch__message"/>
            <i class="mdi mdi-calendar calendar" />
        </section>
        <div class="found">
            <p class="found__text">1 message found</p>
        </div>
        <section class="message__list">
            <ul class="message__list_container">
                <CardUser />
            </ul>
        </section>
    </article>
</template>

<script>
import CardUser from '../components/CardUser.vue';

export default {
    name: 'SearchMessage',
    components: {
        CardUser,
    },
};
</script>

<style lang="scss" scoped>
    .search__message{
        width: 600px;
        height: 100vh;
        border:0;
        overflow:hidden;
        .options{
            display: flex;
            align-items: center;
            padding: 5px 25px;
            .close .calendar{
                font-size: 18px;
                color:rgb(112,117,121);
            }
            .inputSearch__message{
                margin: 0 25px;
            }
        }
        .found{
            padding:25px;
            border:0;
            &__text{
                margin:0;
                font-size: 16;
                font-weight: 600;
                text-align: left;
                color:rgb(112,117,121);
            }
        }
        .message__list{
            &_container{
                padding:0;
                margin: 0;
                height: calc(100vh - 1390px);
                &::-webkit-scrollbar{
                    width: 8px;
                }
                &::-webkit-scrollbar-thumb{
                    background: #ccc;
                    border-radius: 4px;
                    &:hover{
                        background: #b3b3b3;
                        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
                    }
                }
                &::-webkit-scrollbar-track{
                    background: #e1e1e1;
                    border-radius: 4px;
                    &:hover{
                        background: #d4d4d4;
                    }
                    &:active{
                        background: #d4d4d4;
                    }
                }
            }
        }
    }
</style>
