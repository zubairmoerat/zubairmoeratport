<template>
    <div class="container-fluid" id="testi">
        <h1 class="text-center">My References</h1>
        
    </div>
</template>
<script>
    export default {
        computed:{
            Testimonials(){
                return this.$store.state.testimonials
            }
        },
        mounted(){
            this.$store.dispatch('fetchTestimonials')
        }
    }
</script>

<style scoped>
img{
    width: 250px;
    height: 300px;
}
</style>