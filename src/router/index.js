import Vue from 'vue'
import Router from 'vue-router'

//아래에 연결할 서브페이지(컴포넌트)를 불러온다.
// import main_page from '../components/MainVisual.vue';
// import content_page from '../components/ContentArea.vue';
import sub1_page from '../components/Sub1Content.vue';
import sub2_page from '../components/Sub2Content.vue';
import sub3_page from '../components/Sub3Content.vue';
import sub1_1_page from '../components/Sub1_1Content.vue';
import sub1_2_page from '../components/Sub1_2Content.vue';
import sub1_3_page from '../components/Sub1_3Content.vue';
import sub1_4_page from '../components/Sub1_4Content.vue';
import sub1_5_page from '../components/Sub1_5Content.vue';
import sub1_6_page from '../components/Sub1_6Content.vue';
import sub1_7_page from '../components/Sub1_7Content.vue';
import sub1_8_page from '../components/Sub1_8Content.vue';
import sub1_9_page from '../components/Sub1_9Content.vue';
import sub1_10_page from '../components/Sub1_10Content.vue';
import sub1_11_page from '../components/Sub1_11Content.vue';
import sub1_12_page from '../components/Sub1_12Content.vue';
import sub1_13_page from '../components/Sub1_13Content.vue';
import sub1_14_page from '../components/Sub1_14Content.vue';
import sub1_15_page from '../components/Sub1_15Content.vue';
import sub1_16_page from '../components/Sub1_16Content.vue';
import sub1_17_page from '../components/Sub1_17Content.vue';
import sub1_18_page from '../components/Sub1_18Content.vue';
import sub1_19_page from '../components/Sub1_19Content.vue';
import sub1_20_page from '../components/Sub1_20Content.vue';
import sub1_21_page from '../components/Sub1_21Content.vue';
import sub1_22_page from '../components/Sub1_22Content.vue';
import sub1_23_page from '../components/Sub1_23Content.vue';
import sub1_24_page from '../components/Sub1_24Content.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/vue/', component: sub1_page},
    { path: '/vue/sub2', component: sub2_page},
    { path: '/vue/sub3', component: sub3_page},
    { path: '/vue/sub1_1', component: sub1_1_page},
    { path: '/vue/sub1_2', component: sub1_2_page},
    { path: '/vue/sub1_3', component: sub1_3_page},
    { path: '/vue/sub1_4', component: sub1_4_page},
    { path: '/vue/sub1_5', component: sub1_5_page},
    { path: '/vue/sub1_6', component: sub1_6_page},
    { path: '/vue/sub1_7', component: sub1_7_page},
    { path: '/vue/sub1_8', component: sub1_8_page},
    { path: '/vue/sub1_9', component: sub1_9_page},
    { path: '/vue/sub1_10', component: sub1_10_page},
    { path: '/vue/sub1_11', component: sub1_11_page},
    { path: '/vue/sub1_12', component: sub1_12_page},
    { path: '/vue/sub1_13', component: sub1_13_page},
    { path: '/vue/sub1_14', component: sub1_14_page},
    { path: '/vue/sub1_15', component: sub1_15_page},
    { path: '/vue/sub1_16', component: sub1_16_page},
    { path: '/vue/sub1_17', component: sub1_17_page},
    { path: '/vue/sub1_18', component: sub1_18_page},
    { path: '/vue/sub1_19', component: sub1_19_page},
    { path: '/vue/sub1_20', component: sub1_20_page},
    { path: '/vue/sub1_21', component: sub1_21_page},
    { path: '/vue/sub1_22', component: sub1_22_page},
    { path: '/vue/sub1_23', component: sub1_23_page},
    { path: '/vue/sub1_24', component: sub1_24_page},
  ]
})
