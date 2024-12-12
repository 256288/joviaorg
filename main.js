// Parallax Scrolling Effect for the Hero Section
window.addEventListener('scroll', function () {
    const scrollPos = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = `${scrollPos * 0.5}px`;
});

console.log("Netguard Forensics Agency - Advanced website loaded.");

// Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Service Details Modal
const serviceDetails = {
    service1: `<h2>Data Recovery</h2><p>We use advanced tools to recover lost data from any digital device...</p>`,
    service2: `<h2>Cybersecurity Consulting</h2><p>Protect your systems from cyber threats with our expert consulting...</p>`,
    service3: `<h2>Forensic Investigation</h2><p>Our team conducts thorough investigations to retrieve critical evidence...</p>`
};

function showServiceDetails(service) {
    document.getElementById('service-details').innerHTML = serviceDetails[service];
    document.getElementById('service-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('service-modal').style.display = 'none';
}

// Google Maps Integration
function initMap() {
    const location = { lat: -1.286389, lng: 36.817223 }; // Coordinates for Nairobi, Kenya
    const map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 14,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
});
