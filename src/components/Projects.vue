<template>
  <div id="projects" class="projects">
    <div class="projects-container wrap">
      <h1>Projects</h1>
      <ul>
        <li v-for="project of projects" :key="project['.key']">
          <project>
            <div class="project-content">
              <h3>{{project.title}}</h3>
              <p v-html="project.description"></p>
            </div>
            <div class="project-link-container">
              <div class="project-link" style='background: url(/src/img/thumbnail1.jpg)'>
                <a :href="project.link" target="_blank">
                  <div class="slide-up-panel panel-1">
                    <button>
                      <h4>visit site!</h4>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </project>
        </li>
      </ul>
      <!-- <p v-if="projectRouteActive" class="back-link"><router-link to="/">&larr; Back</router-link></p> -->
      <add-proj-form></add-proj-form>
    </div> 
  </div>
</template>

<script>
  import Project from './Project.vue';
  import AddProjForm from './AddProjForm.vue';
  import { projectsRef } from '../firebase';

  export default {
    components: {
      'project': Project,
      'add-proj-form': AddProjForm
    },
    data() {
      return {
        title: 'Title goes here...',
        description: 'describe the project here...',
        url: 'url("../../img/thumbnail1.jpg")'
      }
    },
    firebase: {
      projects: projectsRef
    }
  }
</script>

<style lang="scss">
  .projects {
    background: white;
    color: #d827b3;
    text-align: center;
    padding-bottom: 20%;
    h1 {
      font-size: 3em;
      text-shadow: 2px 2px 2px rgba(67, 67, 67, .5);
      margin-bottom: 10%;

      @media screen and (max-width: 30rem){
        font-size: 2em;
      }
    }
  }
  .project {
    color: #4c4c4c;
    display: flex;
    margin-bottom: 50px;
    padding-bottom: 25px;
    border-bottom: 2px dotted #4c4c4c;

    @media screen and (max-width: 56.25rem) {
      flex-direction: column-reverse;
    }
  }
  .project-content {
    flex: 1 1 60%;
    text-align: left;
    padding-right: 8.33333%;

    a {
      color: #d827b3;

      &:hover {
        color: #e600e6;
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 56.25rem) {
      padding-right: 0;
    }
  }
  .project-link {
    overflow: hidden;
    height: 200px;
    width: 400px;

    &:hover .panel-1 {
      transform: translateY(0);
    }

    @media screen and (max-width: 56.25rem) {
      margin-right: 0;
    }

    @media screen and (max-width: 27.5rem) {
      width: 100%;
      max-height: 200px;
    }
  }

  .slide-up-panel {
    height: 100%;
    width: 100%;
    background-color: rgba(76, 76, 76, .9);
    padding: 0;
    transform: translateY(200px);
    transition: transform 1s cubic-bezier(0.04, 1.03, 0.58, 1);
    button {
      width: 45%;
      height: 25%;
      border: 2px solid #e600e6;
      border-radius: 15px;
      background-color: transparent;
      color: #e600e6;
      text-transform: uppercase;
      margin-top: 75px;
    }
  }

</style>