<template>
   <div class="contain h-screen flex">
    <div class="welcome-details hidden md:block h-full bg-[#18345E] w-1/2">
      <heroContent :text="text" />
    </div>
    <div class="login-detail fade-in h-full md:w-1/2 w-full flex flex-col justify-center items-center mx-auto text-left">
      <div class="2xl:w-[36rem] lg:w-[26rem] md:w-80 w-4/5">
        <h1 class="text-[#18345E] text-3xl font-bold tracking-wider">Create Account</h1>
        <form class="mt-4">
            <!-- for name -->
           <div class="flex justify-between">
                <div class="profile mb-2 w-[49%]">
                    <label for="first-name" class="text-[#18345E] text-xs mb-1">First Name</label>
                    <div class="name-input flex justify-between items-center bg-[#F4F2F2] rounded-md p-2">
                        <input type="text" ref="fName" name="first-name" placeholder="John" class="w-11/12 bg-transparent placeholder:italic placeholder:opacity-50 placeholder:text-[#18345E] text-[#18345E] text-sm placeholder:text-xs focus:outline-none" required>
                        <span class="w-[9%]"><img src="../assets/profile.svg" alt="first name" class="w-full"></span>
                    </div>
                </div>
                         <!-- last name -->
               <div class="profile mb-2 w-[49%]">
                    <label for="first-name" class="text-[#18345E] text-xs mb-1">First Name</label>
                    <div class="name-input flex justify-between items-center bg-[#F4F2F2] rounded-md p-2">
                        <input type="text" ref="lName" name="first-name" placeholder="Muigi" class="w-11/12 bg-transparent placeholder:italic placeholder:opacity-50 placeholder:text-[#18345E] text-[#18345E] text-sm placeholder:text-xs focus:outline-none" required>
                        <span class="w-[9%]"><img src="../assets/profile.svg" alt="first name" class="w-full"></span>
                    </div>
                </div>
            </div>
            <!-- for email -->
          <div class="email mb-2">
            <label for="email" class="text-[#18345E] text-xs mb-1">Email</label>
            <div class="email-input flex justify-between items-center bg-[#F4F2F2] rounded-md p-2">
              <input type="text" name="email" ref="email" placeholder="johndoe@gmail.com" class="w-11/12 bg-transparent placeholder:italic placeholder:opacity-50 placeholder:text-[#18345E] text-[#18345E] text-sm placeholder:text-xs focus:outline-none" required>
              <span class="w-[6%]"><img src="../assets/email.svg" alt="email" class="w-full"></span>
            </div>
          </div>
            <!-- for password -->
            <div class="flex justify-between relative pb-2">
                <div class="password mb-2 w-[49%]">
                    <label for="password" class="text-[#18345E] text-xs mb-1">Password</label>
                    <div class="password-input flex justify-between items-center bg-[#F4F2F2] rounded-md p-2">
                        <input type="password" ref="password" @blur="passValidation" name="password" placeholder="Type your password" class="w-11/12 bg-transparent placeholder:italic placeholder:opacity-50 placeholder:text-[#18345E] text-[#18345E] text-sm placeholder:text-xs focus:outline-none" required>
                        <span class="w-[9%]"><img src="../assets/password.svg" alt="password" class="w-full"></span>
                    </div>
                </div>
                         <!-- confirm Password -->
               <div class="password mb-2 w-[49%]">
                    <label for="confirm-password" class="text-[#18345E] text-xs mb-1">Confirm Password</label>
                    <div class="password-input flex justify-between items-center bg-[#F4F2F2] rounded-md p-2">
                        <input type="password" ref="cPassword" name="password" placeholder="Type your password" class="w-11/12 bg-transparent placeholder:italic placeholder:opacity-50 placeholder:text-[#18345E] text-[#18345E] text-sm placeholder:text-xs focus:outline-none" required>
                        <span class="w-[9%]"><img src="../assets/password.svg" alt="password" class="w-full"></span>
                    </div>
                </div>
                <p class="absolute text-xs font-light tracking-wide text-slate-700 bottom-0">Password must contain atleast one special character</p>
            </div>
          
            <!-- button for sign in -->
          <button @click.prevent="handleSubmit" class="w-full bg-[#18345E] hover:bg-blue-900 transition mt-6 text-zinc-300 font-bold p-2 rounded-md">Sign Up</button>
        </form>
        <div class="account-setup text-center mt-2">
          <span class="text-xs font-light tracking-wide">Already a member?</span>
          <router-link :to="{name: 'Home'}" class="text-xs ml-1 text-blue-900">Sign In</router-link>
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
     let regex = /\w\W/
     const text = ref('Aboard')
     const fName = ref('')
     const lName = ref('')
     const email = ref('')
     const password = ref('')
     const cPassword = ref('')
     const router = useRouter()

     const passValidation = () =>{
       if(regex.test(password.value.value)){
          return
        }else{
          alert('Password must contain atleast one special character')
        }
     }

     const handleSubmit = ()=>{
      if(fName.value.value == "" || lName.value.value == "" || email.value.value == "" || password.value.value == "" || cPassword.value.value == ""){
        alert('Please fill all the fields')
      }else{
        if(password.value.value === cPassword.value.value){
            alert('Account created successfully')
            router.push({name: 'Dashboard'})
          }
          else{
            alert('Password does not match')
          }
     }

    }
    return {text, fName, lName, email, password, cPassword, handleSubmit, passValidation}
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