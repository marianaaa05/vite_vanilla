//BIEN
// export function createContent() {
//     const section = document.createElement('section');
//     section.className = 'collections';
  
//     section.innerHTML = `
//       <h2 class="title">Nuestras Colecciones</h2>
//       <p class="subtitle">Explora las últimas tendencias en ropa aesthetic. Desde camisetas oversize hasta accesorios exclusivos.</p>
      
//       <div class="grid">
//         <div class="card">
//           <img src= "/camisetas_oversize.jpg" alt="Camiseta Oversize" />
//           <h3>Camisetas Oversize</h3>
//           <p>34.000 COP</p>
//         </div>
//         <div class="card">
//           <img src="/chaquetas_vintage.jpg" alt="Chaqueta Urbana" />
//           <h3>Chaquetas Vintage</h3>
//           <p>74.000 COP</p>
//         </div>
//         <div class="card">
//           <img src="/accesorios.jpg" alt="Accesorios" />
//           <h3>Accesorios </h3>
//           <p>15.000 COP</p>
//         </div>
//       </div>
//     `;
  
//     return section;
//   }


//MAL
export function createContent() {
  const section = document.createElement('section');
  section.className = 'collections';

  // Usamos innerHTML innecesariamente (aunque funcionalmente correcto)
  section.innerHTML = `
    <h2 class="title">Nuestras Colecciones</h2>
    <p class="subtitle">Explora las últimas tendencias en ropa aesthetic.</p>
    <p></p> <!-- etiqueta vacía innecesaria -->

    <div class="grid">
        <div class="card">
          <img src= "/camisetas_oversize.jpg" alt="Camiseta Oversize" />
          <h3>Camisetas Oversize</h3>
          <p>34.000 COP</p>
        </div>
        <div class="card">
          <img src="/chaquetas_vintage.jpg" alt="Chaqueta Urbana" />
          <h3>Chaquetas Vintage</h3>
          <p>74.000 COP</p>
        </div>
        <div class="card">
          <img src="/accesorios.jpg" alt="Accesorios" />
          <h3>Accesorios </h3>
          <p>15.000 COP</p>
        </div>
      </div>
  `;

  return section;
}

  