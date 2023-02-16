<script>
  import { profileUrl } from '../../lib/vars';
  export let data;
  let leaderboard = data.leaderboard.data;
</script>

<table class="table p-0 m-0" style=" font-size: small;">
  <thead style="background-color:#FAFBFF;">
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
            src={profileUrl + 'pic' + lead.profilePictureCode + '.png'}
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

<div class="modal-footer" />
