<script>
  export let data;

  let login = data.logedIn;
</script>

<div class="d-none d-lg-block">
  {#if login == false}
    <div
      class="card rounded shadow-sm"
    >
      <div class="card-body">
        <h5 class="card-title text-primary fs-6 fw-bolder">New to Eli5</h5>
        <p class="card-text small">
          Sign up now to get your own personalized timeline!
        </p>
        <a href="/auth" type="button" class="btn btn-outline-primary"
          >Get started</a
        >
      </div>
    </div>
  {/if}

  <!-- <div class="container p-0 mt-4 rounded border border-light-subtle shadow-sm">
    <a href="/explore">
      <img
        src="/assets/images/explore.webp"
        class="img-fluid"
        alt="explore it"
      />
    </a>
  </div> -->

  <!-- <div class="container p-0 mt-4 rounded border border-light-subtle shadow-sm">
    <a href="/share">
      <img src="/assets/images/share.webp" class="img-fluid" alt="noanswer" />
    </a>
  </div> -->
<!-- 
  <div class="container p-0 mt-4 rounded border border-light-subtle shadow-sm">
    <a href="/eli5">
      <img src="/assets/images/ask.webp" class="img-fluid" alt="how it works" />
    </a>
  </div> -->
  <a href="/explore" class="text-decoration-none">
    <div class="card my-2 shadow-sm">
      <div class="row no-gutters">
        <div class="col-md-3 p-0 text-center my-auto">
          <img src="/assets/images/askicon.webp" class="card-img" alt="...">
        </div>
        <div class="col-md-9 p-0">
          <div class="card-body ps-0 pe-3">
            <h5 class="card-title small fw-bolder text-primary">Explore Tag</h5>
            <p class="card-text small">Discorver the endless possibilities of exploring Eli5!</p>
          </div>
        </div>
      </div>
    </div>
  </a>

  <a href="/eli5" class="text-decoration-none">
    <div class="card my-2 shadow-sm">
      <div class="row no-gutters">
        <div class="col-md-3  p-0 text-center my-auto">
          <img src="/assets/images/exploreicon.webp" class="card-img" alt="...">
        </div>
        <div class="col-md-9 p-0">
          <div class="card-body ps-0 pe-3">
            <h5 class="card-title small fw-bolder text-primary">How Eli5 Works</h5>
            <p class="card-text small">Discover, Learn, and Share with ease on Eli5.</p>
          </div>
        </div>
      </div>
    </div>
  </a>

</div>
