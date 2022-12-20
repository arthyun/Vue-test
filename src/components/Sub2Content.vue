<!-- 서브 페이지 마크업 -->
<template>
    <v-app id="inspire">
        <div class="imgBox">
            <h2><i class="fa-solid fa-tree"></i> 공원</h2>
            <p>국가나 지방 공공 단체가 공중의 보건ㆍ휴양ㆍ놀이 따위를 위하여 마련한 정원, 유원지, 동산 등의 사회 시설을 말한다.</p>
                <ul>
                    <li class="img1">
                        <img src="../assets/park01.jpg" alt="">
                    </li>
                    <li class="img2">
                        <img src="../assets/park02.jpg" alt="">
                    </li>
                    <li class="img3">
                        <img src="../assets/park03.jpg" alt="">
                    </li>
                </ul>
            </div>
        <v-card color="basil">
            <v-card-title class="text-center justify-center py-6">
            <h2 class="font-weight-bold text-h2 basil--text">
                <i class="fa-solid fa-tree"></i> 공원소개
            </h2>
            <p>원하시는 공원 종류를 선택해 보세요.</p>
            </v-card-title>

            <v-tabs v-model="tab" background-color="transparent" color="basil" grow id="parkIntro1">
            <v-tab v-for="item in items" :key="item">
                {{ item }}
            </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab" id="parkIntro2">
                <v-tab-item v-for="item in text" :key="item">
                    <v-card class="textZone">
                        <v-card-text>
                            {{ item }}
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>

        <div id="saengtae">
            <h2 class="font-weight-bold text-h2 basil--text">
                    <i class="fa-solid fa-tree"></i> 서울의 생태
            </h2>
            <h3>생태환경</h3>
            <p>하천은 육지부의 수역으로서 각종 생물들이 서식하는 자연생태계의 중심공간이라 할 수 있다. 도시하천은 흐르는 물과 함께 야생동물의 이동통로로 이용되기도 하며, 냉각수와 통풍 역할을 통해 도시 열섬현상을 완화시키고 또한 오염물질을 배출하는 환기구 역할을 담당하기도 한다.그리고 하천은 도시내 생태공원 및 휴식공간으로 활용되어 시민들의 여가 및 휴식공간으로 이용되기도 한다.</p>
            <p>서울시에는 한강, 중랑천, 안양천 등의 3개 국가하천이 있으며, 지방하천으로는 한강수계에는 홍제천, 봉원천, 반포천, 탄천, 성내천, 고덕천 등 6개 하천이 있다. 중랑천 수계에는 청계천, 도봉천, 방학천, 당현천, 목동천, 우이천, 면목천, 전농천 등의 하천이 있으며, 안양천에는 개화천, 도림천, 시흥천 등, 홍제천에는 불광천, 녹번천 등의 하천이 위치하고 있다.</p>
            <p>한강은 길이 514㎞, 유역면적 26,219㎢로 대한민국 국토 면적 100,266㎢의 약 26%에 해당하여 남한 최대 유역면적을 보유하며, 강원도 금강산 부근에서 발원한 북한강과 강원도 태백시에서 발원한 남한강이 양수리에서 합류하여 북서방향의 서해로 흘러가는 하천이다. 현재에는 자연형 호안 조성, 수변환경 복원, 생태환경을 고려한 숲 조성 등 자연성을 강조함과 동시에 시민이용을 위한 접근성 향상 및 문화기반조성 사업 등을 실시하여 한강에 대한 시민과 자연의 공존을 도모하고 있다.</p>
            <p>한강의 생태복원과 시민이용이 활성화됨에 따라 한강생태계에 대한 정밀조사와 변화추이 분석 등에 대한 연구의 필요성이 강조되면서, 서울시에서는 1987년부터 ‘제1차 한강생태계 조사연구’를 시작으로 2017년 제8차까지 지속적인 정기 모니터링을 수행해 왔다. 조사범위는 한강본류와 주요 지천으로 한강생태 현황을 분석하고, 생물상과 생태환경 조사결과를 바탕으로 기후 변화, 이용 현황 등 여건 변화를 분석하여 한강생태계의 보전 및 향상방안을 도출하고 있다.</p>
        
            <table>
                <caption>한강 및 하천생태환경 표</caption>
                    <colgroup>
                        <col style="width:15%;">
                        <col style="width:10.625%;">
                        <col style="width:10.625%;">
                        <col style="width:10.625%;">
                        <col style="width:10.625%;">
                        <col style="width:10.625%;">
                        <col style="width:10.625%;">
                        <col style="width:10.625%;">
                        <col style="width:10.625%;">
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">분류군/년도</th>
                        <td class="parkname">1987</td>
                        <td class="parkname">1990</td>
                        <td class="parkname">1994</td>
                        <td class="parkname">1998</td>
                        <td class="parkname">2002</td>
                        <td class="parkname">2007</td>
                        <td class="parkname">2012</td>
                        <td class="parkname">2017</td>
                    </tr>
                    <tr>
                        <th scope="row">식물플랑크톤</th>
                        <td>184</td>
                        <td>178</td>
                        <td>128</td>
                        <td>341</td>
                        <td>321</td>
                        <td>149</td>
                        <td>229</td>
                        <td>209</td>
                    </tr>
                    <tr>
                        <th scope="row">동물플랑크톤</th>
                        <td>23</td>
                        <td>62</td>
                        <td>78</td>
                        <td>52</td>
                        <td>38</td>
                        <td>85</td>
                        <td>87</td>
                        <td>101</td>
                    </tr>
                    <tr>
                        <th scope="row">저서성대형무척추동물</th>
                        <td>112</td>
                        <td>110</td>
                        <td>89</td>
                        <td>105</td>
                        <td>133</td>
                        <td>106</td>
                        <td>124</td>
                        <td>163</td>
                    </tr>
                    <tr>
                        <th scope="row">육상곤충</th>
                        <td>117</td>
                        <td>104</td>
                        <td>90</td>
                        <td>214</td>
                        <td>435</td>
                        <td>398</td>
                        <td>420</td>
                        <td>230</td>
                    </tr>
                    <tr>
                        <th scope="row">어류</th>
                        <td>46</td>
                        <td>21</td>
                        <td>44</td>
                        <td>50</td>
                        <td>57</td>
                        <td>71</td>
                        <td>69</td>
                        <td>67</td>
                    </tr>
                    <tr>
                        <th scope="row">양서파충류</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>19</td>
                        <td>19</td>
                        <td>15</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <th scope="row">조류(새)</th>
                        <td>52</td>
                        <td>46</td>
                        <td>71</td>
                        <td>126</td>
                        <td>108</td>
                        <td>99</td>
                        <td>114</td>
                        <td>144</td>
                    </tr>
                    <tr>
                        <th scope="row">포유류</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>9</td>
                        <td>13</td>
                        <td>11</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <th scope="row">수생 및 육상식물</th>
                        <td>161</td>
                        <td>85</td>
                        <td>580</td>
                        <td>688</td>
                        <td>719</td>
                        <td>902</td>
                        <td>1,082</td>
                        <td>1,221</td>
                    </tr>
                </tbody>
            </table>
            <p>2017년 제8차 조사결과에 따르면 어류는 한강본류와 주요 지천에서 총19과 67종 15,452개체가 출현하였다.</p>
            <p>분류군별로 살펴보면 잉어과에 속하는 종이 35종으로 가장 다양하였고 그 다음으로 망둑어과 6종, 동자개과 4종, 미꾸리과, 꺽지과, 동사리과, 바다빙어과, 숭어과, 검정우럭과 등에 속하는 종이 각각 2종이었다. 그 외에 뱀장어과, 멸치과, 메기과, 농어과, 송사리과, 둑중개과, 돛양태과, 버들붕어과, 가물치과, 참복과 등에 속하는 종이 각각 1종이다. 본 조사에서는 산란과 성장을 위해 이동하는 회유성 어종인 뱀장어, 웅어, 은어, 빙어, 황복 5종이 출현하였다.</p>
            <p>조류는 총144종 107,506개체가 확인되었으며, 노랑부리저어새(천연기념물, 멸종위기Ⅱ), 멸종위기야생생물 Ⅰ급인 매, 참수리, 흰꼬리수리, Ⅱ급인 독수리, 물수리, 벌매, 새호리기, 솔개, 잿빛개구리매, 참매, 큰고니, 큰기러기, 호사비오리, 횐목물떼새 등을 비롯한 다양한 종류의 조류가 관찰되었다. 또한 양서류와 파충류는 각 7종이 출현하였고, 멸종위기야생생물로는 맹꽁이(Ⅱ급)가 확인되었다.</p>
            <p>탄천은 경기도 용인에서 발원해 성남시와 서울 송파구와 강남구의 경계를 이루는 한강의 지류로서 모래톱과 수변습지가 잘 발달되어 도심에서 보기 힘든 자연하천을 간직하고 있어 2002년 4월 서울시 생태경관보전지역으로 지정된 바 있다.</p>
            <p>중랑천 하류는 철새보호구역으로서 조류 서식공간으로 관리되고 있으며 여러 분류군의 수조류가 생활하기에 적합한 서식환경을 갖고 있어 많은 조류종이 출현하고 있으나, 중랑천 전체적으로 수질개선이 필요한 실정이다.</p>
        </div> 
    </v-app>
