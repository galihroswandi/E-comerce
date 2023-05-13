
export default onscroll = () => {
    const nav = document.querySelector("nav");
    const navMenu = document.querySelector("#nav-menu");

    if (nav) {
        const fix_nav = nav.offsetTop;

        if (window.pageYOffset > fix_nav) {
            nav.classList.add("navbar-fixed");
        } else {
            if (navMenu.classList.contains("hidden")) {
                nav.classList.remove("navbar-fixed");
            }
        }
    }
}

export const showDropdown = () => {
    const target = document.getElementById("dropdown-target");
    target.classList.add("active");
    target.style.opacity = "1";
    target.style.display = "flex";
    target.style.transform = "scale(1)";
    target.style.transform = "translateY(0)";
    target.style.transform = "translateX(0)";
    target.style.transition = "all 2s ease";
}

export const hideDropdown = () => {
    const target = document.getElementById("dropdown-target");
    target.classList.add("active");
    target.style.opacity = "0";
    target.style.display = "none";
    target.style.transform = "scale(.5)";
    target.style.transform = "translateY(-2.5rem)";
    target.style.transform = "translateX(2.5rem)";
    target.style.transition = "all 2s ease";
}

export const handleLogout = async () => {
    const res = await logout();
    !res.status
        ? Swal.fire({
            icon: "error",
            title: "Oops",
            text: "Internal Server Error",
        })
        : window.location.reload();
};