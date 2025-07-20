# GripRidersLuxury

Bienvenido a **GripRidersLuxury**, una tienda en línea dedicada a la venta de productos de belleza para motos, artículos de mantenimiento y accesorios de lujo. Este proyecto está diseñado para ofrecer una experiencia de compra excepcional, con un enfoque en la estética yakusa japonesa y un diseño moderno y agresivo.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: **backend** y **frontend**.

### Backend

El backend está construido con Node.js y Express, y se encarga de manejar la lógica del servidor, la autenticación de usuarios, la gestión de productos y pedidos, y la conexión a la base de datos.

- **src/app.js**: Punto de entrada de la aplicación backend.
- **src/controllers/**: Controladores para manejar la lógica de negocio (autenticación, productos, pedidos, administración).
- **src/models/**: Modelos de datos que representan la estructura de la base de datos (usuarios, productos, pedidos, etc.).
- **src/routes/**: Rutas que definen los endpoints de la API.
- **src/middleware/**: Middleware para la autenticación y manejo de errores.
- **src/utils/**: Utilidades para la conexión a la base de datos y la integración con pasarelas de pago.

### Frontend

El frontend está construido con React.js y TailwindCSS, proporcionando una interfaz de usuario atractiva y responsiva.

- **public/index.html**: Plantilla HTML principal.
- **src/components/**: Componentes reutilizables de la interfaz (barra de navegación, tarjetas de productos, carrito, etc.).
- **src/pages/**: Páginas principales de la aplicación (inicio, detalles del producto, registro, etc.).
- **src/styles/**: Configuración de estilos utilizando TailwindCSS.
- **src/App.jsx**: Componente principal que gestiona las rutas de la aplicación.

## Funcionalidades Clave

- Carrito de compras y gestión de pedidos.
- Múltiples métodos de pago: PSE, tarjeta de crédito/débito, pago contra entrega.
- Registro e inicio de sesión de usuarios.
- Panel de administrador para gestionar productos, usuarios y pedidos.
- Integración con base de datos (MySQL o PostgreSQL).
- Pasarela de pagos colombiana (ePayco, MercadoPago o Wompi).

## Requisitos

- Node.js
- npm o yarn
- Base de datos (MySQL o PostgreSQL)

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu_usuario/GripRidersLuxury.git
   ```

2. Navega a la carpeta del backend y frontend y ejecuta:
   ```
   cd backend
   npm install
   ```

   ```
   cd frontend
   npm install
   ```

3. Configura las variables de entorno en un archivo `.env` basado en `.env.example`.

4. Inicia el servidor backend:
   ```
   cd backend
   npm start
   ```

5. Inicia la aplicación frontend:
   ```
   cd frontend
   npm start
   ```

## Despliegue

Para desplegar el proyecto, se recomienda utilizar plataformas como Vercel o Netlify para el frontend y un VPS para el backend. Asegúrate de configurar correctamente las variables de entorno y la base de datos en el entorno de producción.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.