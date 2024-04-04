<template>
    <div id="about" class="container-fluid">
        <h1 class="text-center">About Me</h1>
        <div class="row">
            <div class="col container">
                <img src="https://iili.io/JNMVoLg.png" alt="me" class="img fluid">
            </div>
            <div class="col">
                <p class="text-center align-content-center">
                    I'm a dynamic individual with a passion for a well-rounded lifestyle. I find joy in
                    staying active and fit, making frequent visits to the gym to engage in various workouts. The love
                    for the outdoors
                    is another facet of my life, as hiking, biking, and exploring nature provides a perfect balance to
                    the tech-driven
                    world.On the intellectual side, I'm deeply immersed in the fields of engineering and software
                    development. With a keen interest in problem-solving and innovation, I enjoy tackling challenges
                    both in the
                    physical realm through engineering projects and in the virtual world through software development.
                    This
                    combination of a strong body, an adventurous spirit, and a sharp mind defines my multifaceted and
                    fulfilling
                    lifestyle.
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
img{
   filter: grayscale(100);
   margin-left: 150px;
}
h1{
    color: #eb5e28;
    padding-top: 40px;
}
p{
    color: #fff;
}
.row{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    padding-bottom: 40px;
}
.col{
    padding-top: 100px;
    flex-basis: 50%;
}
@media screen and (max-width: 720px) and (min-width: 300px){
    img{
        margin-left: 25px;
        width: 250px;
        height: 300px;
    }
}
</style>