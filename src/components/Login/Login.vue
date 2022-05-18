<script setup>
import { ref } from 'vue';
import ky from 'ky'


const formData = ref({})
const handleSubmit = async () => {
    const resp = await ky.post('http://127.0.0.1:8000/api/login', {
        json: formData.value,
        throwHttpErrors: false,
    })
        .json()
    localStorage.setItem('access_token', resp.access_token)

    window.location.href = '/'
}
</script>

<template>
    <div class="h-screen w-screen flex justify-center items-center ">

        <FormKit type="form" @submit="handleSubmit" v-model="formData" :actions="false" form-class="w-96 ">
            <FormKit name="email" label="Email address" validation="required|email"
                input-class="w-full h-10 bg-white rounded-lg mb-8 border" />
            <FormKit type="password" name="password" label="Password" validation="required"
                input-class="w-full h-10 bg-white rounded-lg mb-8 border" />

            <FormKit type="submit" input-class="w-full h-10  mb-8 bg-blue-500 rounded-lg">
                Login
            </FormKit>
            <a href="/register" class="text-blue-800">not a member?</a>
        </FormKit>


    </div>

</template>


