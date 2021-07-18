<template>
    <section class="header">
        <div class="info">
            <!-- <figure class="avatar_container">
                <img src="" alt="img_info" class="avatar">
            </figure> -->
            <div class="avatar__no-images no_images">D</div>
            <div class="infoChat">
                <h4 class="infoChat_title title-text">Compartir</h4>
                <p class="infoChat__status">
                    <span class="infoChat__status_members">last seen</span>,
                    <span class="infoChat__status_online">127 online</span>
                </p>
            </div>
        </div>
        <div class="header__options">
            <i class="mdi mdi-magnify shadow-hover" />
            <el-popover placement="bottom" trigger="click" width="200">
                <ul class="dots__container">
                    <li class="dots__items">
                        <i class="mdi mdi-check-circle-outline dots__icons" />
                        <span class="dots__text">
                            Select Messages
                        </span>
                    </li>
                    <li class="dots__items">
                        <i class="mdi mdi-delete-outline dots__icons text-danger" />
                        <span class="dots__text text-danger">
                            Delete
                        </span>
                    </li>
                </ul>
                <i slot="reference" class="mdi mdi-dots-vertical shadow-hover" />
            </el-popover>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.header{
    position: relative;
    z-index: 1;
    height: 30px;
    padding: 12px 13px 12px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px -2px  rgba(0,0,0,.1);
    border:0;
    border-left: 1px solid rgb(193,195,197);
    border-right: 1px solid rgb(193,195,197);
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
            &__no-images{
                width:40px;
                height: 40px;
                margin:0;
                background: linear-gradient(120deg, #fff, rgb(0,123,255));
            }
        }
        .infoChat{
            margin: 0px 10px;
            min-width: 90px;
            text-align: left;
            &_title{
                margin:3px 0 0;
                font-size: 16px;
            }
            &__status{
                color:gray;
                font-size:13px;
                font-weight:500;
                margin:0;
            }
        }
    }
    &__options{
        display: flex;
        align-items: center;
        i{
            font-size:23px;
            color:$grayGeneral;
            cursor: pointer;
        }
    }
}
.dots{
    &__container{
        padding:10px 0;
        margin:0;
    }
    &__items{
        display: flex;
        align-items: center;
        justify-content:flex-start;
        padding: 10px;
        cursor: pointer;
        color: $blackTitle;
        &:hover{
            background:$grayLight;
        }
    }
    &__icons{
        font-size:22px;
        margin-right:10px;
    }
    &__text{
        text-transform: capitalize;
        font-size:14px;
        margin-left:10px;
        font-weight: 600;
    }
}
</style>
