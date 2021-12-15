<template>
 <main>
     
  <Menu/>
    <center>

        
        <h1>Contact</h1>

        <p>Formulaire de contact bootstrap connecté à netlify :</p>

		<div class="container">
			<div class="row">
				<div class="offset-md-4 col-md-4">
					
                    
                    <form name="contactus" netlify netlify-honeypot="bot-field" hidden>
                        <input type="text" name="name" />
                        <input type="radio" name="email" />
                        <textarea name="message"></textarea>
                    </form>
                    <!-- 
                    <form name="contact" method="POST" data-netlify="true">
						<div class="form-group">
						  <label for="exampleInputEmail1">Votre Email</label>
						  <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
						  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
						<div class="form-group">
						  <label for="exampleInputPassword1">Votre nom</label>
						  <input name="nom" type="text" class="form-control" id="exampleInputPassword1" placeholder="">
						</div>		
						<p>
							
						</p>
						<button type="submit" class="btn btn-primary">Envoyer</button>
					</form> 
                    -->

                    
				</div>				
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

