<template>
  <div class="quote-two">
    <p>"Relax knowing that your web development needs are the highest priority"</p>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .quote-two {
    text-align: center;
    text-shadow: 2px 2px 2px rgba(67, 67, 67, .5);
    padding-top: 7%;
    padding-bottom: 7%;
    background: url("../../img/quote2-bg-color.jpg") no-repeat;
    background-size: cover;
    color: white;

    p {
      font-size: 2em;

      @media screen and (max-width: 30rem){
        font-size: 1.375rem;
      }
    }
  }
</style>