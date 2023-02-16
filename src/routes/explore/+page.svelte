<script>
  export let data;
  let exploreTags = data.exploreTags.data;
</script>

<div class="container">
  <div class="row text-center">
    {#each exploreTags as tag}
      <div
        id={tag.tag}
        data-bs-dismiss="modal"
        class="col m-1 p-2 border border-1 rounded shadow-sm"
      >
        {tag.tag}
      </div>
    {/each}
  </div>
</div>

<div class="card-footer">
  <div class="container mb-2">
    <img src="/assets/images/explore.png" class="img-fluid" alt="noanswer" />
  </div>
</div>
