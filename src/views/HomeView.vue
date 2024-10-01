<template>
  <header>
    <div class="wrapper"></div>

    <section-one />
    <NewProducts />
    <best-seller />
    <CustomerReviews/>
    <ContactUs/>

    
  </header>


</template>
<script>


import SectionOne from "@/components/SectionOne.vue";
import NewProducts from "@/components/NewProducts.vue";
import BestSeller from "@/components/BestSeller.vue";
import CustomerReviews from "@/components/CustomerReviews.vue";
import ContactUs from "@/components/ContactUs.vue"

export default {
  components: {
   
    SectionOne,
    NewProducts,
    BestSeller,
    CustomerReviews,
    ContactUs,
   
  
   
  },
};
</script>