</template>

<script>
    export default {
        data () {
        return {
            tab: null,
            items: [
            '국립공원', 
            '도립공원', 
            '도시공원', 
            '서울대공원'
            ],
            text: [
                "국립공원은 자연환경을 보호할 뿐만 아니라, 국민의 레크리에이션 지역으로서, 또 국제적으로는 나라의 대표적 관광지로서의 역할을 한다. 1933년 런던에서 개최된 자연보호에 관한 국제회의에서는 국립공원에 대하여 '공권(公權)의 지배를 받고, 권한 있는 입법조치에 의거하지 않고는 경계를 변경할 수도, 일부를 이양할 수도 없는 지역으로서 공중의 이익을 위하여 또는 공중의 레크리에이션을 위하여 미적(美的)·지리적·고고학적, 그 밖에 학술적 가치가 있는 사물·기념물·사적 등을 보존하고, 야생동물의 번식과 보호를 도모하여 수렵이나 동물의 포획, 초목의 채집과 벌채는 공원 당국의 지시가 아니고는 금지한다'고 규정하였다.",
                "특별시장·광역시장 또는 도지사가 지정한다. 해당 지역의 자연을 도립공원으로 지정하려면 도립공원위원회와 국토건설종합계획법 제13조의 규정에 따라 도건설종합계획심의회의 심의를 거쳐 환경부장관의 승인을 얻어야 한다. 이 경우 환경부장관은 관계 중앙행정기관과 협의를 거친다. 도립공원 계획은 도지사가 결정한다. 관리는 시·도가 맡아 한다. 관리·운영 방식은 국립공원에 준하고 특별보호지구·해중공원지구·특별지역 내에서의 행위는 도지사의 허가나 인가가 필요하다. 1970년 6월에 경상북도 금오산이 도립공원으로 지정된 이래, 2009년 현재 24개 지역이 도립공원으로 지정되었고, 총면적은 792.33㎢이다. 공원 지정 목적은 자연보호를 중심으로 하되 관광자원으로도 이용하여 경제적 측면에서 국제수지를 개선하고 고용 효과를 이끌어내며 지방자치단체의 세금원을 확보하는 것이다. 사회·문화적 측면에서는 관광객의 왕래로 지역주민과의 교류를 돕는 것도 주요 목적 가운데 하나이다.",
                "일반적으로 공원은 국가나 지방 공공단체가 공중(公衆)의 보건·휴양·놀이 등을 위하여 마련한 정원이나 유원지, 동산 등의 사회시설을 말하는데, 한국에서는 법적 근거에 따라 크게 자연공원과 도시공원으로 구분한다. 도시공원은 '국토의 계획 및 이용에 관한 법률'에 근거한 도시계획시설 가운데 하나이며, 그 세부 사항은 '도시공원 및 녹지 등에 관한 법률'에서 규정하고 있다. '도시공원 및 녹지 등에 관한 법률'에 따라 특별시장·광역시장·특별자치시장·특별자치도지사 또는 대통령령으로 정하는 시의 시장 등 공원녹지기본계획 수립권자는 10년마다 관할구역의 도시지역에 대하여 공원녹지의 확충·관리·이용 방향을 종합적으로 제시하는 공원녹지기본계획을 수립하여야 하고, 그 계획에 따라 관할하는 도시지역의 일부에 대하여 도시녹화에 관한 계획을 수립하여야 한다. 또한 특별시장·광역시장·시장 또는 군수는 쾌적한 도시환경의 조성을 위하여 도시공원 또는 녹지를 확보하도록 노력하여야 한다. 도시공원의 설치 및 관리는 특별시장·광역시장·특별자치시장·특별자치도지사·시장 또는 군수가 공원조성계획에 따라 시행하되, 민간추진자가 '국토의 계획 및 이용에 관한 법률'에 따라 도시계획시설사업 시행자로 지정되고 실시계획의 인가를 받은 경우에는 도시공원 또는 공원시설을 설치 및 관리할 수 있다. 공원시설에는 ① 도로 또는 광장, ② 화단·분수·조각 등 조경시설, ③ 휴게소와 긴 의자 등 휴양시설, ④ 그네·미끄럼틀 등 유희시설, ⑤ 테니스장·수영장·궁도장 등 운동시설, ⑥ 식물원·동물원·수족관·박물관·야외음악당 등 교양시설, ⑦ 주차장·매점·화장실 등 이용자를 위한 편익시설, ⑧ 관리사무소·출입문·울타리·담장 등 공원관리시설, ⑨ 실습장·체험장·학습장·농자재 보관창고 등 도시농업을 위한 시설, ⑩ 그밖에 도시공원의 효용을 다하기 위한 시설 등이 포함된다. 도시공원은 그 기능 및 주제에 따라 크게 도시생활권의 기반이 되는 생활권공원과 생활권공원 외에 다양한 목적으로 설치하는 주제공원으로 구분한다. 생활권공원은 ① 소공원(소규모 토지를 이용하여 도시민의 휴식 및 정서 함양을 도모하기 위하여 설치하는 공원), ② 어린이공원(어린이의 보건 및 정서생활의 향상에 이바지하기 위하여 설치하는 공원), ③ 근린공원(근린거주자 또는 근린생활권으로 구성된 지역생활권 거주자의 보건·휴양 및 정서생활의 향상에 이바지하기 위하여 설치하는 공원)으로 나뉜다. 근린공원은 다시 근린생활권 근린공원, 도보권 근린공원, 도시지역권 근린공원, 광역권 근린공원으로 세분된다. 주제공원은 ① 역사공원(도시의 역사적 장소나 시설물, 유적·유물 등을 활용하여 도시민의 휴식·교육을 목적으로 설치하는 공원), ② 문화공원(도시의 각종 문화적 특징을 활용하여 도시민의 휴식·교육을 목적으로 설치하는 공원), ③ 수변공원(도시의 하천가·호숫가 등 수변공간을 활용하여 도시민의 여가·휴식을 목적으로 설치하는 공원), ④ 묘지공원(묘지 이용자에게 휴식 등을 제공하기 위하여 일정한 구역에 '장사 등에 관한 법률' 2조7호에 따른 묘지와 공원시설을 혼합하여 설치하는 공원), ⑤ 체육공원(주로 운동경기나 야외활동 등 체육활동을 통하여 건전한 신체와 정신을 배양함을 목적으로 설치하는 공원), ⑥ 도시농업공원(도시민의 정서순화 및 공동체의식 함양을 위하여 도시농업을 주된 목적으로 설치하는 공원), ⑦ 그밖에 특별시·광역시·특별자치시·도·특별자치도 또는 인구 50만 이상 대도시의 조례로 정하는 공원으로 나뉜다.",
                "총면적 646만㎡(동물원 282만㎡, 식물원 121만㎡). 도시인의 녹지공간 확보와 위락시설의 확충을 위하여 서울시가 1978년 착공하여 1984년 5월 개원하였다. 1995년 현재 동물원에는 총 366종 3,048수의 동물이 세계지도 모형으로 배치된 아프리카관 ·유라시아관 ·남북미관 ·호주관 등 75개 사육사에서 사육되고 있다. 식물원에는 총 1,144종 3만 6610본의 열대 ·아열대식물이 2,825㎡ 넓이의 열대 ·아열대관, 선인장 및 다육식물관, 난 ·양치류관 등에 수집되어 있다. 부대시설로는 청소년 문화시설 ·시민이용 위락시설 ·자연공원 ·호수 ·관리시설 등이 있고, 그 밖에도 민속놀이터 ·잔디운동장 ·전망대 ·어린이놀이터 ·음악당 등과 동물 ·식물연구소가 있다. 이 가운데 동 ·식물원과 부대시설은 시비로, 문화시설 및 위락시설은 민자를 유치해서 운영하고 있다. 이 밖에도 호수변을 순회하는 무궤도열차가 운행되고 있다."
            ],
        }
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

    .imgBox {
        width: 80%;
        margin: 0 auto;
        text-align: start;
        padding: 75px 0;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .imgBox h2 {
        font-size: 2rem !important;
        color: #4a79c6;
    }
    .imgBox h2::after {
        content: 'Park';
        width: 200px;
        height: 40px;
        font-size: 14px;
        font-weight: 500;
        color: #333;
        padding-left: 0.8rem;
    }
    .imgBox p {
        margin: 15px 0;
        margin-bottom: 30px;
    }
    .imgBox ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        padding-left: 0;
    }
    .imgBox ul li {
        overflow: hidden;
    }
    .imgBox .img1 {
        grid-column: 2/3;
        grid-row: 1/3;
        position: relative;
    }
    .imgBox .img1::after {
        content: '#서울대공원';
        color: #fff;
        text-align: center;
        padding-top: 60%;
        font-size: 30px;
        font-weight: 500;
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: rgba(104, 49, 255, 0.35);
        position: absolute;
        top: 100px;
        opacity: 0;
        transition: all .3s;
    }
    .imgBox .img2::after {
        content: '#한강공원';
        color: #fff;
        text-align: center;
        padding-top: 28%;
        font-size: 30px;
        font-weight: 500;
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: rgba(104, 49, 255, 0.35);
        position: absolute;
        top: 100px;
        opacity: 0;
        transition: all .3s;
    }
    .imgBox .img3::after {
        content: '#올림픽공원';
        color: #fff;
        text-align: center;
        padding-top: 28%;
        font-size: 30px;
        font-weight: 500;
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: rgba(104, 49, 255, 0.35);
        position: absolute;
        top: 100px;
        opacity: 0;
        transition: all .3s;
    }
    .imgBox .img1:hover::after,
    .imgBox .img2:hover::after,
    .imgBox .img3:hover::after{
        top: 0;
        opacity: 1;
    }
    .imgBox .img2 {
        grid-column: 1/2;
        grid-row: 1;
        position: relative;
    }
    .imgBox .img1 img,
    .imgBox .img2 img,
    .imgBox .img3 img {
        transform: scale(1.06);
    }
    .imgBox .img3 {
        grid-column: 1/2;
        grid-row: 2;
        position: relative;
    }
    .imgBox ul li img {
        width: 100%;
    }
    .basil {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 75px;
        font-family: 'Noto Sans KR', sans-serif;
        /* background-color: #f5f5f5 !important; */
    }
    .v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
        border-radius: 0 !important;
    }
    .v-application .justify-center {
        display: block;
        text-align: start !important;
    }
    .v-application .justify-center p {
        font-size: 1rem;
        font-weight: 400;
    }
    .basil--text {
        color: #4a79c6 !important;
    }
    .v-application--wrap {
        min-height: 0;
    }
    .v-card__text {
        text-align: start;
        font-size: 16px;
        line-height: 2em;
        background: transparent !important;
    }
    .v-sheet.v-card:not(.v-sheet--outlined) {
        box-shadow: none;
    }
    .v-application .text-h2 {
        font-size: 2rem !important;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    .v-tabs--grow > .v-tabs-bar .v-tab {
        font-size: 1.125rem;
        font-weight: 600;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    .v-slide-group__content {
        width: 100%;
    }
    .v-card__title {
        padding: 0;
    }
    .textZone {
        width: 100% !important;
        background: transparent !important;
    }
    #parkIntro1 {
        background: #f5f5f5;
    }
    #parkIntro2 {
        background: #f9f9f9;
    }

    /* saengtae */
    #saengtae {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 100px;
        text-align: start;
        font-family: 'Noto Sans KR', sans-serif !important;
        line-height: 1.75rem;
    }
    #saengtae h3 {
        color: #4a79c6;
        margin: 10px 0;
    }
    table caption {
        font-size: 20px;
        font-weight: bold;
        text-align: start;
        margin: 10px 0;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        border-top: 2px solid #4a79c6;
        border-bottom: 2px solid #4a79c6;
        margin-bottom: 30px;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    table tr {
        border-bottom: 1px solid #ccc;
    }
    table tr th {
        text-align: start;
        padding: 10px 0;
        padding-left: 10px;
        border-right: 1px solid #ccc;
        background: #f9f9f9;
    }
    table tr td {
        text-align: center;
        border-right: 1px solid #ccc;
    }
    table tr td:last-child{
        border-right: none;
    }
</style>