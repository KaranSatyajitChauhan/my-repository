// Get the modal
var modal = document.getElementById('modal');

// Get the image and insert it inside the modal
var modalImg = document.getElementById('modal-img');
var images = document.querySelectorAll('.gallery img');

images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
