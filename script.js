
function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

fetch('footer.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('footer').innerHTML = html;
            })
            .catch(error => console.error('Error fetching content:', error));

document.addEventListener("DOMContentLoaded", function() {
        var imageUrls = [
            "alexander-grey-LrfEWoFq6S8-unsplash.jpg",
            "photo-1623428187969-5da2dcea5ebf.jpg",
            "miti-qYreP9QOdrk-unsplash.jpg",
            "jodie-morgan-v25z8P-CPB4-unsplash.jpg"
        ];
    
        preloadImages(imageUrls);
    
        function preloadImages(urls) {
            urls.forEach(function(url) {
                var img = new Image();
                img.src = url;
            });
        }
    });
