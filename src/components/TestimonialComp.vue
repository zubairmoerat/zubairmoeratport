<template>
    <div class="container-fluid" id="testi">
        <h1 class="text-center">My References</h1>
        <div class="container" v-if="Testimonials" id="squirt">
            <div class="card-wrap" v-for="testimonial in Testimonials" :key="testimonial">
                <div class="flip-box m-3">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <img :src="testimonial.image" alt="peeps">
                        </div>
                        <div class="flip-box-back align-content-center">
                            <h5>{{ testimonial.name }} {{ testimonial.surname }}</h5>
                            <p>{{ testimonial.quote }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
#testi{
    padding-top: 100px;
    padding-bottom: 100px;
}
#squirt{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
img{
    width: 250px;
    height: 300px;
    filter: grayscale(100);
}

h1{
    color: #eb5e28;
}
.flip-box {
  background-color: transparent;
  width: 250px;
  height: 300px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}

/* Style the back side */
.flip-box-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
@media screen and (max-width: 800px) and (min-width: 300px){
    #squirt{
        flex-direction: column;
        justify-content: center;
    }
    #testi{
        padding-top: 15px;
        padding-bottom: 15px;
    }
}
</style>