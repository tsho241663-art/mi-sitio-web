// --- Cambiar imagen ---
const imagen = document.getElementById('imagenCambio');
if (imagen) {
  imagen.addEventListener('mouseover', () => {
    imagen.src = 'assets/personaSaludable.png'; // imagen persona en buen estado físico
  });
  imagen.addEventListener('mouseout', () => {
    imagen.src = 'assets/personaSobrepeso.png';
  });
}

// --- Calcular IMC ---
const formIMC = document.getElementById('formIMC');
if (formIMC) {
  formIMC.addEventListener('submit', (e) => {
    e.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultadoIMC');

    let estado = "";
    if (imc < 18.5) estado = "Bajo peso";
    else if (imc < 24.9) estado = "Normal";
    else if (imc < 29.9) estado = "Sobrepeso";
    else estado = "Obesidad";

    resultado.textContent = `Tu IMC es ${imc.toFixed(2)} - Estado: ${estado}`;
  });
}

// --- Lista de metas ---
function agregarMeta() {
  const meta = document.getElementById('nuevaMeta').value.trim();
  if (meta === "") return;

  const lista = document.getElementById('listaMetas');
  const item = document.createElement('li');
  item.textContent = meta;

  // eliminar al hacer click
  item.addEventListener('click', () => {
    lista.removeChild(item);
  });

  lista.appendChild(item);
  document.getElementById('nuevaMeta').value = "";
}

// --- Reto de ejercicio aleatorio ---
function retoEjercicio() {
  const retos = [
    "Haz 10 lagartijas ",
    "Corre 15 minutos ",
    "Haz 20 abdominales ",
    "Haz plancha 30 segundos ",
    "Haz 15 sentadillas ",
    "Camina por 10 minutos ",
    "Toma un vaso de agua ",
    "Haz 10 saltos con cuerda ",
    "Haz 10 burpees ",
    "Haz estiramientos durante 5 minuto "
  ];

  const numeroAleatorio = Math.floor(Math.random() * 10); // 0 a 9
  const mensaje = document.getElementById('mensajeReto');
  mensaje.textContent = retos[numeroAleatorio];
}

// --- Mensaje de bienvenida ---
const formBienvenida = document.getElementById('formBienvenida');
if (formBienvenida) {
  formBienvenida.addEventListener('submit', (e) => {
    e.preventDefault(); // evita recargar la página

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;

    const mensaje = document.getElementById('mensajeBienvenida');
    mensaje.innerHTML = `
      <h3>¡Bienvenido(a), ${nombre}! </h3>
      <p>Edad: ${edad} años</p>
      <p>¡En esta pagina podras sentirte a gusto y seguro! </p>
    `;
    mensaje.style.display = "block";

    formBienvenida.reset(); // limpia el formulario
  });
}

// --- Lista interactiva de dieta personalizada ---
function agregarAlimento() {
  const input = document.getElementById('nuevoAlimento');
  const texto = input.value.trim();
  if (texto === "") return;

  const lista = document.getElementById('listaDieta');
  const item = document.createElement('li');
  item.textContent = texto;

  // Si hace clic en un elemento, lo elimina
  item.addEventListener('click', () => {
    lista.removeChild(item);
  });

  lista.appendChild(item);
  input.value = "";
}


