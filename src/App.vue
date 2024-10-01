<template>
  <header>
    <div class="wrapper"></div>
    <HeaderInfo />
    <NavBar />
      <Transition name="fade">
        <RouterView/>
</Transition>
    <Footer />
    <FooterCopyRight/>

    
  </header>

 
</template>
<script>

import HeaderInfo from "./components/HeaderInfo.vue";
import NavBar from "./components/NavBar.vue";

import Footer from "./components/Footer.vue";
import FooterCopyRight from "./components/FooterCopyRight.vue";
export default {
  components: {
   
    HeaderInfo,
    NavBar,
    Footer,
    FooterCopyRight,
 
  
 
  },
};
</script>


<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
