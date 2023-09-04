const cookieBanner = document.getElementById('cookie-banner');
const aceitarCookieButton = document.getElementById('aceitar-cookie');
const recusarCookieButton = document.getElementById('recusar-cookie');

if (Cookies.get('cookieAccepted') == 'true') {
  document.getElementById('cookie-banner').classList.add("hidden");
}

aceitarCookieButton.addEventListener('click', () => {
  Cookies.set('cookieAccepted', 'true', { expires: 1 });
  cookieBanner.style.display = 'none';
});

recusarCookieButton.addEventListener('click', () => {
  Cookies.set('cookieAccepted', 'false', { expires: 1 });
  cookieBanner.style.display = 'none';
});