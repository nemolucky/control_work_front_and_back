// Основной скрипт для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    // Общие функции для всех страниц
    
    // Подсветка активной ссылки в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '../index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Добавление записи в дневник (если страница diary.html)
    const addEntryBtn = document.getElementById('add-entry');
    if (addEntryBtn) {
        addEntryBtn.addEventListener('click', function() {
            const newEntry = prompt('Введите новую запись для дневника:');
            if (newEntry) {
                const timeline = document.querySelector('.timeline');
                const newItem = document.createElement('div');
                newItem.className = 'timeline-item in-progress';
                newItem.innerHTML = `
                    <span class="date">${new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</span>
                    <span class="task">${newEntry}</span>
                    <span class="status">in progress</span>
                `;
                timeline.prepend(newItem);
            }
        });
    }
});