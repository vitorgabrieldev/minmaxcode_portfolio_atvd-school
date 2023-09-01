const cookieBanner = document.getElementById('cookie-banner');
const aceitarCookieButton = document.getElementById('aceitar-cookie');
const recusarCookieButton = document.getElementById('recusar-cookie');

aceitarCookieButton.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
    Toastify({
        text: "Os Cookies foram aceitos!",
        className: "success",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
});

recusarCookieButton.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
    Toastify({
        text: "Os Cookies não foram aceitos!",
        className: "success",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
});