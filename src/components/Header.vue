<template>
    <section class="header">
        <div class="info">
            <!-- <figure class="header__avatar_container">
                <img src="" alt="img_info" class="header__avatar">
            </figure> -->
            <div class="avatar_background">D</div>
            <div class="infoChat">
                <h4 class="infoChat_title title-text">Compartir</h4>
                <p class="infoChat__status">
                    <span class="infoChat__status_members">last seen</span>,
                    <span class="infoChat__status_online">127 online</span>
                </p>
            </div>
        </div>
        <div class="header__options">
            <i class="header__options" />
            <i class="header__options_moreOptions" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.header{
    position: relative;
    z-index: 1;
    height: 35px;
    padding: 12px 25px;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px -2px  rgba(0,0,0,.1);
    border:0;
    border-left: 1px solid rgb(193,195,197);
    .info{
        min-width:20%;
        display: flex;
        align-items: center;
        .avatar{
            object-fit: contain;
            &_container{
                width:40px;
                height: 40px;
                margin:0;
                border-radius: 50%;
            }
            &_background{
                display:grid;
                place-items: center;
                width:40px;
                height: 40px;
                margin:0;
                border-radius: 50%;
                color: white;
                text-transform: capitalize;
                font-weight: bold;
                text-align: center;
                background: linear-gradient(120deg, #fff, rgb(0,123,255));
            }
        }
        .infoChat{
            margin: 0px 10px;
            min-width: 90px;
            text-align: left;
            &_title{
                margin:3px 0 0;
                font-size: 18px;
            }
            &__status{
                color:gray;
                font-size:14px;
                font-weight:500;
                margin:0;
            }
        }
    }
    &__options{
        display: flex;
        align-items: center;
        i{
            font-size:12px;
            color:#707579;
            margin-left:20px;
            cursor: pointer;
        }
    }
}
</style>
