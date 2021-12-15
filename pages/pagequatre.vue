<template>
 <main>
  <Menu/>
    <center>

        
        <h1>Contact</h1>

        <div class="row">

            <div class="offset-lg-4 col-lg-4">

                <form name="contact" netlify>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="Message">Message</label>            
                    <textarea class="form-control" name="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div> 
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            
            </div> 

        </div>

        

        <!-- <form name="contact" netlify>
        <p>
        <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
        <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
        <button type="submit">Send</button>
        </p>
        </form> -->
        
       
        
        <!-- <li v-for="anime in animes" :key="anime.id">
            {{ anime.name }} - {{ anime.type }}
        </li> -->
        

    </center>

 </main>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    
}
</script>

