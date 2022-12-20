<!-- 서브 페이지 마크업 -->
<template lang="html">
    <div class="programMain">
        <h2><i class="fa-solid fa-house-laptop"></i> 스스로 공원탐방 프로그램</h2>
        <img src="../assets/program01.jpg" alt="">

        <ul>
            <li>
                <img src="../assets/program02.jpg" alt="">
                <dl>
                    <dt>
                        <h3>월드컵공원</h3>
                    </dt>
                    <dd>월드컵공원(평화의 공원)의 1.8km를 따라 걷는 공원 산책여행입니다. 침엽수림의 피톤 치드와 21종 나무에 대한 선조들의 지혜, 재미있는 동영상 해설 등으로 나만의 힐링 시간을 가질 수 있습니다.</dd>
                    <a href="http://parks.seoul.go.kr/online-park/0309-p03.do" target="_blank" class="firstBtn">자세히보기</a>
                    <a href="http://parks.seoul.go.kr/online-park/0309-p07.do" target="_blank" class="secondBtn">온라인투어</a>
                </dl>
            </li>
            <li>
                <img src="../assets/program03.jpg" alt="">
                <dl>
                    <dt>
                        <h3>보라매공원</h3>
                    </dt>
                    <dd>안내자 없이 스스로 시작 해 봐요!! 보라매공원의 상징인 에어파크와 중앙잔디광장, 벚꽃나무길, 숲속의 둘레길을 따라 걸으면 마음이 가벼워집니다. 다양한 코스를 선택하는 재미와 자연을 관찰하며 나만의 힐링 시간을 가질 수 있는 별난 공원 탐방 여행입니다.</dd>
                    <a href="http://parks.seoul.go.kr/online-park/0309-p11.do" target="_blank" class="firstBtn">자세히보기</a>
                </dl>
            </li>
            <li>
                <img src="../assets/program04.jpg" alt="">
                <dl>
                    <dt>
                        <h3>길동생태공원</h3>
                    </dt>
                    <dd>안내자 없이 길동생태공원을 산책해 보세요. 신선한 숲 속 공기를 맡으며 새소리를 들을 수 있어요. 길동생태공원의 다양한 동식물이 어떻게 살아가고 있을까요? 계절마다 새로워지는 『생태가 궁금해』 퀴즈를 풀면서 길동생태공원을 조금씩 알아봅시다.</dd>
                    <a href="http://parks.seoul.go.kr/online-park/0309-p15.do" target="_blank" class="firstBtn">자세히보기</a>
                </dl>
            </li>
            <li>
                <img src="../assets/program05.jpg" alt="">
                <dl>
                    <dt>
                        <h3>남산공원</h3>
                    </dt>
                    <dd>서울의 명산 남산에 오신 것을 환영합니다~! 남산의 야외식물원에서 나홀로 숲 친구를 만나볼 수있는 시간! 남산야외식물원에 숨겨진 숲QR을 해독하고 미션을 수행해 보세요~ 어느새 내가 숲과 가까운 친구가 되어있을 거예요!</dd>
                    <a href="http://parks.seoul.go.kr/online-park/0309-p20.do" target="_blank" class="firstBtn">자세히보기</a>
                </dl>
            </li>
            <li>
                <img src="../assets/program06.jpg" alt="">
                <dl>
                    <dt>
                        <h3>북서울꿈의 숲</h3>
                    </dt>
                    <dd>단순한 산책은 지루해! 두발로 공원을 즐기는 아주 특별한 방법! 북서울 꿈의 숲의 다양한 장소를 누비며 미션도 수행하고 공원의 자연생태를 알아보아요. 스스로 찾고 해결해 나가다 보면 자연 속 성취감을 만끽 할 수 있을 거예요~</dd>
                    <a href="http://parks.seoul.go.kr/online-park/0309-p18.do" target="_blank" class="firstBtn">자세히보기</a>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            // 라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소 넣어줌
            fnMainPage() {
            this.$router.push('/main')
            }
        }
    }
</script>

<style>
    .programMain {
        width: 80%;
        margin: 75px auto;
        margin-bottom: 100px;
        text-align: start;
    }
    .programMain h2 {
        font-size: 32px;
        color: #4a79c6;
    }
    .programMain > img {
        width: 100%;
        display: block;
        margin: 30px 0;
        margin-bottom: 50px;
    }
    .programMain ul {
        display: flex;
        flex-direction: column;
        border-top: 2px solid #4a79c6;
        border-bottom: 2px solid #4a79c6;
    }
    .programMain ul li {
        width: 100%;
        display: flex;
        gap: 6rem;
        border-bottom: 1px solid #ccc;
        padding: 2rem 0;
    }
    .programMain ul li:last-child {
        border-bottom: 0;
    }
    .programMain ul li img {
        width: 30%;
        margin-left: 2rem;
    }
    .programMain ul li:nth-of-type(1) dl {
        padding-top: 2rem;
    }
    .programMain ul li dl {
        width: 50%;
        padding-right: 2rem;
        padding-top: 2.5%;
    }
    .programMain ul li dl dt h3 {
        font-size: 24px;
        margin-bottom: 15px;
    }
    .programMain ul li dl dd {
        font-size: 16px;
        line-height: 1.75rem;
        margin-bottom: 15px;
    }
    .programMain ul li dl .firstBtn {
        display: inline-block;
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        background: #4a79c6;
        padding: .5rem 1rem;
        border-radius: 10px;
        margin-right: 15px;
    }
    .programMain ul li dl .secondBtn {
        display: inline-block;
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        background: #23ac61;
        padding: .5rem 1rem;
        border-radius: 10px;
    }
   
    @media screen and (max-width: 1440px) { 
        .programMain ul li {
            gap: 4rem;
        }
        .programMain ul li:nth-of-type(1) dl {
            padding-top: 1rem;
        }
        .programMain ul li:nth-of-type(1) dl {
            padding-top: 0;
        }
        .programMain ul li dl {
            padding-top: 0;
        }
    }
    @media screen and (max-width: 1024px) { 
        .programMain ul li {
            gap: 2rem;
        }
        .programMain ul li img {
            width: 45%;
        }
        .programMain ul li:nth-of-type(1) dl {
            padding-top: 0;
        }
        .programMain ul li dl {
            padding-top: 0;
        }
    }
    @media screen and (max-width: 768px) {
        .programMain ul li {
            gap: 3rem;
        }
        .programMain ul li img {
            width: 45%;
            margin: 0;
        }
        .programMain ul li:nth-of-type(1) dl {
            padding-top: 0;
        }
        .programMain ul li dl {
            padding-top: 0;
        }
        .programMain ul li dl dd {
            overflow-y: scroll;
            max-height: 100px;
        }
    }
    @media screen and (max-width: 640px) {
        .programMain ul li {
            gap: 2rem;
        }
        .programMain ul li img {
            width: 45%;
            margin: 0;
        }
        .programMain ul li dl .firstBtn {
            margin-right: 5px;
        }
        .programMain ul li:nth-of-type(1) dl {
            padding-top: 0;
        }
        .programMain ul li dl {
            padding-top: 0;
        }
        .programMain ul li dl dd {
            overflow-y: scroll;
            max-height: 70px;
        }
    }
    @media screen and (max-width: 480px) {
        .programMain h2 {
            font-size: 30px;
        }
    }

</style>