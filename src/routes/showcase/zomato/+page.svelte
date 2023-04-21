<script>

let color = '#fff';

</script>

<section class="h-100 gradient-custom-2">
    <div class="container pt-3 pb-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-10 position-relative">
          <div class="card">
            <div class="rounded-top text-white d-flex flex-row backdrop">
              <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
                <img src="https://play-lh.googleusercontent.com/AJCitwuXIAqauTL7ccZ-FlnO1_18DbYiYo9lk25TNOdlV7_hLz-ogqUMnOPDYyAeX-0"
                  alt="Generic placeholder image" class="img-fluid img-thumbnail margin-top mb-2"
                  style="width: 150px; z-index: 1">
              </div>
            </div>
            <div class="p-3 text-black">
              <div class="d-flex justify-content-end text-center py-0">

                <div class="m-1 position-absolute top-0 end-0">
                    <button type="button" class="btn btn-outline-danger like-btn"
                    style="z-index: 1;" data-bs-toggle="modal" data-bs-target="#profileModal">
                    <i class="bi bi-pen"></i>
                  </button>
                </div>
                <div class="mx-1">
                  <button type="button" class="btn btn-outline-danger like-btn"
                  style="z-index: 1;">
                  <i class="bi bi-heart-fill"></i> 100K+ Love
                </button>
              </div>
              </div>
            </div>

            <div class="card-body py-0">
                <div class="ms-3">
                    <h3 class="fw-bolder">Zomato</h3>
                    <lead>@zomato</lead>
                  </div>
            </div>

            <div class="card-body text-black">
              <div class="mb-2 bg-light border border-light rounded p-4">
                <p class="lead fw-bold mb-1">Eli5 what does <span class="brand-name"> Zomato </span> do?</p>
                <div>
                  <p class="font-italic mb-1">Zomato is a food app that helps you find the best restaurants with ratings and reviews. 
                      You can order food online or book a table. It's like having a food genie in your pocket! 🍽️🍔🌮🍕</p>
                </div>
              </div>

              <div class="container my-4">
                <div class="row g-2">
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                      
                        <a href={null} class="text-decoration-none text-dark">
                          <i class="bi bi-instagram" style="color:#D02C77" /> Instagram
                        </a>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                        <a href={null} class="text-decoration-none text-dark">
                          <i class="bi bi-twitter" style="color:#00acee" /> Twitter
                        </a>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                        <a href={null} class="text-decoration-none text-dark">
                          <i class="bi bi-linkedin" style="color:#0072b1" /> Linkedin
                        </a>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                        <a href={null} class="text-decoration-none text-dark">
                          <i class="bi bi-facebook" style="color:#3b5998" /> Facebook
                        </a>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                        <a href={null} class="text-decoration-none text-dark">
                          <i class="bi bi-youtube" style="color:#FF0000" /> Youtube
                        </a>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="p-3 border rounded-4 shadow-sm">
                        <a href={null} class="text-decoration-none text-dark">
                          <i class="bi bi-link-45deg" style="color:#FF0000" /> Other link
                        </a>
                    </div>
                  </div>

                </div>
              </div>
       
              

              <div class="d-flex justify-content-between align-items-center mb-2">
                <p class="lead fw-bold mb-0">Member also asked?</p>
                <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
              </div>
              
              <div class="container p-0">
                
                <div class="card my-2 border border-secondary-subtle">
                    <div class="card-header bg-white border-0 pb-1">
                        <span class="badge rounded-pill tags">Zomato</span> <span class="badge rounded-pill tags">Eli5</span>
                    </div>
                    <div class="card-body pt-2">
                      <h6 class="card-title fw-normal">What is Zomato Gold and how can I get zomato gold?</h6>
                    </div>
                </div>
                  
                <div class="card my-2 border border-secondary-subtle">
                    <div class="card-header bg-white border-0 pb-1">
                        <span class="badge rounded-pill tags">Zomato</span> <span class="badge rounded-pill tags">Eli5</span>
                    </div>
                    <div class="card-body py-1">
                      <h6 class="card-title fw-normal">What is Zomato Intercity legends and does it also do international deliveries?</h6>
                    </div>
                </div>
                  
              </div>
              
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Profile edit modal -->
  <div class="modal fade" id="profileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row justify-content-center">
            <div class="col">
              <h3 class="mb-2">Enter Company Profile Details</h3>
              <p class="mb-2 text-secondary small">Note: You can edit this in the future as well</p>
              <form>
                  <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="text" class="form-control border border-primary bg-light" id="email" name="email" placeholder="ritikiitrbiotech@gmail.com" disabled>
                    </div>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" name="username" required>
                </div>
                <div class="mb-3">
                  <label for="logo" class="form-label">Logo Upload</label>
                  <input type="file" class="form-control" id="logo" name="logo" accept=".png" required>
                  <small class="text-muted">File must be in PNG format and under 1MB.</small>
                </div>
                <div class="mb-3">
                  <label for="bio" class="form-label">Bio</label>
                  <textarea class="form-control" id="bio" name="bio" rows="3" required></textarea>
                </div>
                <div class="mb-3">
                  <label for="instagram" class="form-label">Instagram URL</label>
                  <input type="url" class="form-control" id="instagram" name="instagram" placeholder="https://www.instagram.com/username">
                </div>
                <div class="mb-3">
                  <label for="twitter" class="form-label">Twitter URL</label>
                  <input type="url" class="form-control" id="twitter" name="twitter" placeholder="https://twitter.com/username">
                </div>
                <div class="mb-3">
                  <label for="linkedin" class="form-label">LinkedIn URL</label>
                  <input type="url" class="form-control" id="linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/username">
                </div>
                <div class="mb-3">
                  <label for="facebook" class="form-label">Facebook URL</label>
                  <input type="url" class="form-control" id="facebook" name="facebook" placeholder="https://www.facebook.com/username">
                </div>
                <div class="mb-3">
                  <label for="youtube" class="form-label">YouTube URL</label>
                  <input type="url" class="form-control" id="youtube" name="youtube" placeholder="https://www.youtube.com/channel/username">
                </div>
                <div class="mb-3">
                  <label for="other" class="form-label">Other Links</label>
                  <input type="url" class="form-control" id="other" name="other" placeholder="https://www.example.com">
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button class="btn btn-success" type="button">Submit</button>
        </div>
      </div>
    </div>
  </div>
  


<style>
.margin-top{
    margin-top:3rem;
}

.backdrop{
    background: #E1374410;  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    height:200px;
    
}

.like-btn{
    border-color: #E13744;
    color: #E13744 ;
}
.like-btn:hover{
    border-color: #E13744;
    background-color: #E13744;
    color: white ;
}

.brand-name{
    color: #E13744;
}

.tags{
    color: #E13744;
    border-color: #E13744;;
    border-style: solid;
    border-width: 1px;
}

</style>