document.addEventListener('DOMContentLoaded', () => {
    fetchMenuItems();
    handlePreOrder();
    handleFeedback();
    handleWasteTracking();
});

const fetchMenuItems = async () => {
    // Simulate an API call to fetch menu items
    const menuItems = [
        { id: 1, name: 'Aloo Paratha', image: 'https://source.unsplash.com/100x100/?paratha', price: 50, time: 'Breakfast' },
        { id: 2, name: 'Masala Dosa', image: 'https://source.unsplash.com/100x100/?dosa', price: 40, time: 'Breakfast' },
        { id: 3, name: 'Chole Bhature', image: 'https://source.unsplash.com/100x100/?chole-bhature', price: 70, time: 'Lunch' },
        { id: 4, name: 'Dal Makhani', image: 'https://source.unsplash.com/100x100/?dal', price: 60, time: 'Lunch' },
        { id: 5, name: 'Butter Chicken', image: 'https://source.unsplash.com/100x100/?butter-chicken', price: 150, time: 'Lunch' },
        { id: 6, name: 'Paneer Tikka', image: 'https://source.unsplash.com/100x100/?paneer', price: 120, time: 'Dinner' },
        { id: 7, name: 'Biryani', image: 'https://source.unsplash.com/100x100/?biryani', price: 180, time: 'Dinner' },
        { id: 8, name: 'Samosa', image: 'https://source.unsplash.com/100x100/?samosa', price: 20, time: 'Evening Snacks' },
        { id: 9, name: 'Pav Bhaji', image: 'https://source.unsplash.com/100x100/?pav-bhaji', price: 50, time: 'Evening Snacks' },
        { id: 10, name: 'Pani Puri', image: 'https://source.unsplash.com/100x100/?pani-puri', price: 30, time: 'Evening Snacks' },
        // Add more menu items as needed...
    ];

    const menuContainer = document.getElementById('menu-items');
    const mealSelect = document.getElementById('meal-select');
    
    // Group items by time
    const groupedMenu = menuItems.reduce((acc, item) => {
        if (!acc[item.time]) acc[item.time] = [];
        acc[item.time].push(item);
        return acc;
    }, {});

    for (const time in groupedMenu) {
        const timeSection = document.createElement('div');
        timeSection.innerHTML = `<h3>${time}</h3>`;

        groupedMenu[time].forEach(item => {
            // Add menu items to the page
            const div = document.createElement('div');
            div.classList.add('menu-item');
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
            `;
            timeSection.appendChild(div);

            // Add item to pre-order dropdown
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            mealSelect.appendChild(option);
        });

        menuContainer.appendChild(timeSection);
    }
};

const handlePreOrder = () => {
    const preOrderForm = document.getElementById('pre-order-form');
    
    preOrderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const mealId = document.getElementById('meal-select').value;
        const quantity = document.getElementById('quantity').value;

        // Submit pre-order to the backend
        alert(`Pre-ordered meal ID: ${mealId} with quantity: ${quantity}`);
    });
};

const handleFeedback = () => {
    const feedbackForm = document.getElementById('feedback-form');
    
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const feedbackText = document.getElementById('feedback-text').value;

        // Submit feedback to the backend
        alert(`Feedback submitted: ${feedbackText}`);
    });
};

const handleWasteTracking = () => {
    const wasteForm = document.getElementById('waste-form');
    
    wasteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const itemName = document.getElementById('waste-item').value;
        const quantity = document.getElementById('waste-quantity').value;

        // Submit waste report to the backend
        alert(`Reported waste: ${itemName} with quantity: ${quantity}`);
    });
};
