# 🎮 Programación Web Avanzada 2025  
## Trabajo Práctico N.º 2 – *PlayCave* (Página de Juegos)

---

## 👥 Integrantes

- **Nicolás Antinao** – FAI-4353  
- **Alfredo Payllalef** – FAI-3694

---

## 🎯 Objetivo

Desarrollar una **aplicación web de videojuegos** que consuma datos desde la API pública de [RAWG](https://rawg.io/apidocs).  
El sistema permite **buscar juegos, ver sus detalles y marcarlos como favoritos** para una experiencia personalizada.

---

## 📁 Estructura del Proyecto

- **`main.jsx`**  
  Punto de entrada de la aplicación. Renderiza el componente raíz (`App`) en el DOM.

- **`App.jsx`**  
  Componente principal que define la estructura de navegación y lógica general.

- **`index.css`**  
  Estilos globales aplicados a toda la interfaz.

- **`src/components/`**  
  Carpeta que contiene los componentes reutilizables como header, footer, tarjetas de juego, etc.

- **`services/getJuegos.js`**  
  Encapsula la lógica para consumir datos desde la API de RAWG.

- **`package.json`**  
  Archivo de configuración del proyecto: dependencias, scripts y metadatos.

---

## ⚙️ Guía de Instalación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/Nico13A/gestor-juegos-react
    cd gestor-juegos-react
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    npm install lucide-react
    ```

3. Crear un archivo `.env` en la raíz del proyecto y agregar tu clave de la API:
    ```
    VITE_RAWG_API_KEY=tu_api_key
    ```

    > 🔑 Para obtener tu API key, registrate gratuitamente en [RAWG](https://rawg.io/apidocs).

4. Ejecutar el servidor de desarrollo:
    ```bash
    npm run dev
    ```

---

## 🧾 Guía de Uso

Una vez iniciada la aplicación, el usuario podrá:

- 🔍 **Buscar videojuegos** por nombre.  
- 🖼️ **Ver información básica**: Nombre, imagen, fecha de lanzamiento, puntuación y usuarios.  
- 📖 **Acceder a detalles** completos de cada juego.  
- ⭐ **Marcar juegos como favoritos**, almacenados en el navegador con `localStorage`.  

---

## 📌 Tecnologías Utilizadas

- React  
- Vite  
- RAWG API  
- Lucide Icons  
- CSS / HTML

---

> 🧠 Proyecto desarrollado como parte del curso de **Programación Web Avanzada 2025** – Facultad de Informática.
