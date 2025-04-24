import { createHero } from '/src/hero.js';
import { createContent } from '/src/content.js';
import { createFooter } from '/src/footer.js';
import { createChatbot } from './chatbot.js';

// document.body.appendChild(createChatbot());


const app = document.getElementById('app');

app.appendChild(createHero());
app.appendChild(createContent());
app.appendChild(createChatbot());
app.appendChild(createFooter());

// Animaciones al hacer scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in-section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('fade-in');
    }
  });
});

