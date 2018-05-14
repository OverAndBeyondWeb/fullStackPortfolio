<template>
  <div class="quote-1">
    <div class="quote-content wrap">
      <transition name="rise" appear><p>"I am a Front End Web Developer Specializing in full site Development"</p></transition>
      <hr>
    </div>
  </div>

</template>

<script>

</script>

<style lang="scss">
  $main-color: purple;
  $secondary-color: lighten($main-color, 20%);
  .quote-1 {
    background: white;

    p {
      font-size: 2.5em;
      font-weight: bold;
      text-align: center;
      text-shadow: 2px 2px 2px rgba(175, 34, 191, .5);
      padding-top: 5%;
      padding-bottom: 12%;
      color: #4c4c4c;

      @media screen and (max-width: 30rem){
        font-size: 1.375em;
        text-shadow: 1px 1px 1px rgba(175, 34, 191, .5);
      }
    }
    hr {
      border-color: $secondary-color;
      margin-bottom: 10%;
    }
  }
  .rise-enter {
    opacity: 0;
  }
  .rise-enter-active {
    transition: 4s;
  }
</style>