document.addEventListener("DOMContentLoaded", function() {
    fetch('components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.sidebar-container').innerHTML = data;
        });
});
