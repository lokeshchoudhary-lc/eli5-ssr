
<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Masonry from 'masonry-layout';
  
    import Footer from '$lib/footer.svelte';
    import Right from '$lib/right.svelte';
    import Left from '$lib/left.svelte';
    import Nav from '$lib/navbar.svelte';

    export let data;
  
    let masonry;
    onMount(() => {
      masonry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true
      });
  
    });

    function getRandomLightColor() {
    var letters = 'ABCDEF';
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var randomValue = Math.floor(Math.random() * 6 + 6); // Generates light colors between #88 and #FF
      color += letters[Math.floor(Math.random() * letters.length)];
      color += randomValue.toString(16);
    }
    return color;
  }

  function setRandomBackground() {
    var elements = document.getElementsByClassName('custom-div');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.style.background = getRandomLightColor();
    }
  }

  onMount(setRandomBackground);

  </script>

  <Nav {data}/>

<div class="container mt-3 container1">
  <div class="row mb-2 horizontal-scroll">
    <div class="col">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hash" viewBox="0 0 16 16">
          <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
        </svg>
        <div class="name text-body-secondary">Explore</div>
      </div>
    </div>
    <div class="col">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-piggy-bank" viewBox="0 0 16 16">
          <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z"/>
          <path fill-rule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"/>
        </svg>
        <div class="name text-body-secondary">Money</div>
      </div>
    </div>
    <div class="col">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
        </svg>
        <div class="name text-body-secondary">Tech</div>
      </div>
    </div>

    <div class="col">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower1" viewBox="0 0 16 16">
          <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        <div class="name text-body-secondary">Science</div>
      </div>
    </div>

    <div class="col">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
          <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
        </svg>
        <div class="name text-body-secondary">History</div>
      </div>
    </div>

    <div class="col">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
          <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
        </svg>
        <div class="name text-body-secondary">Fandom</div>
      </div>
    </div>
    <div class="col">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
        </svg>
        <div class="name text-body-secondary">Startup</div>
      </div>
    </div>

    <div class="col">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
        </svg>
        <div class="name text-body-secondary">Trending</div>
      </div>
    </div>

    <!-- Add more col divs for additional icons -->
    <!-- Repeat the structure for a total of 10 icons -->
  </div>
</div>

<div class="container mt-3">
<div class="row grid">

  <div class="col-md-3 grid-item">
    <div class="card">
        <div class="card-img-overlay">
            <img src="https://media3.giphy.com/media/3o7aD84Q1niZmMSvIc/giphy.gif" class="card-img-top" alt="Image 9">
            <div class="gradient-overlay"></div>
        </div>
        <div class="card-body">
            <h6 class="card-title">What factors contribute to human longevity?</h6>
            <p class="card-text text-body-tertiary">Science</p>
        </div>
    </div>
</div>

<div class="col-md-3 grid-item">
    <div class="card">
        <div class="card-img-overlay">
            <img src="https://i.pinimg.com/originals/68/34/da/6834dae179cbc9e350a924bce25f663a.gif" class="card-img-top" alt="Image 1">
            <div class="gradient-overlay"></div>
        </div>
        <div class="card-body">
            <h6 class="card-title">Do Animals Get Drunk?</h6>
            <p class="card-text text-body-tertiary">Science</p>
        </div>
    </div>
</div>

<div class="col-md-3 grid-item">
    <div class="card">
        <div class="card-img-overlay">
            <img src="https://64.media.tumblr.com/65d399f7505db363fd436ca9654b8da5/tumblr_nw6fkzORqx1sjwwzso1_540.gifv" class="card-img-top" alt="Image 2">
            <div class="gradient-overlay"></div>
        </div>
        <div class="card-body">
            <h6 class="card-title">Do you know Faulty Memory Is a Feature, Not a Bug?</h6>
            <p class="card-text text-body-tertiary">Science</p>
        </div>
    </div>
</div>

<div class="col-md-3 grid-item">
    <div class="card">
        <div class="card-img-overlay">
            <img src="https://media.newyorker.com/photos/5df7f4edeb8d9200088c0e97/1:1/w_900,h_900,c_limit/2019-tny-poetry.gif" class="card-img-top" alt="Image 3">
            <div class="gradient-overlay"></div>
        </div>
        <div class="card-body">
            <h6 class="card-title">Will reading a poem helps you stay happy?</h6>
            <p class="card-text text-body-tertiary">Science</p>
        </div>
    </div>
