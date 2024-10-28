const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

// Toggle the sidebar visibility
toggleBtn.addEventListener('click', (event) => {
    sidebar.classList.toggle('visible');
    event.stopPropagation(); // Prevent the click from triggering document event
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || toggleBtn.contains(event.target);
    
    if (!isClickInside) {
        sidebar.classList.remove('visible'); // Hide sidebar
    }
});
