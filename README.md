# 💇‍♀️ Landing Page - Alisado Profesional

<div align="center">

![Header Banner](https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&h=300&fit=crop)

### ✨ Página Web Profesional para Servicios de Alisado Brasileño ✨

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide-Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

[🚀 Demo en Vivo](#) · [📝 Documentación](#características) · [🐛 Reportar Bug](#)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Personalización](#-personalización)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 🎯 Descripción

Landing page moderna y elegante diseñada específicamente para negocios de alisado de cabello profesional. Destaca el servicio de **Alisado Brasileño de Chocolate** con un diseño visualmente impactante y funcionalidades optimizadas para conversión de clientes.

### 🌟 Propósito

Proporcionar una presencia web profesional que:
- Muestre la calidad y profesionalismo del servicio
- Facilite la comunicación directa vía WhatsApp
- Destaque el servicio a domicilio
- Genere confianza mediante testimonios y galería de trabajos

---

## ✨ Características

### 🎨 Diseño y UX

| Característica | Descripción |
|---------------|-------------|
| 🎭 **Animaciones Suaves** | Transiciones fluidas y efectos de scroll |
| 📱 **Responsive Design** | Optimizado para móviles, tablets y desktop |
| 🌈 **Gradientes Modernos** | Paleta de colores elegante (rosa, ámbar, verde) |
| ⚡ **Carga Rápida** | Optimizado para rendimiento |

### 🔧 Funcionalidades

- ✅ **Header Impactante** con imagen de fondo animada
- ✅ **Sección de Proceso** con 5 pasos visuales
- ✅ **Galería Interactiva** con carrusel automático
- ✅ **Testimonios de Clientes** con sistema de rotación
- ✅ **Integración WhatsApp** con botón flotante y CTAs
- ✅ **Mapa de Google** embebido con ubicaciones
- ✅ **Servicio a Domicilio** destacado con diseño especial
- ✅ **Footer Completo** con horarios y contacto

### 📍 Secciones Principales

```
├── 🏠 Header Hero (con video/imagen de fondo)
├── 🚗 Servicio a Domicilio
├── 📋 Proceso de Alisado (5 pasos)
├── 🖼️ Galería de Trabajos
├── 💬 Testimonios de Clientes
├── 📍 Ubicaciones (Centro, Mejicanos, Zacamil)
└── 📞 Footer con Contacto
```

---

## 🛠️ Tecnologías Utilizadas

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
      <br>React 18+
    </td>
    <td align="center" width="96">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="48" height="48" alt="Tailwind" />
      <br>Tailwind CSS
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
      <img src="https://lucide.dev/logo.dark.svg" width="48" height="48" alt="Lucide" />
      <br>Lucide Icons
    </td>
  </tr>
</table>

### Dependencias Principales

```json
{
  "react": "^18.0.0",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.0.0"
}
```

---

## 🚀 Instalación

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/alisado-landing.git

# 2. Navegar al directorio
cd alisado-landing

# 3. Instalar dependencias
npm install
# o
yarn install

# 4. Iniciar el servidor de desarrollo
npm start
# o
yarn start

# 5. Abrir en el navegador
# http://localhost:3000
```

---

## ⚙️ Configuración

### 📱 Configurar WhatsApp

Abre el archivo del componente y modifica:

```javascript
const whatsappNumber = '50312345678'; // ⬅️ Reemplaza con tu número
```

**Formato del número:**
- Sin espacios ni guiones
- Código de país + número
- Ejemplo: `50378901234` (El Salvador)

### 🗺️ Configurar Ubicaciones

En la sección de ubicaciones, personaliza:

```javascript
// Actualiza las direcciones según tu negocio
<div className="flex items-start gap-3">
  <MapPin className="text-rose-500" />
  <div>
    <p className="font-semibold">Tu Dirección Exacta</p>
    <p className="text-gray-600">Referencias del lugar</p>
  </div>
</div>
```

### 🖼️ Agregar Tus Imágenes

Reemplaza las URLs de ejemplo:

```javascript
const workImages = [
  'ruta/a/tu/imagen1.jpg',  // ⬅️ Imágenes de tus trabajos
  'ruta/a/tu/imagen2.jpg',
  'ruta/a/tu/imagen3.jpg',
  'ruta/a/tu/imagen4.jpg',
];
```

### 💬 Personalizar Testimonios

```javascript
const testimonials = [
  { 
    name: 'Nombre del Cliente', 
    text: 'Su testimonio aquí...', 
    rating: 5 
  },
  // Agrega más testimonios...
];
```

---

## 📁 Estructura del Proyecto

```
alisado-landing/
│
├── src/
│   ├── components/
│   │   └── HairSmoothingLanding.jsx  # Componente principal
│   ├── styles/
│   │   └── globals.css                # Estilos globales
│   ├── assets/
│   │   └── images/                    # Imágenes del proyecto
│   └── App.jsx                        # Componente raíz
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── package.json
├── tailwind.config.js
├── README.md
└── .gitignore
```

---

## 🎨 Personalización

### Cambiar Colores

Los colores principales están definidos con gradientes de Tailwind:

```javascript
// Rosado a Ámbar
className="bg-gradient-to-r from-rose-500 to-amber-500"

// Verde (WhatsApp)
className="bg-gradient-to-r from-green-500 to-green-600"

// Personaliza según tu marca
className="bg-gradient-to-r from-purple-500 to-pink-500"
```

### Modificar Animaciones

Las animaciones usan clases de Tailwind:

```javascript
// Velocidades disponibles
duration-300  // Rápida
duration-500  // Media
duration-1000 // Lenta

// Efectos
hover:scale-105      // Zoom al pasar mouse
hover:-translate-y-2 // Elevar elemento
animate-pulse        // Pulso continuo
animate-bounce       // Rebote
```

---

## 📸 Capturas de Pantalla

<div align="center">

### 🏠 Hero Section
![Hero](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Hero+Section)

### 📋 Proceso de Alisado
![Proceso](https://via.placeholder.com/800x400/EC4899/FFFFFF?text=Proceso)

### 🖼️ Galería
![Galería](https://via.placeholder.com/800x400/10B981/FFFFFF?text=Galería)

</div>

---

## 🔄 Próximas Mejoras

- [ ] Sistema de reservas online
- [ ] Integración con calendario
- [ ] Formulario de contacto con envío de emails
- [ ] Blog con consejos de cuidado capilar
- [ ] Sistema de cupones y promociones
- [ ] Integración con redes sociales
- [ ] Panel de administración

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agrega nueva función'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📞 Contacto y Soporte

<div align="center">

### ¿Necesitas ayuda con la instalación o personalización?

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/50312345678)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contacto@ejemplo.com)

</div>

---

## 🌟 Agradecimientos

- **Unsplash** por las imágenes de ejemplo
- **Lucide Icons** por los iconos modernos
- **Tailwind CSS** por el framework de estilos
- **React** por la librería de componentes

---

<div align="center">

### ⭐ Si este proyecto te fue útil, considera darle una estrella

Hecho con ❤️ por tu equipo de desarrollo

**© 2024 Alisado Profesional - Todos los derechos reservados**

[⬆ Volver arriba](#-landing-page---alisado-profesional)

</div>