 // Function to create modal content dynamically based on type
 function openModal(modalType, modalData) {
    var modal = document.getElementById('genericModal');
    var modalBody = document.getElementById('modalBody');

    modal.style.display = "block"; // Show modal

    // Clear previous content
    modalBody.innerHTML = '';

    // Create content based on type
    if (modalType === 'image') {
        var img = document.createElement('img');
        img.src = modalData;
        img.style.maxWidth = '100%';
        modalBody.appendChild(img);
    } else if (modalType === 'text') {
        var p = document.createElement('p');
        p.textContent = modalData;
        modalBody.appendChild(p);
    } else if (modalType === 'video') {
        var video = document.createElement('video');
        video.src = modalData;
        video.controls = true;
        video.style.maxWidth = '100%';
        modalBody.appendChild(video);
    } else if (modalType === 'youtube') {
        var iframe = document.createElement('iframe');
        iframe.src = modalData;
        iframe.width = "560";
        iframe.height = "315";
        iframe.allowFullscreen = true;
        modalBody.appendChild(iframe);
    } else if (modalType === 'link') {
        var a = document.createElement('a');
        a.href = modalData;
        a.textContent = "Click here";
        a.target = "_blank";
        modalBody.appendChild(a);
    } else if (modalType === 'audio') {
        var audio = document.createElement('audio');
        audio.src = modalData;
        audio.controls = true;
        modalBody.appendChild(audio);
    }
}

// Get all the elements with class="highlight"
var highlights = document.querySelectorAll('.highlight');

highlights.forEach(function(item) {
    item.addEventListener('click', function() {
        var modalType = this.getAttribute('data-type');
        var modalData = modalType === 'text' ? this.getAttribute('data-content') : this.getAttribute('data-src') || this.getAttribute('data-href');
        openModal(modalType, modalData);
    });
});

// Close modal functionality
var modal = document.getElementById('genericModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}