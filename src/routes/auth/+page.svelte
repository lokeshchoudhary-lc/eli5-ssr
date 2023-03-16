<script>
  import { onMount } from 'svelte';
  import { initializeGoogleAccounts, renderGoogleButton } from '$lib/google';
  onMount(() => {
    initializeGoogleAccounts();
    renderGoogleButton();
  });
</script>

<div id="googleButton" />
