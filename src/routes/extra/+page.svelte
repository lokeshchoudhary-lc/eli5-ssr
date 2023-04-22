<div class="container" style="height: 500px; width: 100%;">
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="image1.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Caption for image 1</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="image2.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Caption for image 2</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="image3.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Caption for image 3</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>
  var swiper = new Swiper('.container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    mousewheel: true,
    grabCursor: true
  });
</script>