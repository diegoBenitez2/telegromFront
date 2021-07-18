<template>
    <li :class="['card', { 'active':active, 'hover':!active }]" @click="crearChat">
        <!-- <figure class="avatar__container">
            <img src="" alt="" class="avatar__img" />
        </figure> -->
        <div class="card__no-image no_images">d</div>
        <div class="info">
            <div class="info__containerTitle">
                <h4 class="info__title title-text three-points">Compartir</h4>
                <i  class="mdi mdi-check-double info__check" />
                <span class="info__time">10:25</span>
            </div>
            <div class="info__user">
                <p class="info__user_ultimedMessage three-points">Alguien tiene peliculas</p>
                <span class="info__user_countMessage">29</span>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            active: false,
        };
    },
    methods: {
        crearChat() {
            this.active = true;
        },
    },
};
</script>
<style lang="scss" scoped>
    .card{
            display: flex;
            align-items: center;
            padding: 9px;
            border: 0;
            margin:0;
            margin-left: 5px;
            margin-right: 3px;
            border-radius: 15px;
            cursor: pointer;
            &__no-image{
                width: 54px;
                height: 54px;
                background: linear-gradient(120deg, #fff, rgb(0,123,255));
            }
        .avatar{
            &__container{
                width: 54px;
                height: 54px;
                border-radius: 50%;
                background: red;
                margin: 0;
            }
            &__img{
                object-fit: contain;
                margin:0;
            }
        }
        .info{
            margin-left: 10px;
            text-align: left;
            width: 258px;
            &__containerTitle{
                display: flex;
                justify-content: space-between;
            }
            &__title{
                width: 170px;
                margin:4px 0;
                font-size: 13px;
            }
            &__check{
                font-size: 10px;
                color: #c1c3c5;
                margin-left:5px;
            }
            &__time{
                font-size: 12px;
                color: rgb(112,117,121);
                margin-left:5px;
            }
            &__user{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size:14px;
                margin:0;
                &_ultimedMessage{
                    width:225px;
                    color:gray;
                    text-transform: capitalize;
                    margin: 0;

                }
                &_countMessage{
                    background-color: #c1c3c5 ;
                    border-radius: 16px ;
                    padding: 5px 6px;
                    color: #fff;
                    font-size:14px;
                    font-weight: 600;
                    text-align: center;
                }
            }
        }
    }
    .three-points{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .active{
        background: $blueGeneral;
        p,h4{
            color: #fff;
        }
        .info__time{
            color: #ffffff;
        }
        .info__user{
            &_ultimedMessage{
                color:#ffffff;
            }
            &_countMessage{
                color: $blueGeneral;
                background: #ffffff;
            }
        }
    }
    .hover:hover{
        background: rgba(244,244,245,.7);
    }
</style>
