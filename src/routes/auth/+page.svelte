<script>
  import { onMount } from 'svelte';
  import { initializeGoogleAccounts, renderGoogleButton } from '$lib/google';
  onMount(() => {
    initializeGoogleAccounts();
    renderGoogleButton();
  });
</script>

<div class="conatiner p-3">

    <div class="card text-center">
      <div class="card-body">

        <img
          src="/assets/images/signin.png"
          alt=""
          class="img-fluid"
        />
        <div class="container d-flex justify-content-center my-3">
          <div id="googleButton"/>
        </div>
      </div>
      <div class="card-footer bg-white">
        Not able to sign-in: <a href="#" class="url"> Need help?</a>
      </div>
    </div>

</div>