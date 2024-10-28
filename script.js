const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar visibility
toggleBtn.addEventListener('click', () => {
    if (sidebar.style.left === '-18%' || sidebar.style.left === '') {
        sidebar.style.left = '0'; // Slide in the sidebar
    } else {
        sidebar.style.left = '-18%'; // Slide out the sidebar
    }
});
