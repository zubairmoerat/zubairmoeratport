<template>
    <div id="home" class="container-fluid">
        <h1 class="text-center">Welcome to my Portfolio</h1>
        <div class="d-flex justify-content-evenly" id="landing-section">
            <div class="align-content-center">
                <h3 class="text-center">I am Zubair Moerat</h3>
                <h5 class="text-center">a full-stack developer.</h5>
            </div>
            <div class="d-flex justify-content-center">
                <img src="https://iili.io/JW5qdoG.jpg" alt="Me" class="img-fluid rounded" loading="lazy">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#landing-section{
    margin-top: 150px;
    margin-bottom: 200px;
}
h1{
    color: #eb5e28;
    padding-top: 40px;
}
h3{
    color: #eb5e28;
    font-size: 40px;
}
h5{
    color: #eb5e28;
}
a{
    text-decoration: none;
    color: #000;
}

@media screen and (max-width: 800px) and (min-width: 300px){
    img{
        height: 150px;
        width: 150px;
    }
    #landing-section{
    margin-top: 50px;
    margin-bottom: 50px;
    flex-direction: column;
}
}
</style>