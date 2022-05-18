<script setup>
import { ref } from 'vue'
import { onBeforeMount, onBeforeUnmount, onUpdated, watchEffect } from '@vue/runtime-core'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import ky from 'ky'
import SentChat from '../Sentchat/SentChat.vue'
import ReceivedChat from '../ReceivedChat/ReceivedChat.vue'
import ChatInput from '../ChatInput/ChatInput.vue'
import { allUsers } from '../../store/getUsers'

const scroll = ref(null)
const store = allUsers()

watchEffect(() => {
    const eventName = `.chat-${[store.authUser.id, store.currentContact.id].sort().join('-')}`
    const channel = window.Echo.channel('chatApp')

    channel.listen(eventName, (e) => {
        store.chatData.push(e.message)
    });

    return () => {
        channel.stopListening(eventName)
        window.Echo.leaveChannel('chatApp')
    }
})
watchEffect(() => {
    store.getChats();
})
onBeforeUnmount(() => {
    window.Echo.channel('chatApp').stopListening(eventName)
    window.Echo.leaveChannel('chatApp')
})
onUpdated(() => {
    scroll.value.scroll({ behavior: 'smooth', top: scroll.value.scrollHeight })
})
</script>

<template>
    <div class="flex flex-wrap items-center justify-center w-3/5 h-[calc(100vh-128px)] bg-neutral-200 border-b overflow-y-auto"
        ref="scroll">
        <template :key="item.id" v-for="item in store.chatData">
            <template v-if="item.sender_id === store.authUser.id">
                <SentChat :chat="item" />
            </template>
            <template v-else>
                <ReceivedChat :chat="item" />
            </template>
        </template>
        <ChatInput />

    </div>
</template>