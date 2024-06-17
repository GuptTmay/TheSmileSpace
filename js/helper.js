function updateNavbar() {
  let div = document.getElementById("nav-bar__links");
  const width = window.innerWidth;
  console.log(width);
  console.log(div.innerHTML);

  if (width <= 920) {
    div.innerHTML = `
            <div id='nav-bar__menu-button' onClick="handleOpenMenu()">
            <img 
                class='menu-bar-button'
                src="images/open-menu.png"
                height="45"
            />
            </div>
        `;
  }
}

let isMenuOpen = false;
function handleOpenMenu() {
  let div = document.getElementById("nav-bar__links");
  
  if (isMenuOpen === false) {
    isMenuOpen = true;

    div.innerHTML = `
     <div id='nav-bar__menu-button' onClick="handleOpenMenu()">
        <img 
            class='menu-bar-button'
            src="images/close-menu.png"
            height="45"
        />
          
        <div class='nav-bar-menu-box'>
          <a href="#home">
            <img
              class="home"
              src="images/home.png"
              alt="HOME"
              width="45"
              height="12"
              title="HOME"
            />
          </a>

          <a href="#services">
            <img
              class="services"
              src="images/services.png"
              alt="SERVICES"
              width="68"
              height="12"
              title="SERVICES"
            />
          </a>

          <a href="#doctors">
            <img
                class="doctors"
                src="images/doctors.png"
                alt="DOCTORS"
                width="71"
                height="12"
                title="DOCTORS"
              />
          </a>

          <a href="#team">
            <img
              class="team"
              src="images/team.png"
              alt="TEAM"
              width="41"
              height="12"
              title="TEAM"
            />
          </a>
        
          <a href="#contact_us">
            <img
              class="text-4"
              src="images/contact_us.png"
              alt="CONTACT US"
              width="95"
              height="12"
              title="CONTACT US"
            />
          </a>

          <a href="#appointment">
            <img
              class="text-5"
              src="images/make_appointment.png"
              alt="MAKE APPOINTMENT"
              width="157"
              height="12"
              title="MAKE APPOINTMENT"
            />
          </a>
          </div>
        </div>
        `;
  } else {
        isMenuOpen = false;
        div.innerHTML = `
                <div id='nav-bar__menu-button' onClick="handleOpenMenu()">
                <img 
                    class='menu-bar-button'
                    src="images/open-menu.png"
                    height="45"
                />
                </div>
            `;
  }
}

// Initial call to set the content based on the current width
updateNavbar();

// Update content on window resize
window.addEventListener("resize", updateNavbar);
