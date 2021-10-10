class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div id="footer-container">
           <div id="footer">
            <div class="footer-lists">
              <div class="footer-title"><h5>Quick Links</h5></div>
                <a href="https://github.com/hkeith62?tab=repositories" target="_blank">My GitHub Repositories</a>
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/ "target="_blank">Bellevue University (BU) Degree</a>
                <a href="https://www.youtube.com/c/bellevueuniversity">YouTube Channel</a>
                <a href="https://github.com/buwebdev" target="_blank">BU GitHub Repositories</a>
            </div>
            <div class="footer-lists">
              <div class="footer-title"><h5>Social Media</h5></div>
                <a href="https://www.linkedin.com/feed/?trk=onboarding-landing"target="_blank" >LinkedIn</a>
                <a href="https://www.facebook.com/home.php?ref=wizard" target="_blank">Facebook</a>
                <a href="https://twitter.com/home" target="_blank">Twitter</a>
                <a href="https://www.instagram.com/create/select/" target="_blank">Instagram</a>
            </div>
            <div class="footer-lists">
              <div class="footer-title"><h5 style="margin-left:45px">Comments</h5></div>

                  <div class="card-title"></div>
                  <div class="card-content" id="projects-container">
                  <div class="smart-wrap"style="height: 50x">
                  <div class="smart-forms smart-container wrap-3">


                      <form method="post" action="/" id="comment2">
                          <div class="form-body theme-blue">
                              <div class="section">
                                  <label>
                                      <textarea class="gui-textarea" id="comment" name="comment" placeholder="Enter Your Comments..."></textarea>
                                      <span class="field-icon"></span>
                                  </label>
                              </div><!-- end section -->
                          </div><!-- end .form-body section -->

                          <div class="form-footer">
                              <button type="submit" class="button btn-blue">Submit Comments</button>
                          </div><!-- end .form-footer section -->
                      </form>

                  </div><!-- end .smart-forms section -->
              </div><!-- end .smart-wrap section -->

              <div></div><!-- end section -->

                  </div>
			    </div>
            </div>
          </div>

        <div id="copy-right">
           <span>Copyright &copy; &nbsp; Terms &nbsp; Privacy</span>
        </div>
        `;
    }
}

customElements.define("footer-component", Footer);