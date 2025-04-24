export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <p>&copy; 2025 Streetwear Store. Todos los derechos reservados.</p>
    `;
    return footer;
  }
  