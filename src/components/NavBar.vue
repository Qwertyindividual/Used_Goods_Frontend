<template>
  <div>

    
    <div class="row row-cols-2 fixed-top">
    <div class="col-10 one text-dark ps-5 pb-3 pt-2"><i class="fa-solid fa-truck"></i>  Free Delivery </div>
    <div class="col-1 two text-dark fw-bold pb-2 pt-2 text-center"><router-link class="text-decoration-none" to="/register"><a class="text-dark me-4 ms-3 fw-bold">Register</a></router-link> 
</div>
    <div class="col-1 three text-dark text-center pt-2 ps-0"><router-link class="text-decoration-none" to="/login"><a class="text-dark me-4 ms-4 fw-bold text-center">Login</a></router-link> 
</div>
   
 
</div>


<nav class="navbar navbar-expand-lg navbar-dark bg-gradient fixed-top mt-5 nav">
  
   <div class="container">
			<a class="navbar-brand text-dark title fw-bold" href="#"><i>Used Goods</i></a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav m-auto mb-2 mb-lg-0">
				<router-link class="text-decoration-none" to="/"><a class="Home text-dark me-3 fw-bold me-4">Home</a></router-link> 
                <router-link class="text-decoration-none" to="/products"><a class="About text-dark text-center fw-bold me-4 ms-5">Products</a></router-link> 
                <router-link class="text-decoration-none" to="/admin"><a class="Register text-dark me-4 ms-5 fw-bold">Admin</a></router-link> 
                <router-link class="text-decoration-none" to="/contact"><a class="Contact text-dark fw-bold me-4 ms-5">Contact</a></router-link>
				</ul>
			</div>
		</div>
    
      <router-link class="text-decoration-none" to="/contact"> <a><i class="fa-solid fa-message text-dark ms-5 me-3"></i></a></router-link>   
            <a href=""><i class="fa-brands fa-facebook-f text-dark me-3"></i></a>
              <a href="" target="_blank"><i class="fa-brands fa-square-instagram text-dark me-3"></i></a>
          
    

	</nav>
  </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/fairy-strange');
.one {
  background-color: #B08968;
  font-family: monospace, sans-serif;
}
.two {
background: #DDB892;
}
.three {
  background: #E6CCB2;
}

.title {
  font-style: monospace, sans-serif;
}



</style>