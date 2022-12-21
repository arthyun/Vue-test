<template>
    <header>
        <div class="headerInner">
            <h1>
                <router-link to="/vue/">
                    <i class="fa-solid fa-landmark"></i> 서울의 공원
                </router-link>
            </h1>
            <nav ref="nav">
                <h2 class="hidden">GNB</h2>
                <ul>
                    <li>
                        <router-link to="/vue/sub2">공원소개</router-link>
                    </li>
                    <li>
                        <router-link to="/vue/sub3">프로그램</router-link>
                    </li>
                    <li>
                        <router-link to="/vue/">공원정보</router-link>
                    </li>
                </ul>
            </nav>
            <span class="hamburger" @click="clickHandle($event)">햄버거</span>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                    // navMain: document.querySelector('.headerInner nav')
                    awesome: true
                }
            },
        methods: {
            clickHandle(event){
                const navMove = this.$refs.nav;
                const tarGet = event.target;
                console.log(tarGet);
                const ttt = this.awesome = !this.awesome;

                if(ttt){
                    navMove.style.position = 'absolute';
                    navMove.style.right = -100 + '%';
                    navMove.style.top = 70+'px';
                    navMove.style.transition = 'all .2s';
                } else {
                    navMove.style.position = 'absolute';
                    navMove.style.right = 0;
                    navMove.style.top = 70+'px';
                    navMove.style.transition = 'all .2s';
                }

            }
        }
    }
</script>

<style>
    *{margin: 0; padding: 0;}
    a {color: #333; text-decoration: none;}
    ul, ol {list-style: none;}
    .headerInner h1 a {color: #fff; font-size: 28px; line-height: 50px;}
    .hidden {
        display: block;
        width: 1px;
        height: 1px;
        color: #fff;
        position: absolute;
        left: -1000%;
        overflow: hidden;
    }
    header {
        width: 100%;
        height: 70px;
        background: url(../assets/header01.png) 50% 50% repeat-x;
        position: relative;
    }
    .headerInner {
        display: flex;
        justify-content: space-between;
        padding: 7px 2rem;
        box-sizing: border-box;
    }
    .headerInner nav ul {
        display: flex;
        gap: 2rem;
    }
    .headerInner nav ul li a {
        color: #fff;
        line-height: 52px;
        font-weight: 500;
    }
    .hamburger {
        display: block;
        width: 50px;
        height: 50px;
        text-indent: -999px;
        color: #fff;
        overflow: hidden;
        position: absolute;
        right: 20px;
        top: 9px;
        background: url(@/assets/hamburger.png) 50% 50% no-repeat;
        background-size: cover;
        cursor: pointer;
        display: none;
    }
    @media screen and (min-width: 769px) {
        .headerInner nav {
            position: static !important;
        }
    }
    @media screen and (max-width: 768px) {
        .headerInner nav {
            width: 30%;
            /* height: 100%; */
            background: #4a79c6;
            border: 3px solid #fff;
            position: absolute;
            right: -100%;
            top: 70px;
            z-index: 100;
            padding: 2rem 0;
            padding-bottom: 3rem;
        }
        .headerInner nav ul {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }
        .headerInner nav ul li {
            width: 80%;
            border-bottom: 1px solid #fff;
        }
        .hamburger {
            display: block;
            z-index: 101;
        }
    }
    @media screen and (max-width: 480px) {
        /* .headerInner nav ul {
            display: flex;
            gap: 1rem;
        } */
    }
</style>
