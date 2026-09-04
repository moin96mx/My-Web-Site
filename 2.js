// Live Preview Update Function
function updatePortfolio() {
    // Get values from input controls
    const name = document.getElementById('inputName').value;
    const title = document.getElementById('inputTitle').value;
    const imgUrl = document.getElementById('inputImg').value;
    const bio = document.getElementById('inputBio').value;
    const contactLink = document.getElementById('inputContact').value;

    // Apply values to live preview elements
    document.getElementById('previewName').innerText = name || "Client Name";
    document.getElementById('previewTitle').innerText = title || "Professional Title";
    document.getElementById('previewBio').innerText = bio || "Enter bio description...";
    
    // Update image safely
    if(imgUrl.trim() !== "") {
        document.getElementById('previewImg').src = imgUrl;
    }

    // Update link
    document.getElementById('previewBtn').href = contactLink || "#";
}