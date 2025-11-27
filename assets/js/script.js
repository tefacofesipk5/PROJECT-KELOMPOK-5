document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch('assets/components/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-container').innerHTML = data);

    // Load Footer
    fetch('assets/components/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-container').innerHTML = data);
});