import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import ContactForm from './components/ContactForm.vue';

export const routes = [
  {path: '/', component: Home},
  {path: '/projects', component: Projects},
  {path: '/contact', component: ContactForm}
];