function openModal(username, emailId, userType, lastAccessedDate, contactNo) {
  var userDetails = document.getElementById("user-details");
  userDetails.innerHtml = `
    <p><strong>User Name:</strong> ${username}</p>
    <p><strong>Email ID:</strong> ${emailId}</p>
    <p><strong>User Type:</strong> ${userType}</p>
    <p><strong>Last Accessed Date:</strong> ${lastAccessedDate}</p>
    <p><strong>Contact No:</strong> ${contactNo}</p>
  `;

  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}