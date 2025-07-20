# GripRidersLuxury E-commerce

## Descripción del Proyecto
GripRidersLuxury es una tienda en línea dedicada a la venta de productos de belleza para motos, artículos de mantenimiento y accesorios de lujo. Este proyecto está diseñado con un enfoque estético inspirado en la cultura yakusa japonesa, ofreciendo una experiencia de compra única y atractiva.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

- **src/**: Contiene todos los archivos fuente de la aplicación.
  - **assets/**: Recursos estáticos como imágenes e íconos.
  - **components/**: Componentes reutilizables de la interfaz de usuario.
    - `Navbar.tsx`: Barra de navegación del sitio.
    - `ProductCard.tsx`: Tarjeta que muestra información de un producto.
    - `Footer.tsx`: Pie de página con información de contacto y enlaces.
  - **pages/**: Páginas principales de la aplicación.
    - `Home.tsx`: Página principal con banners y productos destacados.
    - `Products.tsx`: Lista de todos los productos disponibles.
    - `ProductDetail.tsx`: Detalles de un producto específico.
    - `Cart.tsx`: Productos en el carrito de compras.
    - `Checkout.tsx`: Proceso de pago y confirmación de pedido.
  - **styles/**: Archivos de estilo CSS.
    - `yakusa-theme.css`: Estilos específicos para el tema yakusa.
  - **types/**: Tipos y interfaces utilizados en la aplicación.
    - `index.ts`: Definiciones de tipos como `Product`, `User`, `Order`, etc.
  - `App.tsx`: Componente principal que configura las rutas y el contexto.
  - `index.tsx`: Punto de entrada de la aplicación.

- **public/**: Contiene archivos públicos accesibles.
  - `index.html`: Plantilla HTML principal.

- **package.json**: Configuración del proyecto para npm, incluyendo dependencias y scripts.

- **tsconfig.json**: Configuración de TypeScript.

## Instalación
Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd GripRidersLuxury-ecommerce
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Inicia la aplicación:
   ```
   npm start
   ```

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.