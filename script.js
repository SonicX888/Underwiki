document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".redirect-button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            Swal.fire({
                title: "Confirmez-vous ?",
                text: "Vous allez être redirigé vers une autre page.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Oui, continuer",
                cancelButtonText: "Annuler"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        "Accepté !",
                        "Vous allez être redirigé dans quelques secondes.",
                        "success"
                    );
                    var url = button.getAttribute("data-url");
                    if (url) {
                        setTimeout(() => {
                            window.location.href = url;
                        }, 2000);
                    }
                } else {
                    Swal.fire(
                        "Annulé",
                        "Vous avez choisi de rester sur cette page.",
                        "error"
                    );
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.createElement("button");
    themeToggleButton.className = "theme-toggle";
    document.body.appendChild(themeToggleButton);

    const currentTheme = localStorage.getItem("theme") || "light-mode";
    document.body.classList.add(currentTheme);
    updateButtonText(currentTheme);

    themeToggleButton.addEventListener("click", function () {
        const isDarkMode = document.body.classList.contains("dark-mode");

        document.body.classList.toggle("dark-mode", !isDarkMode);
        document.body.classList.toggle("light-mode", isDarkMode);

        const newTheme = isDarkMode ? "light-mode" : "dark-mode";
        localStorage.setItem("theme", newTheme);

        updateButtonText(newTheme);
    });

    function updateButtonText(theme) {
        themeToggleButton.textContent = theme === "dark-mode" ? "Mode Clair" : "Mode Sombre";
    }
});
