<template>
    <article :class="['search__message', {'active': modal}]">
        <section class="options">
            <i class="mdi mdi-arrow-left close shadow-hover" @click="toggleModal"/>
            <el-input prefix-icon="el-icon-search"
            placeholder="search" class="input-search inputSearch__message"/>
            <i class="mdi mdi-calendar-blank-outline calendar shadow-hover" />
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
import { mapGetters } from 'vuex';
import CardUser from '../components/CardUser.vue';

export default {
    name: 'SearchMessage',
    components: {
        CardUser,
    },
    computed: {
        ...mapGetters({
            modal: 'SearchMessage/getModals',
        }),
    },
    methods: {
        toggleModal() {
            this.$store.commit('SearchMessage/TOGGLE_MODALS');
        },
    },
};
</script>

<style lang="scss" scoped>
    .search__message{
        width: 0px;
        height: 100vh;
        border:0;
        overflow:hidden;
        transition: .3s all ease;
        .options{
            display: flex;
            align-items: center;
            padding: 5px 10px;
            .close, .calendar{
                font-size: 1.7em;
                color:$grayGeneral;
                cursor: pointer;
            }
            .inputSearch__message{
                margin: 0 15px;
            }
        }
        .found{
            padding:25px;
            border:0;
            &__text{
                margin:0;
                font-size: 1em;
                font-weight: 600;
                text-align: left;
                color:$grayGeneral;
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
    .active{
        width: 650px;
    }
</style>
