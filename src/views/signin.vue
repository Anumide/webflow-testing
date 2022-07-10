<template>
  <div class="contain h-screen flex">
    <div class="welcome-details hidden md:block h-full bg-[#18345E] w-1/2">
      <heroContent :text="text" />
    </div>
    <div class="login-detail fade-in h-full md:w-1/2 w-full flex flex-col justify-center items-center mx-auto text-left">
      <div class="2xl:w-[36rem] lg:w-[26rem] md:w-80 w-4/5">
        <h1 class="text-[#18345E] text-3xl font-bold tracking-wider">Sign In</h1>
        <form class="mt-4">
            <!-- for email -->
          <div class="relative pb-2">
          <div class="email mb-2">
            <label for="email" class="text-[#18345E] text-xs mb-1">Email</label>
            <div class="email-input flex justify-between items-center bg-[#F4F2F2] rounded-md p-2" ref="emailInput">
              <input type="text" ref="email" name="email" placeholder="johndoe@gmail.com" class="w-11/12 bg-transparent placeholder:italic placeholder:opacity-50 placeholder:text-[#18345E] text-[#18345E] text-sm placeholder:text-xs focus:outline-none" @keydown="remError" required>
              <span class="w-[6%]"><img src="../assets/email.svg" alt="email" class="w-full"></span>
            </div>
            </div>
            <p class="absolute text-xs font-light tracking-wide text-rose-500 bottom-0" v-if="isEmail">please input email</p>
          </div>
            <!-- for password -->
          <div class="relative pb-2">
          <div class="password mb-2">
            <label for="password" class="text-[#18345E] text-xs mb-1">Password</label>
            <div class="password-input flex justify-between items-center bg-[#F4F2F2] rounded-md p-2" ref="passwordInput">
              <input type="password" ref="password" name="password" placeholder="Type your password" class="w-11/12 bg-transparent placeholder:italic placeholder:opacity-50 placeholder:text-[#18345E] text-[#18345E] text-sm placeholder:text-xs focus:outline-none"  @keydown="remError" required>
              <span class="w-[6%]"><img src="../assets/password.svg" apassword-inputlt="password" class="w-full"></span>
            </div>
            </div>
            <p class="absolute text-xs font-light tracking-wide text-rose-500 bottom-0" v-if="isPassword">please input password</p>
          </div>
            <!-- button for sign in -->
          <button @click.prevent="handleSubmit" class="w-full bg-[#18345E] hover:bg-blue-900 transition mt-6 text-zinc-300 font-bold p-2 rounded-md">Sign In</button>
        </form>
        <div class="account-setup text-center mt-2">
          <span class="text-xs font-light tracking-wide">Don’t have an account?</span>
          <router-link :to="{name: 'SignUp'}" class="text-xs ml-1 text-blue-900">Sign Up</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import heroContent from '../components/heroContent.vue'

export default{
  components: {
    heroContent
  },
  setup(){
   let isEmail = ref(false)
   let isPassword = ref(false)
   const text = ref('back')
   const email = ref(null)
   const password = ref(null)
   const passwordInput = ref(null)
   const emailInput = ref(null)
   const router = useRouter()
   

   const handleSubmit = () => {
     if(email.value.value == "" && password.value.value == ""){
      passwordInput.value.classList.add('border-2', 'border-rose-500')
      emailInput.value.classList.add('border-2', 'border-rose-500')
      isEmail.value = true
      isPassword.value = true
     }else if(email.value.value == ""){
      emailInput.value.classList.add('border-2', 'border-rose-500')
      isEmail.value = true
     }else if(password.value.value == ""){
      passwordInput.value.classList.add('border-2', 'border-rose-500')
      isPassword.value = true
     }else{
      router.push({name: 'Dashboard'})
     }     
   }

    const remError = () => {
    isEmail.value = false
    isPassword.value = false
    emailInput.value.classList.remove('border-2', 'border-rose-500')
    passwordInput.value.classList.remove('border-2', 'border-rose-500')
  }

   return {
      text,
      email,
      password,
      passwordInput,
      emailInput,
      isEmail,
      isPassword,
      handleSubmit,
      remError
   }
  }

}



</script>


<style scoped>

.fade-in {
	-webkit-animation: fade-in 1.2s 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
