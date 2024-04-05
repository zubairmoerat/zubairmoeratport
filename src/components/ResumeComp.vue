<template>
    <div id="resume" class="container-fluid">
        <h1 class="text-center">My Experience</h1>
        <div class="accordion accordion-flush align-middle" id="xp">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-xp1" aria-expanded="false" aria-controls="flush-xp1">
                        <h3>2019</h3>
                    </button>
                </h2>
                <div id="flush-xp1" class="accordion-collapse collapse" data-bs-parent="#xp">
                    <div class="accordion-body">
                        <h5>Mayfair Real Estate</h5>
                        <p>I held an intern position within the companies' finance department.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-xp2" aria-expanded="false" aria-controls="flush-xp2">
                        <h3>2020</h3>
                    </button>
                </h2>
                <div id="flush-xp2" class="accordion-collapse collapse" data-bs-parent="#xp">
                    <div class="accordion-body">
                        <h5>Livingstone High School</h5>
                        <p>I completed Matric with a Bachelor's Pass.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-xp3" aria-expanded="false" aria-controls="flush-xp3">
                        <h3>2021</h3>
                    </button>
                </h2>
                <div id="flush-xp3" class="accordion-collapse collapse"
                    data-bs-parent="#xp">
                    <div class="accordion-body">
                        <h5>AESDP</h5>
                        <p>Studied mechanical engineering and completed N2. I recieved certifications for first aid and safety officer.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-xp4" aria-expanded="false" aria-controls="flush-xp4">
                        <h3>2022</h3>
                    </button>
                </h2>
                <div id="flush-xp4" class="accordion-collapse collapse"
                    data-bs-parent="#xp">
                    <div class="accordion-body">
                        <h5>Toyota Rondebosch East</h5><span>17/01/2022 - 31/03/2022</span>
                        <p>Worked as an apprentice in the engineering industry.</p>
                        <h5>Adnaan Motor Repairs</h5><span>08/04/2022 - 23/12/2022</span>
                        <p>Worked as a junior motor technician.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-xp6" aria-expanded="false" aria-controls="flush-xp6">
                        <h3>2023</h3>
                    </button>
                </h2>
                <div id="flush-xp6" class="accordion-collapse collapse"
                    data-bs-parent="#xp">
                    <div class="accordion-body">
                        <h5>Solo Cloud Distributions</h5><span>15/02/2023 - 31/08/2023</span>
                        <p>Sales representative.</p>
                        <h5>Life Choices Academy</h5><span>27/09/2023 - 28/03/2024</span>
                        <p>Aquired certifications on building full-stack applications.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-xp7" aria-expanded="false" aria-controls="flush-xp7">
                        <h3>2024</h3>
                    </button>
                </h2>
                <div id="flush-xp7" class="accordion-collapse collapse"
                    data-bs-parent="#xp">
                    <div class="accordion-body">
                        <h5>Life Choices Studio</h5>
                        <p>Aquiring AWS cloud Computing certifications and CISCO security certifications, while working on client's applications.</p>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-center">My Skills</h1>
        <div class="d-flex justify-content-evenly flex-wrap p-3" v-if="Softskills">
            <div class="card m-3" v-for="skill in Softskills" :key="skill">
                <div class="card-body text-center" id="softy">
                    <h5 class="card-title">{{ skill.title }}</h5>
                    <p class="card-text">{{ skill.description }}</p>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-evenly flex-wrap p-3" id="techy" v-if="Techskills">
            <div class="text-center" v-for="title in Techskills" :key="title">
                <h5>{{ title.tech }}</h5>
                <img :src="title.image" alt="skill" class="img-fluid" id="bruh">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            Techskills(){
                return this.$store.state.techskills
            },
            Softskills(){
                return this.$store.state.softskills
            }
        },
        mounted(){
            this.$store.dispatch('fetchTechskills'),
            this.$store.dispatch('fetchSoftskills')
        }
    }
</script>

<style scoped>
#xp{
    width: 800px;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 100px;
}
h1{
    padding-top: 20px;
}
.card{
    width: 200px;
    height: 100px;
    box-shadow: 0 3px 5px #000;
}
.card-text{
    display: none;
}
.card-body:hover + .card-text{
    display: block;
}
.accordion-item{
    color: #fff;
    background: #000;
}
.accordion-button{
    background: #000;
}
h3{
    color: #fff;
}
h1{
    color: #eb5e28;
}
h5{
    color: #eb5e28;
}
@media screen and (max-width: 800px) and (min-width: 300px){
    #xp{
        width: 250px;
        padding: 0;
    }
    #bruh{
        width: 50px;
        height: 50px;
    }
    h5{
        display: none;
    }
    .card{
        display: none;
    }
}
</style>