AOS.init({
    once: true,
    offset: 100,
    duration: 800,
    easing: 'ease-in-out',
  });

  function showCV(nom, contenu) {
    document.getElementById('cvModalLabel').innerText = `CV de ${nom}`;
    document.getElementById('cvContent').innerText = contenu;
    var modal = new bootstrap.Modal(document.getElementById('cvModal'));
    modal.show();
  }

  window.onload = () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      loader.classList.add('hidden');
    }, 1000); // 1 seconde de délai
  };

  function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('input[type="email"]');
    const msg = document.getElementById('newsletterMsg');
    
    if (input.value) {
      msg.textContent = `Merci pour votre inscription, ${input.value} !`;
      msg.style.color = 'lightgreen';
      form.reset();
    } else {
      msg.textContent = 'Veuillez entrer un email valide.';
      msg.style.color = 'red';
    }
    return false;
  }