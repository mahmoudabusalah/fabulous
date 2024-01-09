
// ============ Search Icon ============
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('searchIcon');
    const searchBar = document.getElementById('searchBar');

    searchIcon.addEventListener('click', function () {
        searchBar.classList.toggle('active');
    });
});


