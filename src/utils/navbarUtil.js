import logout from "../services/logout";

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