<template>
  <div class="navbar d-flex justify-content-between">
    <a class="d-flex justify-content-sm-start text-dark text-decoration-none d-sm-none">
    </a>

    <a class="btn btn-primary d-flex justify-content-sm-start text-dark text-decoration-none d-sm-none"
      data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      <i class="bi bi-border-width"></i>
    </a>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">logo</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="text-decoration-none text-dark">
          <li>
            <RouterLink to="/" class="item text-decoration-none text-dark" href="#">الرئيسية</RouterLink>
          </li>

          <li>
            <RouterLink to="/Shopingcurd" class="item text-decoration-none text-dark">المتجر</RouterLink>
          </li>
          <li>
            <a class="item text-decoration-none text-dark" href="#">العروض</a>
          </li>
          <li>
            <RouterLink to="/ContactUs" class="item text-decoration-none text-dark" href="#">اتصل بنا</RouterLink>
          </li>
        </div>
      </div>
    </div>
    <div class="searchs d-flex justify-content-sm-start text-dark text-decoration-none d-sm-none">
      <input type="text" placeholder="بحث " />
    </div>
  </div>
  <div class="navbarDes d-flex d-none d-xl-block">
    <div class="container">
      <div class="icon">
        <i class="bi bi-cart"></i>
      </div>

      <div class="search">
        <input type="text" placeholder="بحث " />
      </div>

      <nav>
        <ul>
          <li>
            <RouterLink to="/" href="#">الرئيسية</RouterLink>
          </li>
          <li>
            <RouterLink to="/Shopingcurd" class="drops">المتجر</RouterLink>
            <ol class="drop">
              <li><a href="#">عقود</a></li>
              <li><a href="#">خواتم</a></li>
              <li><a href="#">اقراط</a></li>
            </ol>
          </li>
          <li><a href="#">العروض</a></li>
          <li>
            <RouterLink to="ContactUs">اتصل بنا</RouterLink>
          </li>

          <li>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-globe"></i>
              </a>

              <ul class="dropdown-menu d-flex flex-column" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#"><img src="../assets/images/sadui.svg" width="30px"></a></li>
                <li><a class="dropdown-item" href="#"> <img src="../assets/images/amrcain.svg" width="30px"></a></li>

              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <div class="logo">
        <img src="../../public/favicon.ico" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  mounted() {
    window.addEventListener('scroll', () => {
      // navbarDes
      if (window.scrollY > 20) {
        const navbarDes = document.querySelector('.navbarDes');
        navbarDes.classList.add('fixed-top')
      }
    })
  }
};
</script>

<style scoped>
.navbarDes nav li a {
  display: block;

  padding: 10px;
  text-decoration: none;
  color: #333;
}

.navbarDes nav li {
  list-style: none;
  color: #333;
}

.navbarDes nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}

.drop {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
}

.drops:hover .drop {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbarDes {
  background-color: #f8f9fa;
  top: -16px;
  position: relative;
  padding-top: 20px;
}

.search input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid #ddd;
  background-color: #ddd;
  border-radius: 50px;
  display: flex;
  width: 100%;
  text-align: right;
  height: 40px;
  right: -60px;
  position: relative;
}

.searchs input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid #ddd;
  background-color: #ddd;
  border-radius: 50px;
  width: 100%;
  text-align: right;
}

.searchs {
  border: none;
  margin: auto;
  display: flex;
  width: 90%;
}
</style>
