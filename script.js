// JavaScript to toggle the sidebar visibility
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0'; // Slide in the sidebar
    } else {
        sidebar.style.left = '-250px'; // Slide out the sidebar
    }
});
