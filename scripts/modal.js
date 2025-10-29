// Управление модальными окнами для проектов
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');
    const projectDetailsBtns = document.querySelectorAll('.project-details');
    
    // Данные для модальных окон проектов
    const projectData = {
        1: {
            title: 'Личный сайт',
            description: 'Полностью адаптивный личный сайт, созданный с использованием HTML и CSS. Включает в себя главную страницу, портфолио и контактную форму.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            images: ['../assets/images/self_site_project.png'],
            liveLink: 'https://nemolucky.github.io/frontend-and-backend-practice/index.html',
            githubLink: 'https://github.com/nemolucky/frontend-and-backend-practice/blob/main/index.html'
        },
        2: {
            title: 'Новостной портал',
            description: 'Интерактивное приложение для управления задачами с возможностью добавления, удаления и отметки выполненных задач.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            images: ['../assets/images/news_site_project.png'],
            liveLink: 'https://nemolucky.github.io/frontend-and-backend-practice/pages/news.html',
            githubLink: 'https://github.com/nemolucky/frontend-and-backend-practice/blob/main/pages/news.html'
        },
        3: {
            title: 'Интернет-магазин',
            description: 'Полнофункциональный интернет-магазин с корзиной покупок, системой фильтрации и оформлением заказа.',
            technologies: ['React', 'JavaScript', 'CSS'],
            images: ['../assets/images/store_project.png'],
            liveLink: 'https://nemolucky.github.io/frontend-and-backend-practice/pages/goods.html',
            githubLink: 'https://github.com/nemolucky/frontend-and-backend-practice/blob/main/pages/goods.html'
        },
        4: {
            title: 'Портфолио',
            description: 'Адаптивное портфолио с использованием Bootstrap для быстрой разработки и отзывчивого дизайна.',
            technologies: ['Bootstrap', 'HTML', 'CSS'],
            images: ['../images/project4.jpg'],
            liveLink: '#',
            githubLink: '#'
        }
    };
    
    // Открытие модального окна при клике на кнопку "Подробнее"
    if (projectDetailsBtns.length > 0) {
        projectDetailsBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const project = projectData[projectId];
                
                if (project) {
                    document.getElementById('modal-body').innerHTML = `
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
                        <div class="project-technologies">
                            <strong>Технологии:</strong> ${project.technologies.join(', ')}
                        </div>
                        <div class="project-images">
                            ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.liveLink}" class="btn" target="_blank">Живая версия</a>
                            <a href="${project.githubLink}" class="btn" target="_blank">Исходный код</a>
                        </div>
                    `;
                    
                    modal.style.display = 'block';
                }
            });
        });
    }
    
    // Закрытие модального окна
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});