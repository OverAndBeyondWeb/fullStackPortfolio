<template>
  <div id="home">
    <landing-page></landing-page>
    <quote-one></quote-one>
    <skills></skills>
    <quote-two></quote-two>
    <projects></projects>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import LandingPage from './LandingPage.vue';
  import Quote1 from './Quotes/Quote1.vue';
  import Skills from './Skills.vue';
  import Quote2 from './Quotes/Quote2.vue';
  import Projects from './Projects.vue';
  import Footer from './Footer.vue';

  export default {
    name: 'home',
    components: {
      'landing-page': LandingPage,
      'quote-one': Quote1,
      'skills': Skills,
      'quote-two': Quote2,
      'projects': Projects,
      'page-footer': Footer
    },
    data () {
      return {
        scrolled: false
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