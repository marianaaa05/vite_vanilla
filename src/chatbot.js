// export function createChatbot() {
//     const section = document.createElement('section');
//     section.className = 'chatbot';
//     section.innerHTML = `
//       <h2>Chatea ahora con Aesthetic Bot 😎🛍️</h2>
//       <div id="chat-box" class="chat-box"></div>
//       <form id="chat-form">
//         <input type="text" id="chat-input" placeholder="Pregúntame algo..." required />
//         <button type="submit">Enviar</button>
//       </form>
//     `;
  
//     // Obtener la clave API desde las variables de entorno
//     const API_KEY = import.meta.env.VITE_API_KEY;
  
//     const chatBox = section.querySelector('#chat-box');
//     const chatForm = section.querySelector('#chat-form');
//     const chatInput = section.querySelector('#chat-input');

//     appendMessage("Bot", "¡Hola! Soy Aesthetic Bot 😎🛍️ ¿En qué puedo ayudarte hoy?");
  
//     chatForm.addEventListener('submit', async (e) => {
//       e.preventDefault();

//       const userMessage = chatInput.value.trim();
      
//       if (!userMessage) return;
//       appendMessage("Tú", userMessage);
//       chatInput.value = "";
  
//       const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "deepseek/deepseek-r1:free",
//           messages: [
//             {
//               role: "system",
//               content: "Eres Aesthetic Bot, un vendedor amable, experto en moda urbana y asesor de estilo en la tienda Aesthetic World. Ayuda a los clientes a encontrar ropa, responder dudas sobre tallas, recomendaciones de estilo y más, con un tono amigable y profesional."
//             },
//             {
//               role: "user",
//               content: userMessage
//             }
//           ],
//         }),
//       });
  
//       const data = await response.json();
//       const reply = data.choices?.[0]?.message?.content || "Lo siento, hubo un error.";
//       appendMessage("Bot", reply);
//     });
  
//     function appendMessage(sender, message) {
//       const msg = document.createElement("p");
//       msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
//       chatBox.appendChild(msg);
//       chatBox.scrollTop = chatBox.scrollHeight;
//     }
  
//     return section;
//   }

//cambio de api key

export function createChatbot() {
  const section = document.createElement('section');
  section.className = 'chatbot';
  section.innerHTML = `
    <h2>Chatea ahora con Aesthetic Bot 😎🛍️</h2>
    <div id="chat-box" class="chat-box"></div>
    <form id="chat-form">
      <input type="text" id="chat-input" placeholder="Pregúntame algo..." required />
      <button type="submit">Enviar</button>
    </form>
  `;

  const API_KEY = import.meta.env.VITE_API_KEY;
  const REFERER = window.location.origin;

  const chatBox = section.querySelector('#chat-box');
  const chatForm = section.querySelector('#chat-form');
  const chatInput = section.querySelector('#chat-input');

//MENSAJE INICIAL DE BIENVENIDA
  appendMessage("Bot", "¡Hola! Soy Aesthetic Bot 😎🛍️ ¿En qué puedo ayudarte hoy?");

  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    appendMessage("Tú", userMessage);
    chatInput.value = "";

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "HTTP-Referer": REFERER,
        },
        body: JSON.stringify({
          model: "mistralai/devstral-small:free",
          messages: [
            {
              role: "system",
              content: "Eres Aesthetic Bot, un vendedor amable, experto en moda urbana y asesor de estilo en la tienda Aesthetic World. Ayuda a los clientes a encontrar ropa, responder dudas sobre tallas, recomendaciones de estilo y más, con un tono amigable y profesional."
            },
            {
              role: "user",
              content: userMessage
            }
          ],
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "Lo siento, hubo un error.";
      appendMessage("Bot", reply);

    } catch (error) {
      appendMessage("Bot", "Ocurrió un error al conectarme con el servidor.");
      console.error(error);
    }
  });

  function appendMessage(sender, message) {
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  return section;
}
