# Hito 6 - Pizzería Mamma Mía

Proyecto desarrollado a partir del Hito 5. En este hito se implementa el estado global del carrito de compras utilizando React Context API.

## Requisitos
- Node.js y npm instalados.

## Ejecutar el backend
1. Abrir una terminal en `backend`.
2. Ejecutar `npm install`.
3. Si el backend requiere variables de entorno, crear `.env` a partir de `.env.example` y completar los valores correspondientes.
4. Ejecutar `npm start` (servidor en http://localhost:5000).

## Ejecutar el frontend
1. Abrir otra terminal en `frontend`.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev`.
4. Abrir la dirección local que indique Vite.

## Funcionalidades del Hito 6
- `CartContext` centraliza el estado del carrito y el cálculo del total.
- El Navbar consume el Context y muestra el total actualizado.
- Cada tarjeta de Home permite agregar una pizza.
- En Cart se puede aumentar, disminuir o eliminar un producto.
- Si la cantidad llega a cero, el producto sale del carrito.
- El total se calcula en el Context y se comparte entre Navbar y Cart.

El backend debe estar encendido para cargar las pizzas desde la API.
