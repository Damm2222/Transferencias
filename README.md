<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Backend de Transferencias - NestJS + TypeORM + PostgreSQL

Este proyecto es un backend para la gestión de transferencias bancarias entre usuarios, desarrollado con [NestJS](https://nestjs.com/) y [TypeORM](https://typeorm.io/) usando una base de datos PostgreSQL.

---

## ¿Cómo funciona tu backend?

### 1. Arquitectura
- Usas **NestJS** (un framework de Node.js) con **TypeORM** para conectarte a una base de datos PostgreSQL.
- El código está organizado en módulos: `usuarios`, `bancos` y `transferencias`, cada uno con su entidad, servicio y controlador.

### 2. Entidades
- **UsuariosTricot**: Representa a los usuarios.
- **Bancos**: Representa los bancos.
- **Transferencias**: Representa las transferencias entre usuarios y bancos, con relaciones a las otras entidades.

### 3. Servicios
- Los servicios (`*.service.ts`) contienen la lógica de negocio, como crear y buscar transferencias, validando que los usuarios y bancos existan antes de guardar una transferencia.

### 4. Controladores
- Los controladores (`*.controller.ts`) exponen endpoints HTTP (por ejemplo, `/transferencias`) para crear y consultar transferencias usando los servicios.

### 5. Flujo de una transferencia
- Cuando haces un POST a `/transferencias` con los datos correctos, el backend:
  1. Valida que los usuarios y bancos existen.
  2. Crea una nueva transferencia y la guarda en la base de datos.
  3. Devuelve la transferencia creada.

---

## Instalación y uso

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
4. **Ejecuta el proyecto:**
   ```sh
   npm run start:dev
   ```

---

## Endpoints principales

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

## Recomendaciones
- No subas tu archivo `.env` ni contraseñas a GitHub.
- El archivo `.gitignore` ya está configurado para ignorar archivos sensibles y carpetas innecesarias.

---

## Licencia
MIT
