# Graph Recommendation - Frontend

Frontend básico para un sistema de recomendación de música basado en grafos, utilizando las APIs de Spotify y Deezer.

## 📋 Descripción

Este proyecto es una interfaz web que permite a los usuarios:
- Autenticarse con Spotify
- Visualizar sus playlists
- Analizar playlists mediante un sistema de grafos
- Obtener recomendaciones musicales combinando datos de Spotify y Deezer

## 🚀 Características

- ✅ Autenticación OAuth con Spotify
- 📊 Visualización de playlists del usuario
- 🔍 Análisis detallado de canciones (BPM, géneros, popularidad, etc.)
- 🕸️ Representación visual de grafos usando vis-network
- 📈 Integración con datos de Deezer (ranking, gain, etc.)

## 🛠️ Tecnologías

- **HTML5/CSS3**: Estructura y estilos básicos
- **JavaScript (ES6 Modules)**: Lógica del frontend
- **vis-network**: Visualización de grafos
- **graphlib**: Procesamiento de grafos
- **APIs**: Spotify Web API + Deezer API

## 📁 Estructura del Proyecto

```
GR_front/
├── index.html              # Página principal (login)
├── menu.html               # Dashboard de playlists
├── static/
│   ├── css/
│   │   ├── index.css      # Estilos página principal
│   │   └── app.css        # Estilos dashboard
│   └── js/
│       ├── index.js       # Lógica página principal
│       ├── app.js         # Lógica análisis de playlists
│       └── redirects.js   # Manejo de navegación y autenticación
```

## ⚙️ Configuración

1. **Backend requerido**: Este frontend necesita un backend corriendo en el puerto 8000
2. **Frontend**: Configurado por defecto en el puerto 5500

### Puertos configurables

En [redirects.js](static/js/redirects.js):
```javascript
export const back_port="8000"  // Puerto del backend
export const front_port="5500" // Puerto del frontend
```

## 🚦 Uso

1. Abre [index.html](index.html) en tu navegador
2. Haz clic en "Conectar con Spotify"
3. Autoriza la aplicación en Spotify
4. Explora tus playlists y analízalas

## 📊 Datos Analizados

Para cada canción se obtiene:
- Información básica (nombre, artista, álbum)
- Tipo de álbum y fecha de lanzamiento
- Duración y popularidad
- BPM (Beats Per Minute)
- Ganancia de audio (Gain)
- Ranking en Deezer
- Géneros musicales
- Clasificación de contenido explícito

## 🔮 Estado del Proyecto

> ⚠️ **Nota**: Este es un frontend básico en desarrollo. Futuras mejoras están planeadas para mejorar la UI/UX y funcionalidades.

## 📝 Próximas Mejoras

- [ ] Mejorar diseño responsive
- [ ] Optimizar visualización de grafos
- [ ] Añadir filtros y búsqueda
- [ ] Implementar sistema de recomendaciones interactivo
- [ ] Mejorar manejo de errores y feedback al usuario

## 🤝 Contribuciones

Este proyecto está en desarrollo activo. Las contribuciones serán bienvenidas en el futuro.
