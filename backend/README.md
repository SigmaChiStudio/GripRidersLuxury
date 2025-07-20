# GripRidersLuxury Backend Documentation

## Introducción

GripRidersLuxury es una plataforma de e-commerce dedicada a la venta de productos de belleza para motos, artículos de mantenimiento y accesorios de lujo. Este documento proporciona una guía sobre la estructura y funcionamiento del backend de la aplicación.

## Estructura del Proyecto

El backend está construido utilizando Node.js y Express, y está organizado de la siguiente manera:

```
backend
├── src
│   ├── controllers         # Controladores para manejar la lógica de negocio
│   ├── models              # Modelos de datos para la base de datos
│   ├── routes              # Rutas de la API
│   ├── middleware          # Middleware para autenticación y manejo de errores
│   ├── utils               # Utilidades como conexión a la base de datos y pagos
│   └── app.js              # Punto de entrada de la aplicación
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Documentación del backend
```

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu_usuario/GripRidersLuxury.git
   ```

2. Navega al directorio del backend:
   ```
   cd GripRidersLuxury/backend
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Configura las variables de entorno. Crea un archivo `.env` basado en `.env.example` y completa los valores necesarios.

## Ejecución

Para iniciar el servidor, utiliza el siguiente comando:
```
npm start
```

El servidor se ejecutará en `http://localhost:3000` por defecto.

## Rutas API

- **Autenticación**
  - `POST /api/auth/register` - Registro de nuevos usuarios
  - `POST /api/auth/login` - Inicio de sesión de usuarios

- **Productos**
  - `GET /api/products` - Obtener todos los productos
  - `POST /api/products` - Crear un nuevo producto (solo admin)
  - `PUT /api/products/:id` - Actualizar un producto (solo admin)
  - `DELETE /api/products/:id` - Eliminar un producto (solo admin)

- **Pedidos**
  - `POST /api/orders` - Crear un nuevo pedido
  - `GET /api/orders/:id` - Obtener detalles de un pedido

- **Administración**
  - `GET /api/admin/users` - Obtener todos los usuarios (solo admin)
  - `GET /api/admin/products` - Obtener todos los productos (solo admin)

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.