
    // Function to generate the navigation links
    function generateNavigationLinks(data) {
        const navbarStart = document.querySelector(".navbar-start");

        data.forEach((str) => {
            const link = document.createElement("a");
            link.className = "navbar-item";
            link.href = `/character/${str.toLowerCase()}`;
            link.textContent = str;
            navbarStart.appendChild(link);
        });
    }
