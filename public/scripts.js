function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const blogPosts = document.querySelectorAll('.blog-post');
    const footer = document.querySelector('footer');

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    navbar.classList.toggle('dark-mode');
    navbar.classList.toggle('light-mode');

    footer.classList.toggle('dark-mode');
    footer.classList.toggle('light-mode');

    blogPosts.forEach(post => {
        post.classList.toggle('dark-mode');
        post.classList.toggle('light-mode');
    });

    const icon = document.querySelector('.dark-mode-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

function filterPosts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');

    posts.forEach(post => {
        const title = post.getAttribute('data-title');
        const content = post.getAttribute('data-content');

        if (title.includes(searchInput) || content.includes(searchInput)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}
