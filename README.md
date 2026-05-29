# 🎮 Game Celest

Game Celest es un videojuego desarrollado con tecnologías web (HTML, CSS y JavaScript) inspirado en plataformas tipo arcade con mecánicas de movimiento, salto y dash.

El proyecto fue reorganizado y mejorado utilizando una arquitectura modular para facilitar el mantenimiento, escalabilidad y comprensión del código.

---

# 📂 Estructura del Proyecto

```text
Game-celest/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       ├── core/
│       │   ├── config.js
│       │   └── original-game.js
│       │
│       ├── managers/
│       │   ├── gameStateManager.js
│       │   └── storageManager.js
│       │
│       ├── utils/
│       │   └── helpers.js
│       │
│       └── game.js
│
├── README.md
└── CHANGELOG.md
```

---

# 🚀 Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla

---

# 🎯 Funcionalidades

## ✅ Movimiento del personaje

* Movimiento horizontal
* Saltos
* Física básica
* Gravedad

## ✅ Dash

* Impulso rápido
* Mayor movilidad
* Mecánica estilo Celeste

## ✅ Cámara dinámica

* Seguimiento del jugador
* Mejor experiencia visual

## ✅ Sistema de niveles

* Diferentes escenarios
* Progresión del juego

## ✅ Gemas coleccionables

* Objetos recolectables
* Incremento de puntuación

## ✅ Persistencia de datos

* Guardado automático de puntaje usando `localStorage`

## ✅ Sistema de estados

Estados implementados:

* `start`
* `playing`
* `paused`
* `gameover`
* `win`

---

# 🧠 Arquitectura del Proyecto

## 📌 Capa de Presentación

Responsable de la interfaz visual.

Archivos:

* `index.html`
* `styles.css`

Funciones:

* Renderizado visual
* Estilos
* Diseño

---

## 📌 Capa de Lógica

Responsable del comportamiento del juego.

Archivos:

* `game.js`
* `gameStateManager.js`
* `storageManager.js`

Funciones:

* Movimiento
* Colisiones
* Gestión de estados
* Persistencia
* Reglas del juego

---

## 📌 Capa de Utilidades

Responsable de funciones reutilizables.

Archivos:

* `helpers.js`

Funciones:

* Utilidades matemáticas
* Funciones auxiliares
* Herramientas reutilizables

---

# ⚙️ Cómo Ejecutar el Proyecto

## Método 1

Abrir directamente:

```text
index.html
```

---

## Método 2 (Recomendado)

Usar una extensión como:

* Live Server (Visual Studio Code)

Pasos:

1. Abrir el proyecto en VS Code
2. Instalar Live Server
3. Click derecho en `index.html`
4. Seleccionar `Open with Live Server`

---

# 💾 Persistencia

El proyecto guarda automáticamente:

* Puntaje máximo

Usando:

```javascript
localStorage
```

---

# 🔧 Mejoras Aplicadas

## ✔ Reorganización Modular

Separación del proyecto en carpetas específicas.

## ✔ Sistema de Estados

Control centralizado del flujo del juego.

## ✔ Configuración Global

Archivo `config.js` para constantes y configuración.

## ✔ Utilidades Reutilizables

Funciones auxiliares desacopladas.

## ✔ Persistencia

Guardado automático de progreso básico.

---

# 📈 Mejoras Futuras

* Sistema de enemigos
* Menú principal
* Sonidos y música
* Animaciones avanzadas
* Sprite sheets
* Sistema de vidas
* Guardado completo de progreso
* Optimización de renderizado
* Compatibilidad móvil

---

# 👨‍💻 Autor

Proyecto reorganizado y mejorado para aplicar:

* Arquitectura modular
* Buenas prácticas
* Escalabilidad
* Separación de responsabilidades

---

# 📄 Licencia

Proyecto educativo y de práctica.
