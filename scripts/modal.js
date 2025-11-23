document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectData = {
        1: {
            title: 'Личный сайт',
            description: 'Полностью адаптивный личный сайт, созданный с использованием HTML и CSS. Включает в себя главную страницу, портфолио и контактную форму. Проект демонстрирует навыки верстки и базовые принципы веб-дизайна.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            images: ['../assets/images/self_site_project.png'],
            liveLink: 'https://nemolucky.github.io/frontend-and-backend-practice/index.html',
            githubLink: 'https://github.com/nemolucky/frontend-and-backend-practice/blob/main/index.html'
        },
        2: {
            title: 'Новостной портал',
            description: 'Интерактивное приложение для управления новостями с возможностью добавления, удаления и фильтрации контента. Реализована работа с локальным хранилищем браузера.',
            technologies: ['JavaScript', 'HTML5', 'CSS3'],
            images: ['../assets/images/news_site_project.png'],
            liveLink: 'https://nemolucky.github.io/frontend-and-backend-practice/pages/news.html',
            githubLink: 'https://github.com/nemolucky/frontend-and-backend-practice/blob/main/pages/news.html'
        },
        3: {
            title: 'Интернет-магазин',
            description: 'Полнофункциональный интернет-магазин с корзиной покупок, системой фильтрации и оформлением заказа. Реализована работа с состоянием приложения и взаимодействие с API.',
            technologies: ['React', 'JavaScript', 'CSS Modules'],
            images: ['../assets/images/store_project.png'],
            liveLink: 'https://nemolucky.github.io/frontend-and-backend-practice/pages/goods.html',
            githubLink: 'https://github.com/nemolucky/frontend-and-backend-practice/blob/main/pages/goods.html'
        },
        4: {
            title: 'Портфолио',
            description: 'Адаптивное портфолио с использованием Bootstrap для быстрой разработки и отзывчивого дизайна. Включает галерею проектов, информацию о навыках и контактную форму.',
            technologies: ['Bootstrap 5', 'HTML5', 'CSS3'],
            images: ['../assets/images/portfolio_project.png'],
            liveLink: '#',
            githubLink: '#'
        }
    };
    
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            card.addEventListener('click', function(event) {
                if (event.target.tagName === 'A' || event.target.closest('a')) {
                    return;
                }
                
                const projectId = this.getAttribute('data-project');
                const project = projectData[projectId];
                
                if (project) {
                    document.getElementById('modal-body').innerHTML = `
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
                        
                        <div class="project-technologies">
                            <strong>Технологии:</strong>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                                ${project.technologies.map(tech => 
                                    `<span style="background: #4361ee; color: white; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="project-images">
                            <img src="${project.images[0]}" alt="${project.title}">
                        </div>
                        
                        <div class="project-links">
                            <a href="${project.liveLink}" class="btn" target="_blank" onclick="event.stopPropagation()">🌐 Живая версия</a>
                            <a href="${project.githubLink}" class="btn" target="_blank" onclick="event.stopPropagation()" style="background: linear-gradient(90deg, #6c757d, #495057);">💻 Исходный код</a>
                        </div>
                    `;
                    
                    modal.style.display = 'block';
                }
            });
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});