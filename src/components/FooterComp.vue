<template>
    <div class="row">
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

</style>