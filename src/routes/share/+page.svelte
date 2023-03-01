<script>

    import Right from '$lib/right.svelte';
    import Left from '$lib/left.svelte';
    import Signup from '$lib/signup.svelte';
    import Nav from '$lib/navbar.svelte';
  
  </script>

  <Signup />
  
  <Nav />
  
  <div class="container mt-2">
    
    <div class="row">
  
        <div class="col-sm-3">
          <Left />
        </div>
  
        <div class="col-sm-6">
            <h4>Share Eli5</h4>
            <div class="card">

                <div class="card-body">
                  <h5 class="card-text">Spread the know-how with the ones you love!</h5>
                  <form class="d-flex" role="search">
                    <input type="text" class="form-control bg-white mt-2 border border-primary" placeholder="eli5.club/invite=ritik" disabled>
                    <button type="button" class="btn btn-primary mt-2 mx-2"><i class="bi bi-clipboard"></i></button> 
                  </form>
                  <div class="container mt-3">
                    List of member joined via your invite
                    <ul class="list-group mt-2">
                        <li class="list-group-item">ritikiitrbiotech@gmail.com</li>
                        <li class="list-group-item">sara.miller_85@hotmail.com</li>
                        <li class="list-group-item">jasonhughes2023@gmail.com</li>
                        <li class="list-group-item">nathaliagomez_91@yahoo.com</li>
                        <li class="list-group-item">samanthamorales_77@outlook.com</li>
                    </ul>
                </div>
                  
                </div>

              </div>
        </div>
  
        <div class="col-sm-3">
            <Right />
        </div>
        
    </div>
  
  </div>
  
  
  
  
  
  