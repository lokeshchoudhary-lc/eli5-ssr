<script>
  import { onMount } from 'svelte';
  import Nav from '$lib/navbar.svelte';
  import Footer from '$lib/footer.svelte'
  import { initializeGoogleAccounts, renderGoogleButton } from '$lib/google';

  export let data;

  onMount(() => {
    initializeGoogleAccounts();
    renderGoogleButton();
  });
</script>

<Nav {data} />

<div class="conatiner p-3">

    <div class="card text-center">
      <div class="card-body">

        <img
          src="/assets/images/signin.webp"
          alt=""
          class="img-fluid"
        />
        <div class="container d-flex justify-content-center my-3">
          <div id="googleButton"/>
        </div>
      </div>
      <div class="card-footer bg-white">
        Not able to sign-in: <a href="https://tally.so/r/nW2D4k" class="url"> Need help?</a>
      </div>
    </div>

</div>

<Footer />