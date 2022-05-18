<script setup>
import ProfileAvatar from 'vue-profile-avatar'
import ReceivedBubble from '../ChatBubbles/ReceivedBubble.vue'
import { allUsers } from '../../store/getUsers'
const store = allUsers()

const props = defineProps({
    chat: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="w-full">
        <div class="flex flex-col ">
            <div class="flex  items-center pl-4 mb-4">
                <ProfileAvatar :username="store.currentContact.name"></ProfileAvatar>
                <div class="flex flex-col  justify-end ml-4">
                    <h2>{{ store.currentContact.name }}</h2>
                    <p>12:50</p>
                </div>

            </div>
            <ReceivedBubble :chat="props.chat.message" />
        </div>
    </div>
</template>
