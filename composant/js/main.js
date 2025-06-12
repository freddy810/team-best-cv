AOS.init();

    // Masquer le loader après chargement
    window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    });

    function subscribeNewsletter(event) {
      event.preventDefault();
      document.getElementById("newsletterMsg").textContent = "Merci pour votre inscription !";
      return false;
    }