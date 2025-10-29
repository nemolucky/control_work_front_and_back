document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Убираем активный класс у всех кнопок
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем активный класс к нажатой кнопке
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Анимация скрытия
                projectCards.forEach(card => {
                    if (!(filterValue === 'all' || card.getAttribute('data-category') === filterValue)) {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                    }
                });
                
                // После анимации скрытия показываем нужные карточки
                setTimeout(() => {
                    projectCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'flex';
                            // Запускаем анимацию появления
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }, 300);
            });
        });
    }
});