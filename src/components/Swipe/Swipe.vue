<template>
    <div class="swipe">
        <div class="swiper-container">
            <div class="login">
                <div class="top">
                    <p>预期最高年化利率</p>
                    <h1>15%-16%</h1>
                    <button>注册送280元红包</button>
                    <p style="padding-top: 15px"><a href="#">已有账号 立即登陆</a></p>
                </div>
                <div class="btn">恭喜****2267注册成功，获得￥280元红包</div>
            </div>
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../static/images/swipe.gif"></div>
                <div class="swiper-slide"><img src="../../../static/images/swipe2.jpg"></div>
                <div class="swiper-slide"><img src="../../../static/images/swipe4.jpg"></div>
                <div class="swiper-slide"><img src="../../../static/images/swipe5.jpg"></div>
                <div class="swiper-slide"><img src="../../../static/images/swipe6.jpg"></div>
                <div class="swiper-slide"><img src="../../../static/images/swipe7.jpg"></div>
                <div class="swiper-slide"><img src="../../../static/images/swipe8.jpg"></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</template>

<script>
const Swipe = require("../../../static/js/swiper.js")
export default {
    data(){
   	    return {}
    },
    mounted(){
        new Swiper('.swiper-container', {
            autoplay: 2000,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            autoplayDisableOnInteraction: false,
            loop: true
        })
    }
}
</script>

<style lang="less" scoped>
    .swipe {
	    width: 100%;
        height: 350px;
	    position: relative;
	    overflow: hidden;
        .login {
            width: 315px;
            height: 300px;
            position: absolute;
            z-index: 9999;
            background: #FF8675;
            right: 15%;
            top: 25px;
            border-radius: 6px;
            
            .top {
                width: 100%;
                height: 207px;
                padding-top: 33px;
                text-align: center;
                color: #fff;
                h1 {
                    font-size: 51px;
                    padding: 5px 0 15px;
                }
                p {
                    font-size: 14px;
                    a {
                        color: #fff;
                    }
                }
                button {
                    width: 255px;
                    height: 45px;
                    outline: none;
                    border: 1px solid #fff;
                    background: #FF8675;
                    border-radius: 5px;
                    font-size: 18px;
                    color: #fff;
                }
            }
            .btn {
                width: 100%;
                height: 60px;
                line-height: 60px;
                background: #fff;
                color: #aaa;
                text-align: center;
                border-radius: 0 0 6px 6px;
                font-size: 13px;
            }
        }
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%
        }
    }
</style>