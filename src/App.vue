<template>
  <div id="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">Артëм Ермолов</div>
          <nav class="nav">
            <a href="#about">О себе</a>
            <a href="#experience">Опыт</a>
            <a href="#education">Образование</a>
            <a href="#skills">Навыки</a>
            <a href="#contact">Контакты</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Ермолов Артëм Артурович</h1>
          <div class="subtitle">Python Developer</div>
          <div class="description">
            Разработчик с опытом более 6 лет. Специализируюсь на создании ботов, парсинге данных и backend-разработке.
          </div>
          <div class="contact-buttons">
            <a href="#contact" class="btn btn-primary">Связаться</a>
            <a href="mailto:vip.bam444@mail.ru" class="btn btn-secondary">Написать на email</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">О себе</h2>
        <div class="about-content">
          <p>
            Студент 4-го курса <span class="highlight">ТУСУР</span> (факультет вычислительных систем), программирую более 6 лет.
            За плечами — коммерческий опыт на фрилансе (профиль на Kwork), где занимаюсь разработкой 
            Telegram/Discord ботов, парсингом данных, созданием бэкенда на Flask и FastAPI.
          </p>
          <p>
            <strong>Ключевые компетенции:</strong>
          </p>
          <p>
            • <span class="highlight">Backend:</span> Python (Flask, FastAPI, Celery), SQLAlchemy, PostgreSQL, Redis, MySQL.<br>
            • <span class="highlight">Парсинг:</span> requests, BeautifulSoup, Selenium, многопоточность/мультипроцессинг.<br>
            • <span class="highlight">Боты:</span> Telethon, aiogram, python-telegram-bot, discord.py.<br>
            • <span class="highlight">Дополнительно:</span> JavaScript (jQuery, DOM), C#, GDScript (Godot).
          </p>
          <p>
            Люблю разбираться в сложных интеграциях и находить неочевидные причины расхождений в данных 
            (кейсы с дублями, таймзонами, некорректной склейкой). Нацелен на результат, умею самостоятельно 
            ставить задачи и доводить проекты до релиза.
          </p>
          <p>
            <strong>Готов к переезду</strong> и <strong>командировкам</strong>. Предпочитаю <strong>удалённый формат работы</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title">Опыт работы</h2>
        <div class="experience-list">
          <div class="experience-item">
            <div class="experience-header">
              <div>
                <div class="experience-title">Python Developer</div>
                <div class="experience-company">108bit</div>
              </div>
              <div class="experience-period">Январь 2022 — Август 2023<br>(1 год 8 месяцев)</div>
            </div>
            <div class="experience-description">
              Разработка VK и Telegram ботов, парсеров, работа с PostgreSQL, MongoDB, aiogram, Flask, requests, pandas, ClickHouse.
            </div>
            <div class="tech-stack">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">Flask</span>
              <span class="tech-tag">aiogram</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">ClickHouse</span>
              <span class="tech-tag">requests</span>
              <span class="tech-tag">pandas</span>
            </div>
          </div>

          <div class="experience-item">
            <div class="experience-header">
              <div>
                <div class="experience-title">Web Developer</div>
                <div class="experience-company">Tehnokrat</div>
              </div>
              <div class="experience-period">Февраль 2018 — Июль 2019<br>(1 год 6 месяцев)</div>
            </div>
            <div class="experience-description">
              Создание сайтов, парсеров и Telegram-ботов.
            </div>
            <div class="tech-stack">
              <span class="tech-tag">HTML</span>
              <span class="tech-tag">CSS</span>
              <span class="tech-tag">Bootstrap</span>
              <span class="tech-tag">PHP</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">aiogram</span>
              <span class="tech-tag">telethon</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title">Образование</h2>
        <div class="education-item">
          <div class="education-title">Неоконченное высшее</div>
          <div class="education-university">Томский государственный университет систем управления и радиоэлектроники (ТУСУР)</div>
          <div class="education-details">
            <strong>Факультет:</strong> Вычислительных систем<br>
            <strong>Специальность:</strong> Информационная безопасность телекоммуникационных систем (специалист по защите информации)<br>
            <strong>Ожидаемое окончание:</strong> 2028 год
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">Навыки</h2>
        <div class="skills-grid">
          <div class="skills-category">
            <h3>Backend</h3>
            <div class="skills-list">
              <span class="skill-item">Python</span>
              <span class="skill-item">Flask</span>
              <span class="skill-item">FastAPI</span>
              <span class="skill-item">Celery</span>
              <span class="skill-item">SQLAlchemy</span>
              <span class="skill-item">REST API</span>
            </div>
          </div>

          <div class="skills-category">
            <h3>Базы данных</h3>
            <div class="skills-list">
              <span class="skill-item">PostgreSQL</span>
              <span class="skill-item">MySQL</span>
              <span class="skill-item">MongoDB</span>
              <span class="skill-item">Redis</span>
              <span class="skill-item">ClickHouse</span>
              <span class="skill-item">NoSQL</span>
              <span class="skill-item">SQL</span>
            </div>
          </div>

          <div class="skills-category">
            <h3>Парсинг и автоматизация</h3>
            <div class="skills-list">
              <span class="skill-item">requests</span>
              <span class="skill-item">BeautifulSoup</span>
              <span class="skill-item">Selenium</span>
              <span class="skill-item">pandas</span>
              <span class="skill-item">Многопоточность</span>
              <span class="skill-item">Асинхронное программирование</span>
            </div>
          </div>

          <div class="skills-category">
            <h3>Боты</h3>
            <div class="skills-list">
              <span class="skill-item">aiogram</span>
              <span class="skill-item">Telethon</span>
              <span class="skill-item">python-telegram-bot</span>
              <span class="skill-item">discord.py</span>
              <span class="skill-item">Telegram</span>
            </div>
          </div>

          <div class="skills-category">
            <h3>Frontend</h3>
            <div class="skills-list">
              <span class="skill-item">HTML5</span>
              <span class="skill-item">CSS3</span>
              <span class="skill-item">Bootstrap</span>
              <span class="skill-item">JavaScript</span>
              <span class="skill-item">jQuery</span>
              <span class="skill-item">Ajax</span>
            </div>
          </div>

          <div class="skills-category">
            <h3>Инструменты и практики</h3>
            <div class="skills-list">
              <span class="skill-item">Git</span>
              <span class="skill-item">Docker</span>
              <span class="skill-item">Linux</span>
              <span class="skill-item">API</span>
              <span class="skill-item">PEP-8</span>
              <span class="skill-item">SOLID</span>
              <span class="skill-item">ООП</span>
              <span class="skill-item">Системное программирование</span>
            </div>
          </div>

          <div class="skills-category">
            <h3>Языки</h3>
            <div class="skills-list">
              <span class="skill-item">Русский (родной)</span>
              <span class="skill-item">Английский (A2)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title" style="color: white;">Контакты</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <a href="mailto:vip.bam444@mail.ru">vip.bam444@mail.ru</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <a href="tel:+79937412239">+7 (993) 741-22-39</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>Томск, Россия</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">💰</span>
              <span>Желаемая зарплата: 80 000 ₽ на руки</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>Резюме обновлено 14 февраля 2026</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Плавная прокрутка для всех якорных ссылок
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Пропускаем пустые якоря
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}
</script>

<style scoped>
/* Smooth scroll styles moved to global style.css */
</style>
