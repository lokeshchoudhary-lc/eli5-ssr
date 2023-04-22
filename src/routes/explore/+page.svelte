<script>
  import Right from '$lib/right.svelte';
  import Left from '$lib/left.svelte';
  import Signup from '$lib/signup.svelte';
  import Nav from '$lib/navbar.svelte';
  import Footer from '$lib/footer.svelte';
  export let data;
  let exploreTags = data.exploreTags.data;
</script>

<Nav {data} />

<div class="container mt-2">
  <div class="row">
    <div class="col-lg-3">
      <Left {data} />
    </div>

    <div class="col-lg-6">
      <div class="container">
        <h4>Explore</h4>

        <div class="contianer mt-3">
          <h6>#️⃣ Eli5 Tags</h6>
          <div class="row text-center">
            {#each exploreTags as tag}
              <a
                href={`/${tag.tag}`}
                class="col m-1 p-2 border border-1 rounded shadow-sm text-decoration-none"
              >
                {tag.tag}
              </a>
              <!-- <div id={tag.tag} class="col m-1 p-2 border border-1 rounded shadow-sm">
              {tag.tag}
            </div> -->
            {/each}
          </div>
        </div>


      </div>
    </div>

    <div class="col-lg-3">
      <Right />
    </div>
    <Signup />
  </div>
</div>
<Footer />
