<template>
    <div id="projects" class="container-fluid">
        <h1 class="text-center">My Work</h1>
        <div class="proWrapper" v-if="projects">
            <div class="card" v-for="project in projects" :key="project">
                <div class="card-body text-center">
                    <img :src="project.image" alt="project" class="img-fluid">
                    <h5 class="card-title">{{ project.assignment }}</h5>
                    <p class="card-text">{{ project.info }}</p>
                </div>
                <div class="card-footer text-center">
                    <a :href="project.github" type="button" class="btn" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a :href="project.livelink" type="button" class="btn ms-3" target="_blank"><i class="fa-solid fa-globe"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('fetchProjects')
    }
}
</script>

<style scoped>
img{
    width: 150px;
    height: 75px;
}
.proWrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.card{
    width: 200px;
    box-shadow: 0 3px 5px #000;
}
a:hover {
    transform: translateY(-5px);
}
</style>