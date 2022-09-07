class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind();
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    animateLinks() {
        this.navLinks.forEach((link) =>{
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handClick);
    }
    init(){
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();