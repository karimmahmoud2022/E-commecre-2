<template>
 
    <div class="New-products bg-secondary pt-5  pb-5">
     <div class="container">
      <div class="title d-flex justify-content-between align-items-center pb-5">
       <p></p>
        <h2 class="text-light">اراء العملاء</h2>
      </div>
     </div>
      <div class="curd">
  <div class="container">
    <div class="row wow bounceInUp" data-wow-duration=".5s" data-wow-delay=".3s">
            <swiper :slidesPerView="1" :spaceBetween="15" :centeredSlides="true" :pagination="{
              clickable: true,
            }" :breakpoints="{
              '250':{
                slidesPerView:2,
                spaceBetween: 20,
              },
        '630': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        '1024': {
          slidesPerView: 4 ,
          spaceBetween: 50,
        },
      }" :modules="modules" class="mySwiper pt-5">
  
              <swiper-slide>
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon ">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
  
              </swiper-slide>
              <swiper-slide>
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
  
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
  
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
  
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
  
              </swiper-slide>
  
              <swiper-slide>
  
                <div class="card">
                  <img src="../../public/02.jpg" class="card-img-top rounded-circle m-auto d-flex" alt="..." />
                  <h2 class="text-center">ابو منصور </h2>
                  <p class="text-center">وراء كل قطعة ذهبية حكاية</p>
                  <div class="productsn d-flex justify-content-center align-items-center p-3">
                    <div class="card-body">
                    
                      <p>0001-/30/11 </p>
                    </div>
  
                    <div class="icon">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
  
  
  
              </swiper-slide>
  
  
  
            </swiper>
  
          </div>
  </div>
   
      </div>
     
      </div>
    
  </template>
  
  <script scoped>
   // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  // import required modules
  import { Pagination } from 'swiper/modules';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
  </script>
  
  <style scoped>

.card-img-top{
    width: 80px;
     height: 80px;
     margin-top: -50px !important;
  }


  </style>
  