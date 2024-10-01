<template>
  <div class="curd">
    <div class="container">
      <div class="contact">
        <div class="row">
          <!-- Address section -->
          <div class="col-sm-4 col-md-4">
            <a
              href="رقم 107، السنانية، قسم رأس البر، محافظة دمياط 8070020"
              class="text-decoration-none text-dark"
            >
              <div
                class="contect shadow p-3 mb-5 bg-body rounded d-flex flex-column align-items-center p-5 gap-4"
              >
                <i class="bi bi-geo-alt-fill fs-1"></i>
                <h2 class="fs-4">العنوان</h2>
                <p>المملكة العربية السعودية</p>
              </div>
            </a>
          </div>

          <!-- Email section -->
          <div class="col-sm-4 col-md-4">
            <a href="mailto:info@hoordaycare.com" class="text-decoration-none text-dark">
              <div
                class="contect shadow p-3 mb-5 bg-body rounded d-flex flex-column align-items-center p-5 gap-4"
              >
                <i class="bi bi-envelope fs-1"></i>
                <h2 class="fs-4">البريد الالكتروني</h2>
                <p class="fs-6 lh-1 text-center">
                  لوريم إيبسوم هو نص شائع في صناعة الطباعة والتنضيد...
                </p>
              </div>
            </a>
          </div>

          <!-- Phone section -->
          <div class="col-sm-4 col-md-4">
            <a href="tel:70000000000000" class="text-decoration-none text-dark">
              <div
                class="contect shadow p-3 mb-5 bg-body rounded d-flex flex-column align-items-center p-5 gap-4"
              >
                <i class="bi bi-telephone fs-1"></i>
                <h2 class="fs-4">الهاتف</h2>
                <p class="fs-6 lh-1 text-center">
                  لوريم إيبسوم هو نص شائع في صناعة الطباعة والتنضيد...
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Map and Form section -->
  <div class="map">
    <div class="container">
      <div class="cont">
        <div class="row">
          <!-- Google Map iframe -->
          <div class="col-sm-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.787033139396!2d31.463947424908973!3d30.808606081962697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79c6024540cdb%3A0x6886d5675a73708!2z2LfYsdmK2YIg2KfZhNiy2YLYp9iy2YrZgiAtINin2YTZhdmG2LXZiNix2Kk!5e0!3m2!1sar!2seg!4v1727791301426!5m2!1sar!2seg"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <!-- Form with validation -->
          <div class="col-sm-6">
            <form class="d-flex flex-column gap-2" @submit.prevent="submitForm">
              <label>اسمك</label>
              <input
                v-model="state.form.text"
                class="p-2 rounded border border-primary"
                type="text"
                placeholder="اسمك"
              />
              <small v-if="v$.form.text.$error" class="text-danger">
                {{ v$.form.text.$errors[0].$message }}
              </small>
              <!-- 
                            <label>الهاتف</label>
                            <input v-model="form.namber" class="p-2 rounded border border-primary" type="text"
                                placeholder="الهاتف" />


                            <label>البريد الالكتروني</label>
                            <input v-model="form.email" class="p-2 rounded border border-primary" type="email"
                                placeholder="البريد الالكتروني" />



                            <label>الموضوع</label>
                            <input v-model="form.subject" class="p-2 rounded border border-primary" type="text"
                                placeholder="الموضوع" />

                            <textarea v-model="form.content" class="rounded border border-primary" cols="50"
                                rows="5"></textarea> -->

              <!-- Submit button with animation -->
              <button type="submit" class="button" :disabled="v$.$invalid">
                <div class="outline"></div>
                <div class="state state--default">
                  <div class="icon">
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"></svg>
                  </div>
                  <p>
                    <span style="--i: 0">S</span>
                    <span style="--i: 1">e</span>
                    <span style="--i: 2">n</span>
                    <span style="--i: 3">d</span>
                    <span style="--i: 4">M</span>
                    <span style="--i: 5">e</span>
                    <span style="--i: 6">s</span>
                    <span style="--i: 7">s</span>
                    <span style="--i: 8">a</span>
                    <span style="--i: 9">g</span>
                    <span style="--i: 10">e</span>
                  </p>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { computed, reactive } from "vue";

export default {
  methods: {
    async submitForm() {
      this.v$.$validate();

      if (!this.v$.$error) {
        // Form submission logic here
        alert("Form submitted!");
      }
    },
  },
  setup() {
    const state = reactive({
      form: {
        text: "",
      },
    });
    const rules = computed(() => {
      return {
        form: {
          text: [required, minLength(5)],
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    return { rules, state, v$ };
  },
};
</script>

<style scoped>
.contect {
  transition: all 0.5s ease-in-out;
}

.contect:hover {
  background-color: #8156a3 !important;
  color: #fff !important;
  transform: translatey(-10px) !important;
}

/* From Uiverse.io by marcelodolza */
.button {
  --primary: #ff5569;
  --neutral-1: #f7f8f7;
  --neutral-2: #e7e7e7;
  --radius: 14px;

  cursor: pointer;
  border-radius: var(--radius);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: 0 0.5px 0.5px 1px rgba(255, 255, 255, 0.2), 0 10px 20px rgba(0, 0, 0, 0.2),
    0 4px 5px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  min-width: 200px;
  padding: 20px;
  height: 68px;
  font-family: "Galano Grotesque", Poppins, Montserrat, sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: 600;
}

.button:hover {
  transform: scale(1.02);
  box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.3), 0 15px 30px rgba(0, 0, 0, 0.3),
    0 10px 3px -3px rgba(0, 0, 0, 0.04);
}

.button:active {
  transform: scale(1);
  box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.3), 0 10px 3px -3px rgba(0, 0, 0, 0.2);
}

.button:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
  border: 2.5px solid transparent;
  background: linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.45)) border-box;
  z-index: 0;
  transition: all 0.4s ease;
}

