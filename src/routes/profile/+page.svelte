<script>
    import Right from '$lib/right.svelte';
    import Left from '$lib/left.svelte';
    import Signup from '$lib/signup.svelte';
    import Nav from '$lib/navbar.svelte';

    export let data;
 
  </script>
  
  <Nav {data} />
  
  <div class="container mt-2">
    <div class="row">
      <div class="col-sm-3">
        <Left {data} />
      </div>
  
      <div class="col-sm-6">
        <div class="card mb-2 mt-2 shadow-sm border position-relative p-2 rounded-4">
            <div class="row g-0 p-1">
              <div class="col-2 m-auto">
                <img src="/assets/images/profile/pic1.png" class="img-fluid" alt="...">
              </div>
              <div class="col-10">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">Ritik Singh Panwar</h5>
                  <p class="card-text my-1 fw-light">@fabulous-ritik-18219</p>
                  <p class="card-text"><small class="text-primary">Joined on 17th feb 2022</small></p>
                </div>
              </div>
            </div>
            <div class="container my-2">
            <lead class="text-secondary fw-semibold">Eli5'ed bio</lead>
            <p class="card-text fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-outline-primary card-link position-absolute top-0 end-0 m-2"><i class="bi bi-pen"></i></a>
            </div>
          </div>

          <!-- <div class="card my-4 shadow-sm border-light">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Edit Bio</a>
            </div>
          </div> -->

          <div class="conatiner my-4 d-flex gap-2 justify-content-center flex-wrap">
            <span class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4">
                <img class="me-1" height="30" src="/assets/images/curious.png" alt="">Curious
              </span>
              <span class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4">
                <img class="me-1" height="30" src="/assets/images/rookie.png" alt="">Rookie
              </span>
              <span class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4">
                <img class="me-1" height="30" src="/assets/images/brainy.png" alt="">Brainy
              </span>
              <span class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4">
                <img class="me-1" height="30" src="/assets/images/expert.png" alt="">Expert
              </span>
              <span class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4">
                <img class="me-1" height="30" src="/assets/images/master.png" alt="">Master
              </span>
              <span class="badge d-flex align-items-center p-1 pe-2 bg-primary border border-primary-subtle rounded-4">
                <img class="me-1" height="30" src="/assets/images/guru.png" alt="">Guru
              </span>
          </div>

          <div class="container my-4">
            <div class="row g-2">
              <div class="col-4">
                <div class="p-3 border rounded-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" style="fill:#000" width="16" height="16" fill="currentColor" class="bi bi-pen-fill text-primary" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                      </svg> 200 Answers
                </div>
              </div>
              <div class="col-4">
                <div class="p-3 border rounded-4 shadow-sm">
                    <i class="bi bi-heart-fill" style="color:#F44336"></i> 10K Likes
                </div>
              </div>
              <div class="col-4">
                <div class="p-3 border rounded-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" style="fill:#FC5620" width="16" height="16" fill="currentColor" class="bi bi-fire text-primary" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                  </svg> 30 Streaks
                </div>
              </div>
            </div>
          </div>

        <div class="container my-4">
            <div class="alert alert-ligth text-primary shadow-sm border-primary rounded-4" role="alert">
                <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
                    <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm4 5.982c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                  </svg> </b> <u> eli5.club/?invite=amazing_ritik </u>
            </div>
        </div>

        <!-- <div class="container my-4">
            <h6>Member Joined via Invite</h6>
            <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Lokesh</div>
                    @deve-lokesh-18728
                  </div>
                  <span class="badge bg-success rounded-pill">Active</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Dhruv</div>
                    @lover-dhruv-18612
                  </div>
                  <span class="badge bg-success rounded-pill">Active</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Saurabh</div>
                    @sup-saurabh-1926
                  </div>
                  <span class="badge bg-danger rounded-pill">Inactive</span>
                </li>
              </ol>
        </div> -->
        
        <div class="container my-4">
            <div class="row g-2">
              <div class="col-4">
                <div class="p-3 border rounded-4 shadow-sm">
                    <i class="bi bi-instagram" style="color:#D02C77"></i> Instagram
                </div>
              </div>
              <div class="col-4">
                <div class="p-3 border rounded-4 shadow-sm">
                    <i class="bi bi-twitter" style="color:#00acee"></i> Twitter 
                </div>
              </div>
              <div class="col-4">
                <div class="p-3 border rounded-4 shadow-sm">
                    <i class="bi bi-linkedin" style="color:#0072b1"></i> Linkedin
                </div>
              </div>
            </div>
          </div>

      </div>
  
      <div class="col-sm-3">
        <Right />
      </div>
    </div>
  </div>
  