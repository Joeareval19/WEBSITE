const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar visibility when the button is clicked
toggleBtn.addEventListener('click', (event) => {
    sidebar.classList.toggle('visible');
    event.stopPropagation(); // Prevent event bubbling to document
});

// Close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || toggleBtn.contains(event.target);
    
    if (!isClickInside) {
        sidebar.classList.remove('visible'); // Hide sidebar
    }
});
