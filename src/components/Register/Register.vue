<script setup>
import { ref } from 'vue'
import ky from 'ky'
import router from '../../routes/routes';

const formData = ref({})
const submitHandler = async () => {
  const resp = await ky.post('http://127.0.0.1:8000/api/register', {
    json: formData.value,
    throwHttpErrors: false,
  })
    .json()
  localStorage.setItem('access_token', resp.access_token)

  window.location.href = '/'


}
</script>

<template>
  <div class="h-screen flex justify-center items-center ">


    <FormKit type="form" v-model="formData" :actions="false" :form-class="submitted ? 'hide' : 'show'"
      submit-label="Register" @submit="submitHandler">

      <FormKit type="text" name="name" label="Your name" help="What do people call you?" validation="required"
        input-class="w-full h-10 bg-white rounded-lg border" outer-class="mb-8" />
      <FormKit type="text" name="email" label="Your email" help="What email should we use?" validation="required|email"
        input-class="w-full h-10 bg-white rounded-lg border" outer-class="mb-8" />

      <FormKit type="password" name="password" label="Password" input-class="w-full h-10 bg-white rounded-lg border"
        outer-class="mb-8" validation="required|length:6" :validation-messages="{
          matches: 'Please include at least one symbol',
        }" help="Choose an account password" />


      <FormKit type="submit" input-class="w-full h-10  mb-8 bg-blue-500 rounded-lg">
        Register
      </FormKit>
      <a href="/login">already a member?</a>
    </FormKit>

  </div>
</template>