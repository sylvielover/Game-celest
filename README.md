# Documentación Técnica — Game Celest

## 1. Descripción General

Game Celest es un videojuego desarrollado con tecnologías web básicas:

* HTML5
* CSS3
* JavaScript

El proyecto fue reorganizado utilizando una arquitectura por capas para mejorar:

* La legibilidad del código
* El mantenimiento
* La escalabilidad
* La separación de responsabilidades

---

# 2. Estructura del Proyecto

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
│       └── game.js
│
└── README.md
```

---

# 3. Explicación de Carpetas y Archivos

## 3.1 index.html

Archivo principal del proyecto.

Responsabilidades:

* Crear la estructura visual del juego.
* Cargar los archivos CSS y JavaScript.
* Mostrar el canvas o elementos visuales del juego.

Ejemplo:

```html
<link rel="stylesheet" href="assets/css/styles.css">
<script src="assets/js/game.js"></script>
```

---

## 3.2 assets/css/styles.css

Contiene todos los estilos visuales del juego.

Responsabilidades:

* Colores
* Diseño visual
* Animaciones
* Posicionamiento
* Responsividad

Ventajas:

* Facilita modificar la apariencia.
* Permite reutilizar estilos.
* Mantiene separado el diseño de la lógica.

---

## 3.3 assets/js/game.js

Contiene toda la lógica principal del videojuego.

Responsabilidades:

* Movimiento del jugador
* Física
* Colisiones
* Dash
* Cámara
* Sistema de niveles
* Gemas
* Eventos del teclado

Posibles módulos futuros:

```text
assets/js/
├── player.js
├── camera.js
├── levels.js
├── physics.js
└── ui.js
```

---

# 4. Arquitectura por Capas

La organización implementada sigue una separación por responsabilidades.

## Capa de Presentación

Responsable de la interfaz visual.

Archivos:

* index.html
* styles.css

Funciones:

* Mostrar elementos gráficos.
* Organizar el diseño.
* Aplicar estilos.

---

## Capa de Lógica

Responsable del comportamiento del videojuego.

Archivo:

* game.js

Funciones:

* Actualizar estados.
* Controlar movimiento.
* Detectar colisiones.
* Gestionar eventos.
* Administrar niveles.

---

# 5. Flujo General del Juego

```text
Jugador presiona tecla
        ↓
JavaScript detecta evento
        ↓
Se actualiza posición
        ↓
Se verifica colisión
        ↓
Se renderiza nuevamente
```

---

# 6. Funcionalidades Principales

## Movimiento del Personaje

Permite desplazar el personaje utilizando el teclado.

Características:

* Movimiento horizontal
* Saltos
* Gravedad
* Física básica

---

## Dash

Sistema de impulso rápido.

Características:

* Mayor velocidad temporal
* Movimiento explosivo
* Mejora movilidad del jugador

---

## Cámara

La cámara sigue al personaje.

Objetivos:

* Mantener al jugador visible.
* Mejorar la experiencia visual.
* Dar sensación de desplazamiento.

---

## Gemas

Elementos coleccionables.

Funciones:

* Incrementar puntuación.
* Desbloquear progreso.
* Completar niveles.

---

## Sistema de Niveles

El juego incluye varios niveles.

Características:

* Distintos escenarios.
* Distribución de plataformas.
* Gemas por nivel.
* Dificultad progresiva.

---

# 7. Tecnologías Utilizadas

| Tecnología | Uso                     |
| ---------- | ----------------------- |
| HTML5      | Estructura del juego    |
| CSS3       | Diseño visual           |
| JavaScript | Lógica y comportamiento |

---

# 8. Ventajas de la Nueva Organización

## Antes

* Todo el código estaba en un solo archivo.
* Difícil mantenimiento.
* Poco escalable.
* Código menos legible.

## Después

* Código modular.
* Mejor organización.
* Fácil mantenimiento.
* Mayor escalabilidad.
* Separación clara de responsabilidades.

---

# 9. Recomendaciones Futuras

## Separar la lógica en módulos

Ejemplo:

```text
player.js
camera.js
physics.js
levels.js
```

---

## Implementar sistema de estados

Para manejar:

* Menú principal
* Pausa
* Game Over
* Victoria

---

## Agregar persistencia

Guardar:

* Puntajes
* Progreso
* Configuración

Utilizando:

```javascript
localStorage
```

---

## Optimizar renderizado

Mejorar rendimiento utilizando:

* requestAnimationFrame()
* Sprite sheets
* Carga diferida

---

# 10. Conclusión

La reorganización por capas permitió transformar el proyecto en una estructura mucho más profesional, mantenible y escalable.

La separación entre presentación y lógica facilita futuras mejoras, nuevas funcionalidades y trabajo colaborativo.

El proyecto queda preparado para:

* Agregar más niveles
* Implementar enemigos
* Crear menús
* Añadir sonidos
* Incorporar guardado de progreso
* Escalar el videojuego a una arquitectura más avanzada
