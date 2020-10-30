<template>
    <div :class="['arrow-container', reverse ? 'arrow-container-reverse' : '']">
        <div :class="['arrow', reverse ? 'arrow-reverse' : '']">
            <div class="point"></div>
        </div>
        <span :class="['span-message', reverse ? 'span-message-reverse' : '']">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: "ArrowComponent",
        props: {
            message: String,
            reverse: Boolean
        }
    }
</script>

<style scoped>
    .span-message {
        font-family: cursive;
        color: blue;
        font-size: large;
    }
    .span-message-reverse {
        margin-left: -50px;
    }
    .arrow-container {
        position: absolute;
        z-index: 999;
        top: 80px;
        left: 50px;
    }
    .arrow-container-reverse {
        left: 80%;
        top: 130px;
    }
    .arrow {
        box-sising: border-box;
        width: 20px;
        height: 105px;
        padding-left: 100px;
    }
    .arrow-reverse {
        transform: scaleX(-1);
    }

    .arrow:before {
        display: block;
        content: '';
        width: 100px;
        height: 98px;
        margin-left: -100px;
        border-top: 2px solid blue;
        -webkit-border-radius: 0 100px 0 0;
        -moz-border-radius: 0 100px 0 0;
        border-radius: 0 100px 0 0;
    }

    .arrow .point {
        position: absolute;
        left: 10px;
        top: 55px;
    }

    .arrow .point:before, .arrow .point:after {
        border: 1px solid blue;
        height: 25px;
        content: "";
        position: absolute;
    }

    .arrow .point:before {
        top: -56px;
        left: -2px;
        transform: rotate(-38deg);
        -webkit-transform: rotate(-38deg);
        -moz-transform:rotate(-38deg);
        -ms-transform: rotate(-38deg);
    }

    .arrow .point:after {
        top: -75px;
        left: 1px;
        transform: rotate(58deg);
        -webkit-transform: rotate(58deg);
        -moz-transform: rotate(58deg);
        -ms-transform: rotate(58deg);
    }
</style>