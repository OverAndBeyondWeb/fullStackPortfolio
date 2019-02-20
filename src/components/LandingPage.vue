<template>
  <div class="landing-page">
    <page-header></page-header>

      <div class="page-container wrap">
        <transition name="fade" appear>
          <h1>full stack web developer</h1>
        </transition>
      <p><em>Do you have a need for a devloper who just gets it?</em></p>
      <transition name="action-button" appear>
        <router-link to='/contact'>
          <button class="contact-now">Let's Talk Now!</button>
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

  $main-color: #e46629;
  $secondary-color: lighten($main-color, 20%);

  .landing-page {
    height: 90vh;
    background: url("/images/main_photo.jpg") no-repeat;
    background-size: cover;
    color: white;
    text-transform: uppercase;
    margin-bottom: 20vh;

    @media screen and (max-width: 60rem) and (orientation: landscape){
      height: auto;
      padding-bottom: 25px;
    }

  }
  .page-container {
    padding-top: 12%;
    padding-left: 20%;

    h1 {
      font-size: 64px;
      text-shadow: 2px 2px 2px rgba(67, 67, 67, .5);
    }
    p {
      display: block;
      width: 80%;
      font-family: 'Merriweather', serif; 
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
    border: 2px solid #F1A500;
    border-radius: 50%;
    background-color: rgba(#F1A500, .7);
    color: #39607d;
    font-weight: bold;
    text-transform: capitalize;
    padding: 2% 0;
    
    transition: all 300ms ease-in-out;
    &:hover {
      background-color: rgba(#F1A500, .8);
      text-shadow: 1px 1px  rgba(#7FBBC3, .3),
                      -1px -1px rgba(#7FBBC3, .3);
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 05s ease-in;
    animation: bounce-down 2.5s ease-in-out;
  }
  @keyframes bounce-down {
    0% {
      transform: translateY(-350px);
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
      transform: translateY(5px);
    }
    99% {
      transform: translateY(10px);
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