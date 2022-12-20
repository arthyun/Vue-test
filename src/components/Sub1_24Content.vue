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
                <li>
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
                <li class="active">
                    <router-link to="/vue/sub1_24" @click.native="moveActive($event)" id="btn25">중랑구</router-link>
                </li>
            </ul>
        </div>

    <div class="mainBox">
        <h2>
            <i class="fa-solid fa-location-dot"></i>
            {{ twentyfourJson.DATA[0].p_zone }}의 공원 정보입니다.
        </h2>
    
        <div class="list">
            <ul>
                <li v-for="(x,ind) in twentyfourJson.DATA" :key="ind">
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
    import joongrang from '../jsonAll/중랑구.json'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name : 'App',
        components: {
            Swiper,
            SwiperSlide
        },
        data(){
            return{
            twentyfourJson : joongrang,
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
        methods: {
            // 라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소 넣어줌
            fnSubPage() {
            this.$router.push('/sub')
            }
        }
    }
</script>

<style>
    
</style>