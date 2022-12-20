<template>
    <header>
        <div class="headerInner">
            <h1>
                <router-link to="/vue/">
                    <i class="fa-solid fa-landmark"></i> 서울의 공원
                </router-link>
            </h1>
            <nav>
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
        </div>
    </header>
</template>

<script>
    export default {
        
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
    @media screen and (max-width: 480px) {
        .headerInner nav ul {
            display: flex;
            gap: 1rem;
        }
    }
</style>
