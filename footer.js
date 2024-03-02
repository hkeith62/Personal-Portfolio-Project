class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div id="footer-container">
            <div id="footer">
            <div class="footer-list1">
              <div class="footer-title"><h5>Quick Links</h5></div>
                <a href="https://github.com/hkeith62?tab=repositories" target="_blank">My GitHub Repositories</a>
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/ "target="_blank">Bellevue University (BU) Degree</a>
                <a href="https://www.youtube.com/c/bellevueuniversity">YouTube Channel</a>
                <a href="https://github.com/buwebdev" target="_blank">BU GitHub Repositories</a>
            </div>
            <div class="footer-list3">
              <div class="footer-title3"><h5 style="margin-left:20px;padding-bottom:11px">Comments</h5></div>

                  <div class="card-title"></div>
                  <div class="card-content" id="projects-container">
                  <div class="smart-wrap"style="height: 50x">
                  <div class="smart-forms smart-container wrap-3">
                      <form method="post"   id="comment2">
                          <div class="form-body theme-blue">
                              <div class="section">
                                  <label>
                                      <textarea class="comment-textarea" id="comment" name="comment" placeholder="Enter Your Comments..."></textarea>
                                      <span class="field-icon"></span>
                                  </label>
                              </div><!-- end section -->
                          </div><!-- end .form-body section -->

                          <div class="form-footer">
                              <button type="submit" class="comment-btn"style="padding:12px">Submit Comments</button>
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
		</div>
        `;
		
    }
}

customElements.define("footer-component", Footer);