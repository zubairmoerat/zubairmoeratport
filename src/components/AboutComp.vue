<template>
    <div id="about" class="container-fluid">
        <h1 class="text-center">About Me</h1>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <img src="https://iili.io/JN87gpf.jpg" alt="me" class="img fluid rounded">
            </div>
            <div class="col">
                <p class="text-start">
                    I'm a dynamic individual with a passion for a well-rounded lifestyle. I find joy in staying active and fit, making frequent visits to the gym to engage in various workouts.
                    The love for the outdoors is another facet of my life, as hiking, biking, and exploring nature provides a perfect balance to the tech-driven world.On the intellectual side, I'm deeply immersed in the fields of engineering and software development.
                    With a keen interest in problem-solving and innovation, I enjoy tackling challenges both in the physical realm through engineering projects and in the virtual world through software development.
                    This combination of a strong body, an adventurous spirit, and a sharp mind defines my multifaceted and fulfilling lifestyle.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#about{
    margin-bottom: 100px;
}
.row{
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

h1{
    color: #eb5e28;
    padding-top: 40px;
}
p{
    color: #fff;
    padding-top: 15px;
}
@media screen and (max-width: 800px) and (min-width: 300px){
    img{
        height: 150px;
        width: 150px;
    }
    #about{
        margin-bottom: 0px;
    }
    .row{
        flex-direction: column;
        padding-top: 0px;
    }
    .col{
        padding-bottom: 15px;
    }
}
</style>