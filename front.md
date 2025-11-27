Actúa como un Desarrollador Senior Frontend (React JS) y experto en Diseño UI/UX con especialidad en psicología del consumidor.

Tu objetivo es crear el código para una Landing Page de alto impacto para "Chispeando Ideas", un proyecto educativo STEAM para niños de 4 a 9 años en México.

### 1. Stack Tecnológico
* **Framework:** React JS (Next.js preferiblemente o Vite).
* **Estilos:** Tailwind CSS (para diseño rápido y responsivo).
* **Animaciones:** Framer Motion (para entradas suaves y elementos flotantes).
* **Iconos:** Lucide-React o Heroicons.

### 2. Identidad Visual (Look & Feel)
* **Estilo:** "Glassmorphism" sutil, esquinas redondeadas (friendly), botones táctiles con sombras suaves.
* **Colores:**
    * Primario: Naranja Vibrante (creatividad/energía).
    * Secundario: Azul Ciencia (confianza/tecnología).
    * Fondo: Blanco limpio o gris muy tenue para resaltar las fotos.
* **Tipografía:** Sans-serif redondeada (ej: Nunito, Fredoka) para títulos; Inter o Roboto para textos.

### 3. Estructura y Contenido (Basado en el Plan de Negocios)

La página debe ser una Single Page Application con las siguientes secciones en orden:

**A. Navbar:**
Logo "Chispeando Ideas" a la izquierda. Menú: Inicio, Cursos, Metodología, Contacto. Botón CTA destacado: "Inscribir a mi hijo".

**B. Hero Section (Impacto Inmediato):**
* **H1:** "Transforma su curiosidad en superpoderes 🚀"
* **Subtítulo:** "Club de ciencias, robótica y tecnología al aire libre para niños de 4 a 9 años. Aprender nunca fue tan divertido."
* **CTA Principal:** Botón grande animado "Quiero una clase de prueba" (Vinculado a WhatsApp).
* **Imagen:** Placeholder para video/foto de niño sorprendido con un experimento.

**C. Propuesta de Valor (Psychological Triggers):**
* Diseño de 3 columnas con iconos animados:
    1.  [cite_start]**Enfoque STEAM:** Ciencia, Tecnología, Ingeniería, Arte y Matemáticas[cite: 8].
    2.  [cite_start]**Aprendizaje Práctico:** "Prohibido aburrirse. Aquí ensuciarse las manos es requisito"[cite: 8].
    3.  [cite_start]**Grupos Reducidos:** "Atención personalizada (máx 7 niños) en un entorno seguro al aire libre"[cite: 8, 19].

**D. Nuestros Servicios (Cards Interactivas):**
Crea tarjetas con efecto hover para los siguientes servicios:
1.  [cite_start]**Club de Ciencia Sabatino:** Experimentos guiados en patio al aire libre[cite: 10].
2.  [cite_start]**Talleres de Robótica:** Electrónica básica y construcción para pequeños ingenieros[cite: 10].
3.  [cite_start]**Kits Educativos:** Ejemplo "Chispi Volcán Explosivo" para hacer en casa[cite: 10].
4.  [cite_start]**Cursos de Temporada:** Verano, Pascua e Invierno[cite: 10, 11, 12].

**E. Sección "El Patio" (Social Proof & Trust):**
* [cite_start]Texto sobre la ubicación: Un espacio adaptado al aire libre, seguro y estimulante en [Ciudad/Localidad][cite: 6, 19].
* Incluir un carrusel de testimonios (Placeholders).

**F. Footer & CTA Final:**
* Enlaces a redes sociales (Facebook, Instagram, TikTok).
* **Floating Action Button (FAB):** Un botón de WhatsApp fijo en la esquina inferior derecha que diga "¡Hola! Quiero info 💬".
* El enlace de WhatsApp debe llevar a la API: `https://wa.me/NUMERO?text=Hola,%20quiero%20que%20mi%20hijo%20descubra%20la%20ciencia`

### 4. Requerimientos de Código
* El código debe ser modular (componentes separados).
* Totalmente responsivo (Mobile-First).
* Utiliza `framer-motion` para que los elementos aparezcan con un `fade-in-up` al hacer scroll.
* Escribe el código completo del componente principal (App o Home) y los componentes necesarios.