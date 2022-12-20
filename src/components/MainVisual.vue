<!-- <template>
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
</template> -->

<!-- <script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: 'App',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
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
            }
        }
</script> -->

<!-- <style>
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
</style> -->
