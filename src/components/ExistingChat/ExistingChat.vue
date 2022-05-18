<script setup>
import ProfileAvatar from 'vue-profile-avatar'
import { allUsers } from '../../store/getUsers';


const props = defineProps({
    user: {
        require: true,
        type: Object,
    },
})

const focusedUser = allUsers()

function handleClick(user) {
    focusedUser.current(user)
    focusedUser.$patch({ renderToggle: true })

}
</script>
<template>
    <button @click="handleClick(user)"
        class="w-11/12 h-28  rounded-2xl p-6 flex focus:bg-blue-600 focus:text-white cursor-pointer group ">

        <ProfileAvatar :username="user.name"></ProfileAvatar>


        <div class="flex w-3/4 h-full flex-col items-start justify-evenly ml-4">
            <h4 class="text-base font-medium ">{{ user.name }}</h4>
            <p class="text-sm font-normal text-neutral-400 group-focus:text-white ">Hola crack</p>
        </div>
        <div class=" h-full flex flex-col items-center justify-evenly">
            <p class="text-xs font-medium">12:40</p>
            <div class="w-6 h-6 rounded-full  p-1 text-white  bg-red-400 flex items-center justify-center text-xs">2
            </div>
        </div>

    </button>
</template>
