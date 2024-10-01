<template>
  <div class="Header-one">
    <div class="container">
      <div class="section">
        <div class="row">
          <!-- Left Column with Image -->
          <div class="col-sm-6 col-md-6 col-xl-6 wow bounceInUp" data-wow-duration=".5s" data-wow-delay=".1s">
            <img style="width: 80%" src="../../public/01.png" />
          </div>

          <!-- Right Column with Typing Effect on Text -->
          <div  style="margin: auto; font-size: 25px; text-align: right; line-height: 50px" class="col-sm-6 col-md-6 col-xl-6 d-flex justify-content-center flex-column align-content-center wow slideInLeft">
           
            <h2
            
            style="margin: auto; font-size: 25px; text-align: right; line-height: 50px"
            >
            {{ $t('Welcome') }}
           ,
            {{ $t('Welcome2') }}
              <!-- Placeholder text for Typed.js -->
               <span  id="element" style="color:#41B883">

               </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import Typed from 'typed.js';

export default {
  mounted() {
    // Initialize Typed.js
    const typed = new Typed('#element', {
      strings: [
        'تمتع بتجربة تسوق مريحة وسهلة',
        'ازيك ي جاد عامل ايه'
      ],
      typeSpeed: 50,  // Speed of typing
      backSpeed: 30,  // Speed of backspacing
      startDelay: 500,  // Delay before typing starts
      backDelay: 1000,  // Delay before backspacing
      loop: true,  // Infinite loop
      showCursor: false  // Hide cursor after typing
    });
  }
};
</script>

<style>
/* Add any additional styles here if needed */
</style>
