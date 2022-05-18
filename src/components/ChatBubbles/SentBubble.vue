<script setup>

const props = defineProps({
    chat: {
        type: String,
        required: true
    }
})

</script>
<template>
    <div class=" w-fit mr-4 mb-4">
        <p class="p-3 rounded-b-xl rounded-tl-xl bg-white">{{ props.chat }}</p>
    </div>
</template>
