<template>
  <NavBar/>
  <HomeComp/>
  <AboutComp/>
  <ProjectComp/>
  <ResumeComp/>
  <TestimonialComp/>
  <FooterComp/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
import HomeComp from './components/HomeComp.vue'
import AboutComp from './components/AboutComp.vue'
import ProjectComp from './components/ProjectComp.vue'
import ResumeComp from './components/ResumeComp.vue'
import TestimonialComp from './components/TestimonialComp.vue'

export default{
  components:{
    NavBar,
    HomeComp,
    AboutComp,
    ProjectComp,
    ResumeComp,
    TestimonialComp,
    FooterComp
  }
}
</script>

<style src="@/assets/css/style.css">
</style>
