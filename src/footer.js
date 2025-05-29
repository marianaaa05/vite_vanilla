export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <p>&copy; 2025 Aesthetic World. Todos los derechos reservados.</p>
    `;
    return footer;
  }
  