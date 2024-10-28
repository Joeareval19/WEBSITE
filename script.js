const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

// Toggle the 'visible' class on click
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});
