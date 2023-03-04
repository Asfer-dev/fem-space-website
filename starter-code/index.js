const navToggle = document.querySelector('.nav-toggle');
const iconHamburger = document.querySelector('#icon-hamburger');
const iconClose = document.querySelector('#icon-close');
const topNav = document.querySelector('.top-nav');


navToggle.addEventListener('click', function() {
    topNav.toggleAttribute('data-visible');

    if (topNav.hasAttribute('data-visible')) {
        iconHamburger.setAttribute('data-visible', 'false');
        iconClose.setAttribute('data-visible', 'true');
    } else {
        iconHamburger.setAttribute('data-visible', 'true');
        iconClose.setAttribute('data-visible', 'false');
    }
});


// Destination Page
const btnPlanet = document.querySelectorAll('.btn-planet');
const planetDetails = document.querySelectorAll('.planet-details');
const imgPlanet = document.querySelector('#img-planet');

btnPlanet.forEach((btn) => {
    btn.addEventListener('click', function() {

        planetDetails.forEach((detail) => {
            detail.setAttribute('data-visible', 'false');
        });

        btnPlanet.forEach(btn => {
            btn.removeAttribute('data-active');
        });
        btn.setAttribute('data-active', 'true');

        const selectedDetail = document.querySelector('#details-' + btn.id);
        selectedDetail.setAttribute('data-visible', 'true');

        imgPlanet.src = `assets/destination/image-${btn.id}.png`;
    });
});