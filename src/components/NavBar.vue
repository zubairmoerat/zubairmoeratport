<template>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link fs-3" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-3" href="#about">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-3" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-3" href="#resume">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-3" href="#testi">References</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-3" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    background: #000;
    z-index: 10000;
}
.nav-item{
    padding-left: 25px;
}
a{
    color: #fff;
}
a:hover{
    color: #eb5e28;
}
a:active{
    color: #eb5e28;
}
@media screen and (max-width: 720px) and (min-width: 300px){
    .nav-item{
        padding: 0;
    }
}
</style>