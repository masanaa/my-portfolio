// Функция смены темы
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Светлая тема';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = 'Тёмная тема';
        localStorage.setItem('theme', 'light');
    }
}

// Загрузка сохранённой темы при загрузке страницы
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('themeToggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Светлая тема';
    }
}

// Плавная прокрутка для навигации
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Анимация появления элементов при скролле
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const animatedElements = document.querySelectorAll('section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Инициализация всех функций при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');

    // Инициализация смены темы
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Загрузка сохранённой темы
    loadSavedTheme();

    // Инициализация плавной прокрутки
    initSmoothScroll();

    // Инициализация анимаций
    initScrollAnimations();

    console.log('Портфолио успешно загружено!');
});

// Дополнительная функция для демонстрации
function showWelcomeMessage() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Доброе утро!';
    } else if (hours < 18) {
        greeting = 'Добрый день!';
    } else {
        greeting = 'Добрый вечер!';
    }

    console.log(`${greeting} Добро пожаловать в моё портфолио!`);
}

// Вызов приветственного сообщения
showWelcomeMessage();