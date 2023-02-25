<script>
  import axios from 'axios';
  axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
  axios.defaults.withCredentials = true;
</script>

<nav class="navbar navbar-expand-md" style="background-color: #3366FF" aria-label="Fourth navbar example">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/assets/images/navlogo.png" alt="Logo" height="40" class="d-inline-block align-text-top">
    </a>
    <button class="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
      <span class="text-light fs-2"><i class="bi bi-list"></i></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample04">
      <ul class="navbar-nav me-auto mb-2 mb-md-0 text-light">
        <li class="nav-item">
         <p class="fs-4 mb-0">Stay on top of the latest happenings</p>
         <p class="fs-6 mb-0">The Eli5 community is always ahead of the curve</p>
        </li>
      </ul>
      <form role="lead">
        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#signup">Log-In</button>
        <button type="button" class="btn btn-light" style="color:#3366FF" data-bs-toggle="modal" data-bs-target="#signup">Sign-Up</button>

      </form>
    </div>
  </div>
</nav>

<style>
.navbar-toggler:focus {
    outline: none;
    box-shadow: none;
}

.navbar-toggler-icon:focus{
    outline: none;
    box-shadow: none;
}

.navbar-toggler:active{
    outline: none;
    box-shadow: none;
}
</style>

<slot />
