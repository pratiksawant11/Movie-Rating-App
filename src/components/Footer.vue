<template>
  <div>
    <footer class="ft bg-black text-center text-white">
      <div class="container p-4">
        <section class="flogo mb-4">
          <a
            class="btn btn-outline-light btn-floating m-1"
            style="background-color: #3b5998;"
            href="https://www.facebook.com/"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            style="background-color: #55acee;"
            href="https://twitter.com/i/flow/login"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            style="background-color: #dd4b39;"
            href="https://www.google.co.in/"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            style="background-color: #ac2bac;"
            href="https://www.instagram.com/?hl=en"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            style="background-color: #0082ca;"
            href="https://in.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            style="background-color: #333333;"
            href="https://github.com/"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </section>

        <section class>
          <form action>
            <div class="box row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign Up For Our IMR</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">
                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" class="form-control" />
                  <label class="form-label" for="form5Example21">Email address</label>
                  
                </div>
              </div>

              <div class="col-auto">
                <button type="submit" class="btn btn-outline-light mb-4">Subscribe</button>
              </div>
            </div>
          </form>
        </section>

        <section class>
          <div class="row">
            <div class="foot col-lg-4 col-md-4 mb-4 mb-md-0">
              <h5 class="text-uppercase"></h5>

              <ul class="About list-unstyled mb-0">
                <h5 class="text-uppercase">ABOUT</h5>
                <br />
                <li>
                  <a href="#" class="txt text-white">HOME</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">Contact Us</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">ABOUT US</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">PRIVACY & POLICY</a>
                </li>
              </ul>
            </div>

            <div class="general col-lg-4 col-md-4 mb-4 mb-md-0">
              <h5 class="text-uppercase">GENERAL</h5>
              <br />

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#" class="txt text-white">SUBSCRIBE</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">CAREERS</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">MEMBERSHIP</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">COURSES</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">FILM FESTIVAL</a>
                </li>
              </ul>
            </div>

            <div class="sponsers col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="txtt text-uppercase">SPONSERS</h5>
              <br />

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#" class="txt text-white">IMDb</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">SHOPIFY</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">DHARMA PRODUCTION</a>
                </li>
                <br />
                <li>
                  <a href="#" class="txt text-white">T-SERIES</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="bio text-center p-3">
          <h2>INTERNET MOVIE RATING DATA  © 2022 :ESTABLISHED</h2>
        </div>
      </div>
      <!-- Grid container -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.txt {
  font-size: 20px;
}
.general {
  padding: 0px 0px 0px 70px;
}
.sponsers {
  padding: 0px 0px 0px 73px;
}
.about {
  padding: 0px 0px 0px 35px;
}
.box {
  /* padding: 11px 195px 11px 0px; */
}
.flogo {
  padding: 11px 0px 3px 30px;
}
h5 {
  font-size: 38px;
}
.txtt {
  font-size: 35px;
}
.ft {
  margin: -1rem;
}
.foot {
  /* width: 38%; */
}
.bio {
  /* background-color: whitesmoke; */
  color: white;
  font-weight: 600;
  /* font-size: 100%; */
}
h2 {
  font-weight: 600;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 100%;
}
.row {
  padding: 0px 0px 80px;
}
@media only screen and (max-width: 576px) {
  .general {
    padding: 0px 0px 0px 0px;
  }
  .sponsers {
    padding: 0px 0px 0px 0px;
  }
  .foot {
  }
  @media only screen and (max-width: 576px) {
  }
}
</style>