<template>
    <article class="userList">
        <section class="userList__options">
            <el-popover placement="bottom"  trigger="click" width="280">
                <ul class="menu__container">
                    <li class="menu__items">
                        <i class="mdi mdi-bookmark-outline menu__icon " />
                        <span class="menu__text">
                            Saved Messages
                        </span>
                    </li>
                     <li class="menu__items">
                        <i class="mdi mdi-account-outline menu__icon " />
                        <span class="menu__text">
                            Contacts
                        </span>
                    </li>
                     <li class="menu__items">
                        <i class="mdi mdi-cog-outline menu__icon " />
                        <span class="menu__text">
                            Settings
                        </span>
                    </li>
                    <li class="menu__items">
                        <i class="mdi mdi-weather-night menu__icon icon-dark-mode" />
                        <span class="menu__text">
                            Dark Mode
                        </span>
                        <el-switch v-model="menu.night" class="menu__switch"/>
                    </li>
                    <li class="menu__items">
                        <i class="mdi mdi-weather-night menu__icon icon-dark-mode" />
                        <span class="menu__text">
                            Animations
                        </span>
                        <el-switch v-model="menu.night" class="menu__switch"/>
                    </li>
                     <li class="menu__items">
                        <i class="mdi mdi-bookmark-outline menu__icon " />
                        <span class="menu__text">
                            Telegram Features
                        </span>
                    </li>
                    <li class="menu__items">
                        <i class="mdi mdi-bookmark-outline menu__icon " />
                        <span class="menu__text">
                            Repost Bugs
                        </span>
                    </li>
                    <li class="menu__items">
                        <i class="mdi mdi-bookmark-outline menu__icon " />
                        <span class="menu__text">
                            Switch to Z version
                        </span>
                    </li>
                    <li class="menu__items">
                        <i class="mdi mdi-bookmark-outline menu__icon " />
                        <span class="menu__text">
                            Switch to Old Version
                        </span>
                    </li>
                </ul>
                <div class="references">
                    <span class="references__text">
                        telegrom Web 1.0.0
                    </span>
                </div>
                <i slot="reference" class="mdi mdi-menu options__menu shadow-hover" />
            </el-popover>
            <el-input v-model="search" placeholder="search"
            prefix-icon="el-icon-search" class=" input-search options__input"/>
        </section>
        <section class="userList__list">
            <ul class="list__container">
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
            </ul>
        </section>
    </article>
</template>

<script>
import CardUser from '../components/CardUser.vue';

export default {
    name: 'UsersActive',
    components: {
        CardUser,
    },
    data() {
        return {
            search: '',
            menu: {
                night: false,
            },
        };
    },
};

</script>
<style lang="scss" scoped>
.userList{
    min-width: 420px;
    height: 100vh;
    &__options{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px 20px 7px 10px;
    }
    .options{
        &__menu{
            font-size:24px;
            margin-right: 10px;
            cursor: pointer;
            color:$grayGeneral;
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
    .menu{
        &__container{
            padding: 0;
            padding-top:10px;
            margin:0;
        }
        &__items{
            margin:0;
            padding: 8px 10px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor:pointer;
            list-style: none;
            &:hover{
                background: $grayLight;
            }
        }
        &__icon{
            font-size:2.1em;
            color:$grayGeneral;
            margin-right: 10px;
        }
        &__text{
            margin-left:10px;
            font-size:1.1em;
            color: $blackTitle;
            font-weight:400;
            text-transform: capitalize;
        }
        &__switch{
            margin-left:20px;
        }
    }
    .references{
        background: $grayLight;
        padding:5px;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        text-align: center;
        &__text{
            font-size:12px;
            font-weight: 100;
            color:$grayGeneral;
            text-transform: capitalize;
        }
    }
    .icon-dark-mode {
        transform: rotate(270deg);
    }
</style>