</div>

<div class="col-md-3 grid-item">
  <div class="card">
    <div class="custom-div"></div>
      <div class="card-body">
          <h6 class="card-title">Will reading a poem helps you stay happy?</h6>
          <p class="card-text text-body-tertiary">Science</p>
      </div>
  </div>
</div>

<div class="col-md-3 grid-item">
    <div class="card">
        <div class="card-img-overlay">
            <img src="https://i.pinimg.com/originals/fc/10/43/fc10436608ac41e7bb3b9e9d8bf236bd.gif" class="card-img-top" alt="Image 4">
            <div class="gradient-overlay"></div>
        </div>
        <div class="card-body">
            <h6 class="card-title">How Can We Stop the CO2 that Plants Store from Leaking Back Into the Air?</h6>
            <p class="card-text text-body-tertiary">Science</p>
        </div>
    </div>
</div>
<div class="col-md-3 grid-item">
  <div class="card">
      <div class="card-img-overlay">
          <img src="https://i.gifer.com/911z.gif" class="card-img-top" alt="Image 5">
          <div class="gradient-overlay"></div>
      </div>
      <div class="card-body">
          <h6 class="card-title">How Can Tweets Predict Stock Market Returns?</h6>
          <p class="card-text text-body-tertiary">Money</p>
      </div>
  </div>
</div>

<div class="col-md-3 grid-item">
  <div class="card">
      <div class="card-img-overlay">
          <img src="https://i.gifer.com/Gz2.gif" class="card-img-top" alt="Image 6">
          <div class="gradient-overlay"></div>
      </div>
      <div class="card-body">
          <h6 class="card-title">How to save for your Masters and Other Higher Studies?</h6>
          <p class="card-text text-body-tertiary">Money</p>
      </div>
  </div>
</div>

<div class="col-md-3 grid-item">
  <div class="card border border-light">
      <div class="card-img-overlay">
          <img src="https://media.tenor.com/Ai-E9aBm5p8AAAAC/help-money-too-much-money.gif" class="card-img-top" alt="Image 7">
          <div class="gradient-overlay"></div>
      </div>
      <div class="card-body">
          <h6 class="card-title">How to leverage AI for financial planning?</h6>
          <p class="card-text text-body-tertiary">Money</p>
      </div>
  </div>
</div>

<div class="col-md-3 grid-item">
  <div class="card">
      <div class="card-img-overlay">
          <img src="https://www.icegif.com/wp-content/uploads/2022/12/icegif-841.gif" class="card-img-top" alt="Image 8">
          <div class="gradient-overlay"></div>
      </div>
      <div class="card-body">
          <h6 class="card-title">How to save for your international trip?</h6>
          <p class="card-text text-body-tertiary">Money</p>
      </div>
  </div>
</div>

<div class="col-md-3 grid-item">
  <div class="card">
      <div class="card-img-overlay">
          <img src="https://media1.giphy.com/media/kt6rktnml8cPSdpHF9/giphy.gif" class="card-img-top" alt="Image 9">
          <div class="gradient-overlay"></div>
      </div>
      <div class="card-body">
          <h6 class="card-title">What shall I keep in mind before getting a credit card?</h6>
          <p class="card-text text-body-tertiary">Money</p>
      </div>
  </div>
</div>

<div class="col-md-3 grid-item">
  <div class="card">
    <div class="custom-div"></div>
      <div class="card-body">
          <h6 class="card-title">Will reading a poem helps you stay happy?</h6>
          <p class="card-text text-body-tertiary">Science</p>
      </div>
  </div>
</div>




</div>
</div>

<style>
.grid-item .card {
    margin-bottom: 20px;
    border-radius:15px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    border:none
  }
  
  .gradient-overlay:hover{
    background:none;
  }

.card-img-overlay {
  position: relative;
  padding: 0; /* Remove the padding */
  border-radius:15px;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9));
  opacity: 0.8;
  padding: 0; /* Remove the padding */
  border-radius:15px;
}

.card-img-top{
  width: 100%;
  height:200px;
  object-fit: cover;
  border-radius:15px;

}


.container1 {
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
}

.container1::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

.horizontal-scroll {
  display: flex;
  flex-wrap: nowrap;
}

.icon {
  text-align: center;
  margin-right: 15px;
}

.icon img {
  width: 50px;
  height: 50px;
}

.name {
  margin-top: 5px;
}

.custom-div {
  height: 200px;
  border-radius:15px;
}
</style>
