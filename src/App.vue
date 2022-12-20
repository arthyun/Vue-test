<template>
    <div id="app">
        <HeaderArea/>
        <!-- <MainVisual/> -->
        <ContentArea/>
        <FooterArea/>
    </div>
</template>

<script>
    import HeaderArea from './components/HeaderArea.vue'
    // import MainVisual from './components/MainVisual.vue'
    import ContentArea from './components/ContentArea.vue'
    import FooterArea from './components/FooterArea.vue'

    export default {  //import한 것을 app범위에 연결 시켜주어야함
        name : 'app',
        components: {
                HeaderArea,
                // MainVisual,
                ContentArea,
                FooterArea
        },
        data(){
            return {
                }
            },
        methods: {
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

    body {
        font-size: 16px;
        font-family: 'Noto Sans KR', sans-serif;
        color: #333;
    }
    a {
     color:blue; text-decoration: none;
    }
    #app {
        font-family: 'Noto Sans KR', sans-serif;
        text-align: center;
        /* color: #333; */
    }
/* Dark Mode */
</style>
