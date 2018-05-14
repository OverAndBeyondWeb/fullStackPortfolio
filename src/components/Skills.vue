<template>
  <section class="skills">
    <h1>An Overview of My Skill Set</h1>
    <div class="skills-container wrap">
      <skill-one></skill-one>
      <skill-two></skill-two>
      <skill-three></skill-three>
    </div>
  </section>
</template>

<script>
  import Skill1 from './skills/Skill1.vue'
  import Skill2 from './skills/Skill2.vue'
  import Skill3 from './skills/Skill3.vue'
  export default {
    components: {
      'skill-one': Skill1,
      'skill-two': Skill2,
      'skill-three': Skill3
    }
  }
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  .skills {
    text-align: center;
    padding: 3% 0 20% 0;
    background: white;
    color: #4c4c4c;
    border-top: 1px dashed #4c4c4c;
    h1 {
      margin: 80px 0;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, .25);
      text-decoration: underline;

      @media screen and (max-width: 30rem){
        font-size: 1.75em;
      }
    }
  }
  .skills-container {
    display: flex;
    @media screen and (max-width: 42.94rem){
      flex-direction: column;
    }
  }
  .skill {
    flex-grow: 1;
    flex-basis: 30%;
  }
  .skill-content {
    font-family: 'Open Sans', sans-serif;
    padding: 0 10%;
    line-height: 1.5em;
    text-align: justify;

    @media screen and (max-width: 64.25rem) {
      text-align: left;
    }
  }
</style>