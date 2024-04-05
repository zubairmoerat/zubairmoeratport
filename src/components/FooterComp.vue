<template>
    <div class="container-fluid">
        <p class="text-center">Zubair Moerat's Protfolio &copy; <span>{{ currYear }}</span></p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
.container-fluid{
    background: #000;
    position: relative;
    bottom: 0;
    margin: 0;
}
p{
    color: #fff;
    margin: 0;
}
</style>