// Modal Functions for Client Interactivity
function openModal(packageName) {
    const modal = document.getElementById('deployModal');
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.innerText = `${packageName} Initialized`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('deployModal');
    modal.style.display = 'none';
}

// Close modal if user clicks outside content
window.onclick = function(event) {
    const modal = document.getElementById('deployModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Simple Contact form handler simulation
function handleForm(event) {
    event.preventDefault();
    alert('Transmission Received Successfully! We will connect with your terminal soon.');
    event.target.reset();
}