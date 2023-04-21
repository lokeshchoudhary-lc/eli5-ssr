<div class="container-fluid mt-3 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h3 class="mb-2">Enter Company Profile Details</h3>
        <p class="mb-2 text-secondary small">Note: You can edit this in the future as well</p>
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control border border-primary bg-light" id="email" name="email" placeholder="ritikiitrbiotech@gmail.com" disabled>
              </div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" required>
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" name="username" required>
          </div>
          <div class="mb-3">
            <label for="logo" class="form-label">Logo Upload</label>
            <input type="file" class="form-control" id="logo" name="logo" accept=".png" required>
            <small class="text-muted">File must be in PNG format and under 1MB.</small>
          </div>
          <div class="mb-3">
            <label for="bio" class="form-label">Bio</label>
            <textarea class="form-control" id="bio" name="bio" rows="3" required></textarea>
          </div>
          <div class="mb-3">
            <label for="instagram" class="form-label">Instagram URL</label>
            <input type="url" class="form-control" id="instagram" name="instagram" placeholder="https://www.instagram.com/username">
          </div>
          <div class="mb-3">
            <label for="twitter" class="form-label">Twitter URL</label>
            <input type="url" class="form-control" id="twitter" name="twitter" placeholder="https://twitter.com/username">
          </div>
          <div class="mb-3">
            <label for="linkedin" class="form-label">LinkedIn URL</label>
            <input type="url" class="form-control" id="linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/username">
          </div>
          <div class="mb-3">
            <label for="facebook" class="form-label">Facebook URL</label>
            <input type="url" class="form-control" id="facebook" name="facebook" placeholder="https://www.facebook.com/username">
          </div>
          <div class="mb-3">
            <label for="youtube" class="form-label">YouTube URL</label>
            <input type="url" class="form-control" id="youtube" name="youtube" placeholder="https://www.youtube.com/channel/username">
          </div>
          <div class="mb-3">
            <label for="other" class="form-label">Other Links</label>
            <input type="url" class="form-control" id="other" name="other" placeholder="https://www.example.com">
          </div>
          <div class="d-grid pb-5">
            <button class="btn btn-success" type="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  