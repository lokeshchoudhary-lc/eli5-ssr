<script>
  export let data;

  let login = data.logedIn;
  let uniqueAlias = data?.uniqueAlias;
  let companyList = data.companyList;


</script>

<main>
  <section class="container">
    <div class="row py-3">
      <div class="col-lg-3 text-center">
        <img
          src="https://cdn.dribbble.com/users/2736280/screenshots/16268961/media/cdca026170f7a3181e951ab200ba8c74.jpg"
          class="img-fluid rounded border border-light shadow-sm d-none d-md-block"
          style="width:200px"
          alt=""
        />
      </div>
      <div class="col-lg-6">
        <h1 class="fw-medium">Simplify Squad</h1>
        <p class="lead text-body-secondary">
          Explore companies explaining what they do in Eli5 way
        </p>
      </div>
      <div class="col-lg-3 mx-auto">
        <p>
          {#if login == false}
            <a href="/showcase/auth" class="btn btn-primary m-2"
              >Submit Product</a
            >
            <a href="/showcase/auth" class="btn btn-outline-primary m-2"
              >Sign In</a
            >
          {:else}
            <a href={`/showcase/@${uniqueAlias}`} class="btn btn-primary m-2"
              >Go To Profile</a
            >
          {/if}
        </p>
      </div>
    </div>
  </section>

  <div class="album py-2 bg-body-tertiary">
    <div class="container">
      <h1 class="display-6">Startup Expo</h1>
      <lead>Browse top startup stacks and know how they work in Eli5 way</lead>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-2">
        <!-- listing of comapnies -->
        {#each companyList as company}
          <a
            href={`/showcase/@${company.uniqueAlias}`}
            class="text-dark text-decoration-none"
          >
            <div class="col" style="--brand-color: {company.brandColor}; --brand-color-op: {company.brandColor.concat("10")}">
              <div class="card shadow-sm">
                <div class="backdrop3" />
                <div class="card-body card3">
                  <div class="row">
                    <div class="col-3">
                      <img
                        src={company.profilePictureUrl}
                        class="img-fluid rounded border border-light shadow-sm"
                        style="width: 150px; z-index: 1"
                        alt=""
                      />
                    </div>
                    <div class="col-9">
                      <p class="fw-bold my-0">{company.name}</p>
                      <p class="fw-light my-0 info">
                        {company.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  .backdrop3 {
    background: var(--brand-color-op);
    height: 100px;
    border-radius: 5px 5px 0 0;
  }

  .card3 {
    border-top: 5px solid var(--brand-color);
  }

  .info {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .col:hover {
    transform: scale(1.01);
    transform: translate(0, -5px);
  }
  .card {
    border: none;
  }

  .card-body {
    border-radius: 10px 10px 0 0;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  }
</style>
