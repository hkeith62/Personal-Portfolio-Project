class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
   <nav>
    <div class="navbar">
      <i class='bx bx-menu'></i>
      <div class="logo" style="background-color:#094514;width:60px;height:41px;color:#69F483">KH</div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name"style="background-color:#094514; width:60px;height:41px;color:#69F483">KH</span>
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links">
          <li><a href="index.html">HOME</a></li>
          <li>
              <a href="#">PROJECTS</a>
              <i class='bx bxs-chevron-down htmlcss-arrow arrow'></i>
              <ul class="htmlCss-sub-menu sub-menu">
                  <li class="more">
                      <span><a href="#">Cybersecurity<i class='bx bxs-chevron-right arrow more-arrow'></i></a></span>
                          <ul class="more-sub-menu sub-menu">
                              <li><a href="documentation.html">Security Documents</a></li>
                              <li><a href="reports.html">Reports</a></li>
                              <li><a href="research.html">Research</a></li>
                              <li><a href="projects.html">Projects</a></li>
                          </ul>
                  <li class="more">
                     <span><a href="#">Web Application<i class='bx bxs-chevron-right arrow more-arrow'></i></a></span>
                         <ul class="more-sub-menu sub-menu">
                             <li><a href="development.html">Front-end Development</a></li>
                             <li><a href="database-diagrams.html">NoSQL Database</a></li>
                             <li><a href="unit-tests.html">Api Unit Tests</a></li>
                          </ul>
                            <li class="more">
                     <span><a href="devops.html">DevOps</a></span>
                 </li>
             </ul>
          </li>
          <li><a href="about.html">ABOUT</a></li>
		  <li><a href="mailto:hkeith62@gmail.com">CONTACT</a></li>
		  <li><a href="resume.html">RESUME</a></li>
        </ul>
         
		
      </div>
      <div class="search-box">
        <i class='bx bx'></i>
      </div>
    </div>
  </nav>`
        ;
    }
}
customElements.define("header-component", Header);