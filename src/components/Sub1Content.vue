<!-- 메인 페이지 마크업 -->
<template lang="html">
    <article id="content">
        <div class="boxSwiper">
            <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
                <div class="imgBox1"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="imgBox2"></div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <h2 class="firstHead"><i class="fa-solid fa-location-dot"></i>&nbsp;서울시 지역별 공원 현황</h2>
        <span>지역을 선택해 보세요.</span>
        <div class="country">
            <ul>
                <li class="active">
                    <router-link to="/vue/" @click.native="moveActive($event)" id="btn1">강남구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_1" @click.native="moveActive($event)" id="btn2">강동구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_2" @click.native="moveActive($event)" id="btn3">강북구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_3" @click.native="moveActive($event)" id="btn4">강서구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_4" @click.native="moveActive($event)" id="btn5">관악구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_5" @click.native="moveActive($event)" id="btn6">광진구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_6" @click.native="moveActive($event)" id="btn7">구로구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_7" @click.native="moveActive($event)" id="btn8">금천구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_8" @click.native="moveActive($event)" id="btn9">노원구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_9" @click.native="moveActive($event)" id="btn10">도봉구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_10" @click.native="moveActive($event)" id="btn11">동대문구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_11" @click.native="moveActive($event)" id="btn12">동작구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_12" @click.native="moveActive($event)" id="btn13">마포구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_13" @click.native="moveActive($event)" id="btn14">서대문구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_14" @click.native="moveActive($event)" id="btn15">서초구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_15" @click.native="moveActive($event)" id="btn16">성동구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_16" @click.native="moveActive($event)" id="btn17">성북구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_17" @click.native="moveActive($event)" id="btn18">송파구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_18" @click.native="moveActive($event)" id="btn19">양천구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_19" @click.native="moveActive($event)" id="btn20">영등포구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_20" @click.native="moveActive($event)" id="btn21">용산구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_21" @click.native="moveActive($event)" id="btn22">은평구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_22" @click.native="moveActive($event)" id="btn23">종로구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_23" @click.native="moveActive($event)" id="btn24">중구</router-link>
                </li>
                <li>
                    <router-link to="/vue/sub1_24" @click.native="moveActive($event)" id="btn25">중랑구</router-link>
                </li>
            </ul>
        </div>
      
    <div class="mainBox">
        <h2>
            <i class="fa-solid fa-location-dot"></i>
            {{ firstJson.DATA[0].p_zone }}의 공원 정보입니다.
        </h2>
    
        <div class="list">
            <ul>
                <li v-for="(x,ind) in firstJson.DATA" :key="ind">
                    <p>{{ (ind+1) }}</p>
                    <dl>
                        <dt>{{ x.p_park }}</dt>
                        <dd class="comeon0">
                            <i class="fa-solid fa-location-dot" style="color:#4a79c6"></i>
                            {{ x.p_addr }}
                        </dd>
                        <dd class="comeon1">{{ x.visit_road }}</dd>
                        <span><i class="fa-solid fa-phone"></i> &nbsp; {{ x.p_admintel }}</span>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
    </article>
</template>

<script>
    import gangnam from '../jsonAll/강남구.json'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name : 'App',
        components: {
            Swiper,
            SwiperSlide
        },
        data(){
            return {
            firstJson : gangnam,
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
                }
            }
        },
        
        }
</script>

<style>
    #content {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 100px;
    }
    #content .firstHead {
        width: 80%;
        margin: 0 auto;
        margin-top: 75px;
        color: #4a79c6;
        text-align: start;
    }
    #content > span {
        display: block;
        width: 80%;
        margin: 10px auto;
        text-align: start;
    }
    #content .country {
        width: 80%;
        margin: 0 auto;
    }
    .country ul {
        width: 100%;
        display: flex;
        /* text-align: center; */
        flex-wrap: wrap;
        margin: 20px 0 75px 0;
        border-top: 1px solid #4a79c6;
        border-left: 1px solid #4a79c6;
    }
    .country ul li {
        width: 20%;
        border-right: 1px solid #4a79c6;
        border-bottom: 1px solid #4a79c6;
        transition: all .25s;
    }

    .country ul li a {
        display: block;
        line-height: 45px;
        color: #4a79c6;
        font-weight: 500;
        transition: all .25s;
    }
    .country ul li:hover {
        background: #afdfff;
    }
    .country ul li:hover a {
        color: #00a;
        font-weight: 700;
    }
    .country ul li.active{
        background: #afdfff;
        /* border: 1px solid #4a79c6; */
        /* border-style: inset; */
    }
    .country ul li.active a {
        color: #00a;
        font-weight: 700;
    }
    @media screen and (max-width:768px) {
    .country ul li{
        width: 25%;
    }
    }
    @media screen and (max-width:480px){
    .country ul li{
        width: 33.33%;
    }
    }
    .mainBox {
        width: 80%;
        margin: 0 auto;
        text-align: start;
    }
    .mainBox h2 {
        margin-bottom: 30px;
        color: #4a79c6;
    }
    .list {
        border-top: 2px solid #4a79c6;
        border-bottom: 2px solid #4a79c6;
    }
    .list ul li {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 25px 0;
        box-sizing: border-box;
    }
    .list ul li:last-child {
        border-bottom: none;
    }
    .list ul li p {
        width: 7%;
        text-align: center;
        /* padding: 2%; */
        box-sizing: border-box;
    }
    .list ul li dl {
        width: 90%;
        overflow: hidden;
    }
    .list ul li dl dt {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .list ul li dl dd {
        margin: 5px 0;
        font-size: 14px;
        font-weight: 400;
    }

    .list .comeon1 {
        display: inline-block;
        width: 70%;
    }
    .list ul li dl span {
        display: block;
        /* padding-right: 1rem; */
        color: #4a79c6;
        font-weight: 500;
        font-size: 18px;
        float: right;
    }

    @media screen and (max-width:768px) {
        .list .comeon1 {
            width: 60%;
        }
    }
    @media screen and (max-width:640px) {
        .list .comeon0 {
            width: 60%;
        }
    }
    .boxSwiper {
        height: 400px;
    }
    .swiper {
        height: 100%;
        width: 100%;
    }
    .swiper .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
    }
    .swiper .swiper-slide .imgBox1 {
        width: 100%;
        height: 100%;
        background: url(../assets/visual01.png) 50% 50% no-repeat;
        background-size: cover;
    }
    .swiper .swiper-slide .imgBox2 {
        width: 100%;
        height: 100%;
        background: url(../assets/visual02.png) 50% 50% no-repeat;
        background-size: cover;
    }
    .swiper-button-prev,
    .swiper-button-next {
        color: #007aff !important;
    }
    @media screen and (max-width:768px) {
        .boxSwiper {
            height: 350px;
        }
        .swiper .swiper-slide .imgBox1 {
            background-image: url(../assets/visual01_1.png);
        }
        .swiper .swiper-slide .imgBox2 {
            background-image: url(../assets/visual02_1.png);
        }
    }
</style>