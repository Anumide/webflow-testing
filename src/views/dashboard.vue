<template>
<div class="fade-in">
    <header class="w-full bg-stone-100">
      <div class="header container w-[90%] lg:w-4/5 mx-auto max-w-screen-lg">
        <nav class="flex justify-between items-center py-2">
            <div class="logo text-xl font-bold font-mono text-[#18345E]">SAPP</div>

            <ul class="hidden md:flex w-[35%] justify-between">
                <li class="hover:text-[#18345E] transition"><a href="#">Community</a></li>
                <li class="hover:text-[#18345E] transition"><a href="#">Pricing</a></li>
                <li class="hover:text-[#18345E] transition"><a href="#">Features</a></li>
            </ul>

            <div class="profile hidden md:block w-[6%]">
                <img src="../assets/User-Avatar-2.svg" alt="profile" class="w-full">
            </div>

            <div class="hamburger md:hidden">
                <img src="../assets/Hamburger-Menu.svg" alt="" class="w-full">
            </div>
        </nav>

        <div class="hero flex md:justify-between justify-center items-center md:flex-row flex-col-reverse md:py-12">
            <div class="hero-content w-[85%] md:w-[330px] lg:w-[400px] md:my-20 lg:my-28 text-center md:text-left">
                <h1 class="text-4xl font-bold text-[#18345E]">Welcome!</h1>
                <p class="font-light text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="hero-illustration w-[90%] md:w-[350px] lg:w-[410px] "><img src="../assets/hero-Illustration-2.png" alt="illustration" class="w-full"></div>
        </div>
      </div>
    </header>
    <main class="w-full">
        <div class="container w-[90%] lg:w-4/5 mx-auto max-w-screen-lg py-8 md:flex md:justify-between">
            <div class="text-center md:text-left mb-4 md:mb-0 md:w-[33%]">
                <h2 class="font-medium text-lg">Lorem ipsum dolor sit amet</h2>
                <p class="font-thin text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="text-center md:text-left mb-4 md:mb-0 md:w-[33%]">
                <h2 class="font-medium text-lg">Lorem ipsum dolor sit amet</h2>
                <p class="font-thin text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="text-center md:text-left md:mb-0 md:w-[33%]">
                <h2 class="font-medium text-lg">Lorem ipsum dolor sit amet</h2>
                <p class="font-thin text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div class="container w-[90%] lg:w-4/5 mx-auto max-w-screen-lg my-8">
             <div class="hero flex md:justify-between justify-center items-center md:flex-row flex-col md:py-12 rounded-lg px-4 bg-[#18345E]">
                <div class="hero-content w-[85%] md:w-[330px] lg:w-[400px] md:mb-28 lg:mb-32 text-center md:text-left my-4 md:my-0">
                    <h1 class="text-4xl font-bold text-white">Lorem Ipsum!</h1>
                    <p class="font-light text-xs text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="hero-illustration w-[90%] md:w-[350px] lg:w-[410px] "><img src="../assets/Page-Image.png" alt="illustration" class="w-full"></div>
            </div>
        </div>
        
    </main>
    <footer class="w-full bg-stone-100">
        <div class="container w-[90%] lg:w-4/5 mx-auto max-w-screen-lg py-8 md:flex md:justify-between text-center">
            <div class="logo text-xl font-bold font-mono text-[#18345E] pb-4 ">SAPP</div>
            <div class="flex md:justify-between md:w-2/6">
                <div class="pb-4 md:pb-0 w-1/2 ">
                    <h2 class="font-medium mb-2">Sitemap</h2>
                    <ul>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Homepage</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Pricing</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Testimonials</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition ">Features</li>
                    </ul>
                </div>
                <div class="pb-4 md:pb-0 w-1/2">
                    <h2 class="font-medium mb-2">Resources</h2>
                    <ul>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Support</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Contact</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">FAQ</li>
                    </ul>
                </div>  
            </div>
             <div class="flex md:md:justify-between md:w-2/6">
                 <div class="pb-4 md:pb-0 w-1/2">
                    <h2 class="font-medium mb-2">Company</h2>
                    <ul>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">About</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Customers</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Blog</li>
                    </ul>
                </div>
                <div class="pb-4 md:pb-0 w-1/2">
                    <h2 class="font-medium mb-2">Portfolios</h2>
                    <ul>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Sarah Andrews</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Matthew Higgins</li>
                        <li class="font-thin text-sm hover:text-[#18345E] transition mb-1">Janice Dave</li>
                    </ul>
                </div>
             </div>
            
    

        </div>
    </footer>
</div>
 
</template>
 
<script>
 export default{ 
 
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