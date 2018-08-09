<template>
  <div class="landing-page">
    <page-header></page-header>

      <div class="page-container wrap">
        <transition name="fade" appear>
          <h1>front end web developer</h1>
        </transition>
      <p><em>Energetic, passionate, and talented front end web developer,
        with strong JavaScript skills.  <span>Always interested in continued education and
          complete involvement in the constantly evolving field of web development.</span></em></p>
      <transition name="action-button" appear>
        <router-link to='/contact'>
          <button class="contact-now">reach out now!</button>
        </router-link>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue';

  export default {
    components: {
      'page-header': Header
    }
  }
</script>

<style lang="scss">

  $main-color: purple;
  $secondary-color: lighten($main-color, 20%);

  .landing-page {
    height: 90vh;
    background: url("/images/landing-page-bg5.jpg") no-repeat;
    background-size: cover;
    color: white;
    text-transform: uppercase;

    @media screen and (max-width: 60rem) and (orientation: landscape){
      height: auto;
      padding-bottom: 25px;
    }

  }
  .page-container {
    padding-top: 12%;
    padding-left: 20%;

    h1 {
      text-shadow: 2px 2px 2px rgba(67, 67, 67, .5);
    }
    p {
      display: block;
      width: 80%;
      line-height: 1.375em;
      text-shadow: 2px 2px 2px rgba(67, 67, 67, .5);
    }

    @media screen and (max-width: 30rem) {
      padding: 2rem;
      h1 {
        font-size: 1.5em;
      }
      p {
        font-size: .75em;
      }
      span {
        display: none;
      }
    }
  }
  button.contact-now {
    width: 200px;
    height: 60px;
    margin-top: 20px;
    border: 2px solid $secondary-color;
    border-radius: 15px;
    background-color: rgba(230, 0, 230, 0);
    color: $secondary-color;
    text-transform: uppercase;
    padding: 2% 0;
    text-shadow: 2px 2px 1px rgba(67, 67, 67, .5),
        -2px -1px 2px rgba(67, 67, 67, .5);
    box-shadow: 2px 2px 1px rgba(67, 67, 67, .5),
    -2px -1px 2px rgba(67, 67, 67, .5);
    transition: all 300ms ease-in-out;
    &:hover {
      color: white;
      background-color: rgba(230, 0, 230, 1);
      text-shadow: 1px 1px 1px rgba(67, 67, 67, .5),
                      -1px -1px 1px rgba(67, 67, 67, .5);
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s ease-in;
    animation: bounce-down 2s ease-in-out;
  }
  @keyframes bounce-down {
    0% {
      transform: translateY(-150px);
    }
    40% {
      transform: translateY(0);
    }
    45% {
      transform: translateY(-40);
    }
    50% {
      transform: translateY(-50px);
    }
    60% {
      transform: translateY(0);
    }
    70% {
      transform: translateY(-20px);
    }
    80% {
      transform: translateY(0);
    }
    90% {
      transform: translateY(-10px);
    }
    95% {
      transform: translateY(0);
    }
    98% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .action-button-enter {
    opacity: 0;
  }
  .action-button-enter-active {
    transition: opacity 1.5s ease-in 1.5s;
  }

</style>