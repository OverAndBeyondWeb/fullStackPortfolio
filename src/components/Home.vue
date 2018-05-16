<template>
  <div id="home">
    <login-form v-if="showForm"></login-form>
    <landing-page></landing-page>
    <quote-one></quote-one>
    <skills></skills>
    <quote-two></quote-two>
    <projects></projects>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import LoginForm from './LoginForm.vue';
  import LandingPage from './LandingPage.vue';
  import Quote1 from './Quotes/Quote1.vue';
  import Skills from './Skills.vue';
  import Quote2 from './Quotes/Quote2.vue';
  import Projects from './Projects.vue';
  import Footer from './Footer.vue';

  export default {
    name: 'home',
    components: {
      'login-form': LoginForm,
      'landing-page': LandingPage,
      'quote-one': Quote1,
      'skills': Skills,
      'quote-two': Quote2,
      'projects': Projects,
      'page-footer': Footer
    },
    data () {
      return {
        scrolled: false,
        showForm: true
      };
    },
    methods: {
      handleScroll () {
//        this.scrolled = window.scrollY > 0;
//        if(this.scrolled) {
//          console.log(document.getElementById('landing-page').height);
//        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss">
</style>