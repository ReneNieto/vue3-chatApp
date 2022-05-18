<script setup>
import ChatHeader from '../ChatHeader/ChatHeader.vue'
import ChatList from '../ChatList/ChatList.vue'
import ActiveChat from '../ActiveChat/ActiveChat.vue';
import { allUsers } from '../../store/getUsers';

const toggle = allUsers()

function getAuthUser() {

}

</script>

<template>
    <div class="flex flex-wrap  ">
        <ChatHeader />
        <ChatList />


        <ActiveChat v-if="toggle.renderToggle" />
    </div>
</template>


