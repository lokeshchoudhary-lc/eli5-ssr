<script>
  import Nav from '$lib/navbar.svelte';

</script>

  <div class="app_page1">
    <div class="row">
        <div class="col-sm-4" id="left">

            <div class="card border border-0">
                <img src="/assets/images/profile/pic5.png" class="card-img-top w-50 rounded-5 shadow-sm">
                <div class="card-body">
                  <h3>👋🏻 Lokesh Choudhary <button class="btn btn-outline-primary"><i class="bi bi-download"></i></button></h3>
                  <h3>🏫 Engineering College Bikaner</h3>
                  <h5>🚀 Community Ambassador</h5>
                  <h5>🎂 Member Since October 2022</h5>
                </div>
              </div>

              <div class="alert alert-ligth text-primary shadow-sm border-primary" role="alert">
                <b><i class="bi bi-clipboard fs-5"></i> Invite Link:</b> <u> eli5.club/?invite=amazing_ritik </u> 
              </div>

        </div>
        
        <div class="col-sm-4" id="right">
            <!-- <div class="container py-4"></div> -->


            <div class="row py-4" >
                <div class="col">
                    <div class="row row-cols-1 row-cols-sm-4 g-4 text-center">
                      <div class="col-lg-3 gap-2 border shadow-sm rounded py-2 mx-lg-2">
                        <span class="badge text-bg-primary fs-5">#1</span>
                        <h4 class="fw-semibold mb-0">#1 Rank</h4>
                        <p class="text-muted">Rank is calculated based on the CA score and other parameters</p>
                      </div>
            
                      <div class="col-lg-3 gap-2 border shadow-sm rounded py-2 mx-lg-2">
                        <i class="bi bi-share-fill text-primary fs-5"></i> 
                        <h4 class="fw-semibold mb-0">100 points</h4>
                        <p class="text-muted">The more you share with your friends the more is your score</p>
                      </div>
            
                      <div class="col-lg-3 gap-2 border shadow-sm rounded py-2 mx-lg-2">
                        <i class="bi bi-person-check fs-3 text-primary"></i>
                        <h4 class="fw-semibold mb-0">100 Joined</h4>
                        <p class="text-muted">Out of all invite you have shared 100 member have joined Eli5</p>
                      </div>
            

                    </div>
                  </div>
            </div>

            <h4 class="text-start mt-4">Member joined</h4>
            
            <table class="table border border-light shadow-sm">
                <thead>
                  <tr class="bg-primary text-white">
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Member Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>@amazing_ritik</td>
                    <td>ritik.singh@eli5.club</td>
                    <td>Active ✅</td>
                  </tr>
                  <tr>
                    <td>@amazing_ritik</td>
                    <td>ritik.singh@eli5.club</td>
                    <td>Active ✅</td>
                  </tr>
                  <tr>
                    <td>@amazing_ritik</td>
                    <td>ritik.singh@eli5.club</td>
                    <td>Active ✅</td>
                  </tr>
                  <tr>
                    <td>@amazing_ritik</td>
                    <td>ritik.singh@eli5.club</td>
                    <td>Active ✅</td>
                  </tr>
                  <tr>
                    <td>@amazing_ritik</td>
                    <td>ritik.singh@eli5.club</td>
                    <td>Active ✅</td>
                  </tr>
                  <tr>
                    <td>@amazing_ritik</td>
                    <td>ritik.singh@eli5.club</td>
                    <td>Active ✅</td>
                  </tr>
                  <tr>
                    <td>@amazing_ritik</td>
                    <td>ritik.singh@eli5.club</td>
                    <td>Active ✅</td>
                  </tr>
                </tbody>
              </table>
            
              <h4 class="text-start mt-4">Sharable Message</h4>
              <div class="card my-2">
                <div class="card-header">
                  Intagram, Linkedin, Twitter, Reddit Post
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </div>
              </div>

              <div class="card my-2">
                <div class="card-header">
                  Youtube Video Sharng Caption
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </div>
              </div>

              <div class="card my-2">
                <div class="card-header">
                  Quote
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </div>
              </div>

        </div>
    </div>
</div>


<style>
.app_page1 {
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  height:100%;
}

@media (min-width: 768px){
  #left {
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    width: 30%;
    overflow-y: scroll; 
  }
  
  #right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
    width: 70%;
  }
}

#left {
  height:100%;
}


#right {
  height:100%;
}

h4,h3,h5{
  padding: 10px 0; 
}

.tool-card{
  border: 2px solid black;
  padding: 10px 10px;
  margin: 10px 0;
}
</style>