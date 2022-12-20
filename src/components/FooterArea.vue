<template>
    <footer>
        <div class="footerInner">
            <address>
                <p>(04514)서울특별시 중구 서소문로 124 시티스퀘어 8층 ㅣ 02)120 공원 주요연락처</p>
                <p>COPYRIGHT©2014 SEOUL METROPOLITAN GOVERNMENT. ALL RIGHTS RESERVED.</p>
            </address>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style>
    footer {
        text-align: start;
        width: 100%;
        height: 100px;
        background: #4a79c6;
    }
    .footerInner {
        width: 90%;
        margin: 0 auto;
        position: relative;
    }
    .footerInner address {
        color: #fff;
        font-weight: 300;
        font-style: normal;
        position: absolute;
        top: 25px;
    }
    @media screen and (max-width: 640px) {
        .footerInner address p {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 480px) {
        .footerInner address p {
            font-size: 12px;
        }
    }
</style>
