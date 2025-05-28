# 🚀 Backend de Transferencias - NestJS + TypeORM + PostgreSQL

Este proyecto es un backend para la gestión de transferencias bancarias entre usuarios, desarrollado con [NestJS](https://nestjs.com/) y [TypeORM](https://typeorm.io/) usando una base de datos PostgreSQL.

---

## 🛠️ ¿Cómo funciona el backend?

### 🏗️ Arquitectura
- **NestJS** (Node.js) + **TypeORM** + **PostgreSQL**.
- Código modular: `usuarios`, `bancos` y `transferencias` (cada uno con entidad, servicio y controlador).

### 🗂️ Entidades
- **UsuariosTricot**: Usuarios.
- **Bancos**: Bancos.
- **Transferencias**: Transferencias entre usuarios y bancos (con relaciones).

### ⚙️ Servicios y Controladores
- Los servicios (`*.service.ts`) contienen la lógica de negocio.
- Los controladores (`*.controller.ts`) exponen endpoints HTTP para crear y consultar transferencias.

### 🔄 Flujo de una transferencia
1. Valida que los usuarios y bancos existen.
2. Crea una nueva transferencia y la guarda en la base de datos.
3. Devuelve la transferencia creada.

---

## ⚡ Instalación y uso rápido

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```
2. **Instala las dependencias:**
   ```sh
   npm install
   ```
3. **Configura la base de datos:**
   - Crea un archivo `.env` (no se sube a GitHub) con tus credenciales de PostgreSQL si lo necesitas.
   - Asegúrate de que la configuración en `src/app.module.ts` coincida con tu entorno.

---

## 📝 Comandos útiles

### ▶️ Compilar y ejecutar el proyecto

- **Desarrollo:**
  ```sh
  npm run start
  ```
- **Modo watch (recarga automática):**
  ```sh
  npm run start:dev
  ```
- **Producción:**
  ```sh
  npm run start:prod
  ```

### 🧪 Tests

- **Unit tests:**
  ```sh
  npm run test
  ```
- **e2e tests:**
  ```sh
  npm run test:e2e
  ```
- **Cobertura de tests:**
  ```sh
  npm run test:cov
  ```

---

## 📡 Endpoints principales

- **POST /transferencias**
  - Crea una transferencia.
  - Ejemplo de body:
    ```json
    {
      "monto": 1000,
      "nroCuenta": 123456,
      "usuarioOrigen": { "id": 1 },
      "usuarioDestino": { "id": 2 },
      "bancoOrigen": { "id": 1 },
      "bancoDestino": { "id": 2 }
    }
    ```

- **GET /transferencias**
  - Devuelve todas las transferencias registradas.

---

## 📝 Recomendaciones
- ❌ No subas tu archivo `.env` ni contraseñas a GitHub.
- ✅ El archivo `.gitignore` ya está configurado para ignorar archivos sensibles y carpetas innecesarias.

---

## 📄 Licencia
MIT
