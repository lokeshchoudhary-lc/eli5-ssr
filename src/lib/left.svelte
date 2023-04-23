<script>
  export let data;

  let login = data.logedIn;
</script>

<div class="d-none d-lg-block">
  {#if login == false}
    <div
      class="card rounded border border-light shadow-sm"
      style="background-color: #FAFBFF;"
    >
      <div class="card-body">
        <h5 class="card-title">New to Eli5</h5>
        <p class="card-text">
          Sign up now to get your own personalized timeline!
        </p>
        <a href="/auth" type="button" class="btn btn-outline-primary"
          >Get started</a
        >
      </div>
    </div>
  {/if}

  <div class="container p-0 mt-4 rounded border border-light-subtle shadow-sm">
    <a href="/explore">
      <img
        src="/assets/images/explore.webp"
        class="img-fluid"
        alt="explore it"
      />
    </a>
  </div>

  <!-- <div class="container p-0 mt-4 rounded border border-light-subtle shadow-sm">
    <a href="/share">
      <img src="/assets/images/share.webp" class="img-fluid" alt="noanswer" />
    </a>
  </div> -->

  <div class="container p-0 mt-4 rounded border border-light-subtle shadow-sm">
    <a href="/eli5">
      <img src="/assets/images/ask.webp" class="img-fluid" alt="how it works" />
    </a>
  </div>
</div>
