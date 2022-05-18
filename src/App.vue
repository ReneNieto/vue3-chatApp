<script setup>
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '1939b3f6b5329e8252e4',
    cluster: 'mt1',
    forceTLS: true
});

</script>

<template>
    <router-view />
</template>

<style>
</style>
