document.addEventListener('DOMContentLoaded', () => {
    const roomItems = document.querySelectorAll('#sidebar .room');
    const sky = document.getElementById('sky');
    const sidebar = document.getElementById('sidebar');
    const floorPlanContainer = document.getElementById('floor-plan-container');
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const toggleFloorPlanButton = document.getElementById('toggleFloorPlan');

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-400px'; // Slide out
        } else {
            sidebar.style.left = '0px'; // Slide in
            floorPlanContainer.style.left = '-600px'; // Ensure floor plan is closed
        }
    };

    // Function to toggle the floor plan visibility
    const toggleFloorPlan = () => {
        if (floorPlanContainer.style.left === '0px') {
            floorPlanContainer.style.left = '-600px'; // Slide out
        } else {
            floorPlanContainer.style.left = '0px'; // Slide in
            sidebar.style.left = '-400px'; // Ensure sidebar is closed
        }
    };

    // Add event listeners to toggle buttons
    toggleSidebarButton.addEventListener('click', toggleSidebar);
    toggleFloorPlanButton.addEventListener('click', toggleFloorPlan);

    // Add event listeners to sidebar items
    roomItems.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-src');
            fadeOut(sky, function() {
                sky.setAttribute('src', src);
                fadeIn(sky);
            });
        });
    });

    // Add event listeners to clickable areas
    const areas = document.querySelectorAll('.clickable-area');

    areas.forEach(area => {
        area.addEventListener('click', () => {
            const src = area.getAttribute('data-src');
            fadeOut(sky, function() {
                sky.setAttribute('src', src);
                fadeIn(sky);
            });
        });
    });
});

function fadeOut(element, callback) {
    element.setAttribute('animation__fadeout', {
        property: 'material.opacity',
        to: 0,
        dur: 1000,
        easing: 'easeInOutQuad',
        startEvents: 'fadeout'
    });
    element.emit('fadeout');
    setTimeout(callback, 1000);  // Match this duration with the animation duration
}

function fadeIn(element) {
    element.setAttribute('animation__fadein', {
        property: 'material.opacity',
        to: 1,
        dur: 1000,
        easing: 'easeInOutQuad',
        startEvents: 'fadein'
    });
    element.emit('fadein');
}
