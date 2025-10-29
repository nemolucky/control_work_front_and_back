// Валидация формы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');
            
            let isValid = true;
            
            // Валидация имени
            if (name.value.trim() === '') {
                nameError.textContent = 'Пожалуйста, введите ваше имя';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Валидация email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'Пожалуйста, введите ваш email';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                emailError.textContent = 'Пожалуйста, введите корректный email';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Валидация сообщения
            if (message.value.trim() === '') {
                messageError.textContent = 'Пожалуйста, введите ваше сообщение';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            // Если форма валидна, можно отправить данные
            if (isValid) {
                alert('Сообщение успешно отправлено!');
                contactForm.reset();
            }
        });
    }
});