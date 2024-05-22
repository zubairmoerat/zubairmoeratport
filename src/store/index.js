import { createStore } from 'vuex'
const dataURL = 'https://zubairmoerat.github.io/finalresData/Data/'

export default createStore({
  state: {
    education: null,
    softskills: null,
    techskills:null,
    testimonials: null,
    projects: null,
    certs: null
  },
  getters: {
  },
  mutations: {
    setEducation(state, value) {
      state.education = value
    },
    setSoftskills(state, value) {
      state.softskills = value
    },
    setTechskills(state, value){
      state.techskills = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setCerts(state, value) {
      state.certs = value
    }
  },
  actions: {
    async fetchEducation(context) {
      try {
        let res = await fetch(dataURL)
        let { education } = await res.json()
        context.commit('setEducation', education)
      } catch (e) {
        console.error('Error fetching Data', e)
      }
    },
    async fetchSoftskills(context) {
      try {
        let res = await fetch(dataURL)
        let { softskills } = await res.json()
        context.commit('setSoftskills', softskills)
      } catch (e) {
        console.error('Error fetching Data', e)
      }
    },
    async fetchTechskills(context){
      try{
        let res = await fetch(dataURL)
        let {techskills} = await res.json()
        context.commit('setTechskills', techskills)
      }catch(e){
        console.error('Error fetching Data', e)
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataURL)
        let { projects } = await res.json()
        context.commit('setProjects', projects)
      } catch (e) {
        console.error('Error fetching Data', e)
      }

    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataURL)
        let { testimonials } = await res.json()
        context.commit('setTestimonials', testimonials)
      } catch (e) {
        console.error('Error fetching Data', e)
      }
    },
    async fetchCerts(context) {
      try{
        let res = await fetch(dataURL)
        let {certs} = await res.json()
        context.commit('setCerts', certs)
      }catch(e){
        console.error('Error fetching Data', e)
      }
    }
  },
  modules: {
  }
})
