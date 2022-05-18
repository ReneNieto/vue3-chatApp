<script setup>
import ProfileAvatar from 'vue-profile-avatar'
import SentBubble from '../ChatBubbles/SentBubble.vue'
import { allUsers } from '../../store/getUsers'
import { onBeforeMount } from '@vue/runtime-core'

const store = allUsers()


const props = defineProps({
    chat: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="w-full   ">
        <div class="flex flex-col items-end">
            <div class="flex justify-end items-center pr-4 mb-4">
                <div class="flex flex-col  justify-end mr-4">
                    <h2>{{ store.authUser.name }}</h2>
                    <p class="text-right">12:50</p>
                </div>
                <ProfileAvatar :username="store.authUser.name"></ProfileAvatar>

            </div>
            <SentBubble :chat="props.chat.message" />
        </div>
    </div>
</template>
