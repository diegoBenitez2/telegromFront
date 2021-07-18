<template>
    <li class="message">
            <p class="message__text">Hola desde un chat para hacer purbaa parta sbaer sdsdsde</p>
            <div class="message__status">
                <p class="message__status_time">13:11</p>
                <i class="mdi mdi-check-double message__status_check "/>
            </div>
    </li>
</template>

<style lang="scss" scoped>
    .message{
        padding: 5px 8px;
        width: fit-content;
        max-width: 464px;
        min-width: 50px;
        border:0;
        border-top-left-radius: 14px;
        border-bottom-left-radius: 14px;
        border-top-right-radius: 14px;
        background: rgb(238,254,223);
        position: relative;
        &:before{
             content: ' ';
                    position: absolute;
                    width: 0;
                    height: 0;
                    left: auto;
                    right: -16px;
                    bottom: 0px;
                    border-top: 14px solid transparent;
                    border-left: 20px solid rgb(238,254,223);
                    border-bottom: 0px solid transparent;
        }
        &__text{
            max-width: 420px;
            text-transform: capitalize;
            text-align: left;
            margin:0;
            color: black;
            font-size:14px;
            font-weight:500;
        }
        &__status{
            display: flex;
            justify-content: flex-end;
            &_time{
                max-width:27px;
                font-size:12px;
                margin: 0;
                color:rgb(193,195,197);
            }
            &_check{
                font-size:11px;
                color:rgb(193,195,197);
            }

        }
    }
</style>
