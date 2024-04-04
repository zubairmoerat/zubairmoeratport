<template>
    <div class="container-fluid" id="contact">
        <h1 class="text-center">Contact Me</h1>
        <div class="contactRow">
            <div class="contactCol">
                <form action="https://formspree.io/f/maygaowg" method="POST" id="contactForm" name="contactForm"
                    class="contactForm" required>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Your name"
                                    required>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group pt-2">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your email"
                                    required>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group pt-2">
                                <textarea name="message" class="form-control" id="message" cols="30" rows="8"
                                    placeholder="Your Message" required></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group pt-2 text-center">
                                <input type="submit" value="Send" class="btn">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="contactCol">
                <h3 class="text-center"><i class="fa-solid fa-location-dot"></i> District 6, Cape Town</h3>
                <h3 class="text-center"><i class="fa-solid fa-phone"></i> +27 68 266 5739</h3>
                <h3 class="text-center"><i class="fa-solid fa-envelope"></i> moeratz02@outlook.com</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#contact{
    padding-top: 100px;
    padding-bottom: 100px;
}
h1{
    color: #eb5e28;
}
.contactRow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 40px;
    flex-wrap: wrap;
}

.contactCol {
    flex-basis: 40%;
}

.row {
    display: inline-block;
}

.form-group {
    width: 500px;
}

form {
    width: fit-content;
}

h3 {
    color: #eb5e28;
    padding-top: 20px;
    padding-bottom: 20px;
}

.btn {
    border: 1px solid #fff;
    box-shadow: 0 2px 3px #e9322e;
    background: #000;
    color: #fff;
}

input {
    background: #000;
    box-shadow: 0 2px 3px #e9322e;
    color: #fff;
}

textarea {
    background: #000;
    box-shadow: 0 2px 3px #e9322e;
    color: #fff;
}

input::placeholder {
    color: #fff;
}

textarea::placeholder {
    color: #fff;
}

@media screen and (max-width: 720px) and (min-width: 300px){
    .form-group{
        width: 250px;
    }
    #contact{
    padding: 0;
}
}
</style>