.button:hover::after {
  transform: scale(1.05, 1.1);
  box-shadow: inset 0 -1px 3px 0 rgba(255, 255, 255, 1);
}

.button::before {
  content: "";
  inset: 7px 6px 6px 6px;
  position: absolute;
  background: linear-gradient(to top, var(--neutral-1), var(--neutral-2));
  border-radius: 30px;
  filter: blur(0.5px);
  z-index: 2;
}

.state p {
  display: flex;
  align-items: center;
  justify-content: center;
}

.state .icon {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: scale(1.25);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.state .icon svg {
  overflow: visible;
}

/* Outline */
.outline {
  position: absolute;
  border-radius: inherit;
  overflow: hidden;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
  inset: -2px -3.5px;
}

.outline::before {
  content: "";
  position: absolute;
  inset: -100%;
  background: conic-gradient(from 180deg, transparent 60%, white 80%, transparent 100%);
  animation: spin 2s linear infinite;
  animation-play-state: paused;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.button:hover .outline {
  opacity: 1;
}

.button:hover .outline::before {
  animation-play-state: running;
}

/* Letters */
.state p span {
  display: block;
  opacity: 0;
  animation: slideDown 0.8s ease forwards calc(var(--i) * 0.03s);
}

.button:hover p span {
  opacity: 1;
  animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
}

.button:focus p span {
  opacity: 1;
  animation: disapear 0.6s ease forwards calc(var(--i) * 0.03s);
}

@keyframes wave {
  30% {
    opacity: 1;
    transform: translateY(4px) translateX(0) rotate(0);
  }

  50% {
    opacity: 1;
    transform: translateY(-3px) translateX(0) rotate(0);
    color: var(--primary);
  }

  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0);
  }
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px) translateX(5px) rotate(-90deg);
    color: var(--primary);
    filter: blur(5px);
  }

  30% {
    opacity: 1;
    transform: translateY(4px) translateX(0) rotate(0);
    filter: blur(0);
  }

  50% {
    opacity: 1;
    transform: translateY(-3px) translateX(0) rotate(0);
  }

  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0);
  }
}

@keyframes disapear {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateX(5px) translateY(20px);
    color: var(--primary);
    filter: blur(5px);
  }
}

/* Plane */
.state--default .icon svg {
  animation: land 0.6s ease forwards;
}

.button:hover .state--default .icon {
  transform: rotate(45deg) scale(1.25);
}

.button:focus .state--default svg {
  animation: takeOff 0.8s linear forwards;
}

.button:focus .state--default .icon {
  transform: rotate(0) scale(1.25);
}

@keyframes takeOff {
  0% {
    opacity: 1;
  }

  60% {
    opacity: 1;
    transform: translateX(70px) rotate(45deg) scale(2);
  }

  100% {
    opacity: 0;
    transform: translateX(160px) rotate(45deg) scale(0);
  }
}

@keyframes land {
  0% {
    transform: translateX(-60px) translateY(30px) rotate(-50deg) scale(2);
    opacity: 0;
    filter: blur(3px);
  }

  100% {
    transform: translateX(0) translateY(0) rotate(0);
    opacity: 1;
    filter: blur(0);
  }
}

/* Contrail */
.state--default .icon:before {
  content: "";
  position: absolute;
  top: 50%;
  height: 2px;
  width: 0;
  left: -5px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
}

.button:focus .state--default .icon:before {
  animation: contrail 0.8s linear forwards;
}

@keyframes contrail {
  0% {
    width: 0;
    opacity: 1;
  }

  8% {
    width: 15px;
  }

  60% {
    opacity: 0.7;
    width: 80px;
  }

  100% {
    opacity: 0;
    width: 160px;
  }
}

/* States */
.state {
  padding-left: 29px;
  z-index: 2;
  display: flex;
  position: relative;
}

.state--default span:nth-child(4) {
  margin-right: 5px;
}

.state--sent {
  display: none;
}

.state--sent svg {
  transform: scale(1.25);
  margin-right: 8px;
}

.button:focus .state--default {
  position: absolute;
}

.button:focus .state--sent {
  display: flex;
}

.button:focus .state--sent span {
  opacity: 0;
  animation: slideDown 0.8s ease forwards calc(var(--i) * 0.2s);
}

.button:focus .state--sent .icon svg {
  opacity: 0;
  animation: appear 1.2s ease forwards 0.8s;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(4) rotate(-40deg);
    color: var(--primary);
    filter: blur(4px);
  }

  30% {
    opacity: 1;
    transform: scale(0.6);
    filter: blur(1px);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
    filter: blur(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
