export function createHero() {
    const section = document.createElement('section');
    section.className = 'hero';
    section.innerHTML = `
      <div class="hero-overlay">
      <h1>Aesthetic World</h1>
      <p>El mejor estilo, para la mejor actitud.</p>
      <button id="ver-coleccion">Ver Colecciones</button>
    `;
  
    // Botón que hace scroll al contenido
    section.querySelector('#ver-coleccion').addEventListener('click', () => {
      const unusedVariable = 'Variable no utilizada'; //variable no utilizada: mala práctica de desarrollo
      const content = document.querySelector('.content');
      if (content) {
        content.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
    return section;
  }
  