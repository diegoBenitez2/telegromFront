<template>
    <li :class="['card', { 'activeCard':active, 'hover':!active }]" @click="crearChat">
            <div class="info">
                <div class="info-container">
                    <div class="info__no-image no_images">d</div>
                    <div class="info__containerTitle">
                        <h4 class="info__title three-points">Compartir</h4>
                        <p class="info-ultimedMessage three-points">
                            Alguien tiene peliculas
                        </p>
                    </div>
                </div>
                <div class="info__user">
                    <i  class="mdi mdi-check-double info__check" />
                    <span class="info__time">10:25</span>
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
            justify-content: space-between;
            padding: 9px;
            border: 0;
            margin:0;
            margin-left: 5px;
            margin-right: 3px;
            border-radius: 10px;
            cursor: pointer;
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
        .container_info {
            display: flex;
            justify-content: space-between;
        }
        .info{
            display: flex;
            justify-content: space-between;
            width: 100%;
            &__no-image{
                width: 54px;
                height: 54px;
                background: linear-gradient(120deg, rgb(195, 204, 255)1%, rgb(0,123,255));
                margin-right: 10px;
                font-size: 1.7em;
                font-weight: 600;
            }
            &__title{
                width: 170px;
                margin:0px 0 6px;
                font-size: 1em;
                font-weight: 500;
            }
            &__check{
                font-size: 10px;
                color: #c1c3c5;
                margin-left:5px;
            }
            &__time{
                font-size: .8em;
                color: rgb(112,117,121);
                display: block;
                font-weight: 300;
            }
            &__user{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size:14px;
                margin:0;
                &_countMessage{
                    background-color: #c1c3c5 ;
                    border-radius: 16px ;
                    padding: 5px 6px;
                    color: #fff;
                    font-size:14px;
                    font-weight: 400;
                    text-align: center;
                    display: block;
                }
            }
        }
        .info-container{
            display: flex;
            align-items: center;
        }
        .info-ultimedMessage{
            width:225px;
            color:gray;
            text-transform: capitalize;
            margin: 0;
            font-size: .95em;
            font-weight: 300;

        }
    }
    .three-points{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .activeCard{
        background: $blueGeneral;
        p,h4{
            color: #fff;
        }
        .info-ultimedMessage{
            color:#ffffff;
        }
        .info__time{
            color: #ffffff;
        }
        .info__user{
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
