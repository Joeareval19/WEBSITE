// JavaScript to toggle the sidebar visibility
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

// Add event listener to the toggle button
toggleBtn.addEventListener('click', () => {
    // Check the sidebar's current position and toggle it
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0'; // Slide in the sidebar
    } else {
        sidebar.style.left = '-250px'; // Slide out the sidebar
    }
});
