<script>
  import Right from '$lib/right.svelte';
  import Left from '$lib/left.svelte';
  import Nav from '$lib/navbar.svelte';

  import { profileUrl } from '../../../lib/vars';
  export let data;
  let leaderboard = data.leaderboard.data;
</script>

<Nav {data} />

<div class="container mt-2">
  <div class="row">
    <div class="col-lg-3">
      <Left {data} />
    </div>

    <div class="col-lg-6">
      <h4>Leaderboard</h4>
      <h6>
        Check out our leaderboard! It's where we showcase the top 100 users who
        are absolutely crushing it in this community.
      </h6>
      <table class="table p-0 m-0" style=" font-size: small;">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Likes</th>
            <th scope="col">Answers</th>
          </tr>
        </thead>
        <tbody>
          {#each leaderboard as lead, i}
            <tr>
              <td><span>{i + 1}</span></td>
              <td
                ><img
                  src={profileUrl + 'pic' + lead.profilePictureCode + '.webp'}
                  alt=""
                  height="30"
                /> <span>{lead.uniqueAlias}</span></td
              >
              <td>{lead.totalLikes}</td>
              <td>{lead.totalAnswers}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="col-lg-3">
      <Right />
    </div>
  </div>
</div>
