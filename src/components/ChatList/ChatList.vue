<script setup>
import { onBeforeMount } from '@vue/runtime-core';
import ExistingChat from '../ExistingChat/ExistingChat.vue'
import { allUsers } from '../../store/getUsers';

const users = allUsers()

onBeforeMount(() => {
    users.getAllUsers()
})

</script>

<template>
    <div class=" w-2/5 h-[calc(100vh-128px)] flex flex-col justify-start items-center border-r py-6 overflow-y-auto">

        <ExistingChat v-for="user in users.allUsers" :key="user.id" :user='user' />





    </div>

</template>

