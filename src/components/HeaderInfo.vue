<template>
  <div class="tobBar bg-light pb-1 pt-2">
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-md-6">
          <div
            class="contact-us d-flex gap-3 justify-content-between justify-content-md-center"
          >
            <small class="text-eee d-none d-sm-block">
              <i class="bi bi-person"></i> تسجيل الدخول
            </small>
            <a
              href="mailto:info@googel.com "
              target="_ blank"
              class="d-flex text-dark text-decoration-none"
            >
              <i class="bi bi-envelope"></i> faidigold.sa@gmail</a
            >
            <a
              href="tel:00000000"
              target="_blank"
              class="d-flex justify-content-sm-end text-dark text-decoration-none"
            >
              <i class="bi bi-telephone"></i> 964-622-3903</a
            >
          </div>
        </div>

        <div class="col-md-6 d-none justify-content-end gap-3 d-md-flex">
          <div class="socal d-flex gap-3">
            <a href="" target="_blank" class="d-none d-sm-block text-dark">
              <i class="bi bi-twitter"></i
            ></a>
            <a href="" target="_blank" class="d-none d-sm-block text-dark">
              <i class="bi bi-facebook"></i
            ></a>
            <a href="#" target="_blank" class="d-none d-sm-block text-dark">
              <i class="bi bi-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderInfo",
};
</script>

<style scoped>
.text-eee {
  color: #333;
}
</style>
