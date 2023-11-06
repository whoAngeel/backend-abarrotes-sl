<div align="center" id="top"> 
  <img src="/src/assets/SL.png" alt="{{app_name}}" width="80"/>

  <!-- &#xa0; -->

  <!-- <a href="https://{{app_url}}.netlify.app">Demo</a> -->
</div>

<h1 align="center">API SanLuis</h1>

<p align="center" style="display:flex; justify-content:space-evenly;">
  <img width="60"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
 <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
 <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
<img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/>

</p>

<hr>

<p align="center">
  <a href="#descripción">Descripción</a> &#xa0; | &#xa0; 
  <a href="#Requirimientos">Requirimientos</a> &#xa0; | &#xa0; 
  <a href="#Instalación">Instalación</a> 
</p>

## :dart: Descripción

La API de SanLuis Abarrotes es una aplicación RESTful que sirve como el backend para la comunicación con el servidor y la base de datos.

## :white_check_mark: Requirimientos

Antes de iniciar debes tener [Git](https://git-scm.com), [Docker](https://www.docker.com/products/docker-desktop/) y [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Instalación

```bash
# clonar este proyecto
$ git clone https://github.com/whoAngeel/backend-abarrotes-sl.git

# dirigirse a la ruta del backend
$ cd backend-abarrotes-sl

# instalar las dependencias
$ npm i

# levantar la base de datos de docker
$ docker-compose up -d postgres

# Ejecutar este proyecto
$ npm run dev

# The server will initialize in the <http://localhost:3000>
```

<a href="#top">Back to top</a>
