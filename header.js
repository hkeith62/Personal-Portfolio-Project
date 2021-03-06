class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div id="header">
            <span id="logo" style="background-color:#094514; width:60px; height:41px; margin-left:60px; color:#69F483">KH</span>
 		      <div class="the-hamburger"><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars fa-lg"></i></a></div>
                <ul class="nav-container ">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="projects.html">Projects</a></li>
                  <li><a href="database-diagrams.html">Database Diagrams</a></li>
                  <li><a href="unit-tests.html">API Unit Tests</a></li>
				          <li><a href="devops.html">DevOps Presentations</a></li>
                  <li><a href="resume.html">Resume</a></li>
                  <li><a href="about.html">About</a></li>
               </ul>
          </div>`
        ;
    }
}
customElements.define("header-component", Header);