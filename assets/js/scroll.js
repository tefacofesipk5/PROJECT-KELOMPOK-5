<script>
    document.addEventListener("scroll", function() {
    const hero = document.querySelector(".hero-animate");
    const position = hero.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
    hero.classList.add("show");
    }
    });
</script>