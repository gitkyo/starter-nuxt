<template>
 <main>
     
  <Menu/>
    <center>

        
        <h1>Contact</h1>

        <p>Formulaire de contact bootstrap connecté à netlify :</p>

		<div class="container">
			<div class="row">
				<div class="offset-md-4 col-md-4">
					
                    
                    <!-- <form name="contactus" netlify netlify-honeypot="bot-field" hidden>
                        nom : <input type="text" name="name" />
                        email : <input type="radio" name="email" />
                        <textarea name="message"></textarea>
                    </form> -->

                   
                    <!-- <FormContact/> -->
                    
                    <!-- <form
                        name="ask-question"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        >
                        <input type="hidden" name="form-name" value="ask-question" />
                        <label v-for="(panelist, index) in panelists" :key="index">
                            <input
                            type="radio"
                            name="panelist"
                            :value="panelist"
                            @input="ev => updatePanelist"
                            :checked="panelist === currentPanelist"
                            />
                            <span>{{ panelist }}</span>
                        </label>
                        
                        <div class="form-group">
						  <label for="exampleInputEmail1">Votre Email</label>
						  <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
						  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
                        
                        <button>Submit</button>
                    </form> 
                    
                    
                        
                        -->
                    
                    <form name="contact" method="POST" 
                        data-netlify="true" 
                        data-netlify-honeypot="bot-field"
                        >
						<div class="form-group">
						  <label for="exampleInputEmail1">Votre Email</label>
						  <input type="email" name="email" value="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
						  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
						<div class="form-group">
						  <label for="exampleInputPassword1">Votre nom</label>
						  <input name="nom" type="text" value="" class="form-control" id="exampleInputPassword1" placeholder="">
						</div>		
                            

                            <input type="hidden" :value="this.$route.path">
                            <input type='hidden' name='form-name' value="contact" />
						<p>							
						</p>
						<button type="submit" class="btn btn-primary">Envoyer</button>
					</form> 
                   

                    
				</div>				
			</div>
		</div>

        

             
       
        
        <!-- <li v-for="anime in animes" :key="anime.id">
            {{ anime.name }} - {{ anime.type }}
        </li> -->
        

    </center>

 </main>
</template>

<script>

// form integration  : https://docs.netlify.com/forms/setup/
// https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/


export default {

    
    data(){
        return{
            
        }
    },
    
}
</script>

