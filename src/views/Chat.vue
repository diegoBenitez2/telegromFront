<template>
    <article class="chat">
        <Header />
        <section class="chat__container">
            <div class="layout">
                <section class="board">
                        <h4 class="board__date">June 17</h4>
                        <ul class="board__list">
                            <Message />
                        </ul>
                </section>
                <section class="inputMessage">
                    <div class="inputMessage__container">
                        <i class="mdi mdi-face-smallmotics" />
                        <el-input placeholder="message" class="input-message chat_input"/>
                        <i class="mdi mdi-attachment attachment" />
                    </div>
                </section>
            </div>
        </section>
    </article>
</template>

<script>
import Header from '../components/Header.vue';
import Message from '../components/Message.vue';

export default {
    name: 'Chat',
    components: {
        Header,
        Message,
    },
};
</script>

<style lang="scss" scoped>
    .chat{
        width: 100%;
        height: 100vh;
        &__container{
            width: 100%;
            border: 0;
            background:linear-gradient(120deg,rgb(214,210,153),
            rgb(141,169,129) 30%,rgb(214,210,153));
            border:0;
        .layout{
            width: calc(100% - 380px);
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
            margin: 0 auto;
            .board{
                overflow: hidden;
                height: calc(100vh - 154px);
                text-align: center;
                &__date{
                    width: fit-content;
                    padding: 4px 6px;
                    margin: 32px auto;
                    border-radius:15px;
                    background: #738860;
                    color: white;
                    font-weight: 600;
                    font-size: 15px;
                    text-transform: capitalize;
                }
                &__list{
                    width: 100%;
                    padding:0;
                    margin:0;
                }
            }
            }
            .inputMessage{
                width: 100%;
                padding: 8px 8px 30px 8px ;
                text-align: center;
                border-top: 1px solid white;
                &__container{
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    background: white;
                    border-top-left-radius: 15px;
                    border-bottom-left-radius: 15px;
                    border-top-right-radius: 15px;
                    position: relative;
                 &:before{
                    content: ' ';
                    position: absolute;
                    width: 0;
                    height: 0;
                    left: auto;
                    right:-13px;
                    bottom: -0px;
                   border-top: 15px solid transparent;
                    border-left: 15px solid white;
                    border-bottom: 0px solid transparent;
                }
                    .emotics, .attachment{
                        font-size: 20px;
                        color:#c1c3c5;
                    }
                }
            }
        }
    }
</style>
