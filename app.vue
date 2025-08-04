<template>
    <img src="/weblossom_logo_large_light_shadow.svg" alt="weblossom_logo" />
    <h1>coming soon!</h1>
    <button @click="sendConversion">tracking button</button>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap");

body {
    margin: 0;
    padding: 0;
    color: white;
    font: 100% / 1.5 Winky Sans;
    color: hsl(230, 100%, 95%);
    background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

button {
    padding: 5px 20px 5px 20px;
    background-color: aquamarine;
    color: black;
    border-radius: 15px;
}

img {
    width: 16vw;
}

h1 {
    margin: auto;
    font-size: 4rem;
    font-weight: 600;
    animation: lights 5s 750ms linear infinite;
}

@keyframes lights {
    0% {
        color: hsl(230, 40%, 80%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.2),
            0 0 0.125em hsla(320, 100%, 60%, 0.3),
            -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
            1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

    30% {
        color: hsl(230, 80%, 90%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.5),
            0 0 0.125em hsla(320, 100%, 60%, 0.5),
            -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
            0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    40% {
        color: hsl(230, 100%, 95%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.5),
            0 0 0.125em hsla(320, 100%, 90%, 0.5),
            -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
            0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }

    70% {
        color: hsl(230, 80%, 90%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.5),
            0 0 0.125em hsla(320, 100%, 60%, 0.5),
            0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
            -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    100% {
        color: hsl(230, 40%, 80%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.2),
            0 0 0.125em hsla(320, 100%, 60%, 0.3),
            1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
            -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
}
</style>

<script setup lang="ts">
const { proxy } = useScriptUmamiAnalytics()

proxy.track('event', { name: 'conversion-step' })

function sendConversion() {
  proxy.track('event', { name: 'conversion' })
}
</script>
