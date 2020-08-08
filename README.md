# English

## Food Trucks Search App
This app will search food trucks within a radius of 5km of your selected position. 
App is developed with the next technologies:
- FrontEnd: ReactJS
- BackEnd: NodeJS + Express

I've worked more on Backend than FrontEnd since I'm applying to a Backend role. If you think both my front and back are great, I would glady accept also a FullStack Role.

## Backend
It has routes, validators and controllers (middlewares) to manage all kind of request to the API.(At the moment, only 1 endpoint).
Validates if request is valid (Strings, numbers and required fields).
Calculates the coordinates where app must search (both latitude and longitude) and request it from the other App.

### API Documentation
This app has the next endpoints:
- /api/searchRoutes?{x=number}&{y=number} (foodTruck search)

### Installation

#### Requirements
This app has been developed with the next requirements:
- NodeJs (12.16.1)
- npm (6.13.4)

#### Deploy
***All must be executed within backend Folder.***

Create a **.env** file from the **.env.example** file.
Then install dependencies with the next command
```
npm install
```

Wait for dependencies to be installed. Then run development or local server with the next command:
```
npm run dev
```

Or just access this link:
https://gem-resisted-hallway.glitch.me/


## FrontEnd 
Based on different Material-ui components.
It has different React components that are rendered with routes (/, /profile, /search). 
**Some of this components are based on Material-UI examples and modified to reflect my version.**
Some components are stateless and others are stateful, depending on the responsability that component has.
Every component has its unique CSS.
Different files for utils and API request 

### Installation

#### Requirements
This app has been developed with the next requirements::
- NodeJs (12.16.1)
- npm (6.13.4)

#### Deploy
***All must be executed within frontend Folder.***
Install dependencies with the next command:
```
npm install
```

Wait for dependencies to be installed. After that, run the next command:
```
npm start
```
## Profile
As a developer, I have experience with the next technologies listed:
- Php - 3+ years (CodeIgniter, Vanila)
- JavaScript Vanila - 2+ years
- ReactJS - 3-6 Months (Only on personal projects)
- Python - 6+ Months (Backend with Django on VectorFair)
- NodeJS - 3-6 Months (Only on personal projects)
- SQL (MySQL, PostgreSQL) 3+ years
- NoSQL (MongoDB) - 3-6 Months
- Docker - 3-6 Months

# Español
Esta aplicación buscara por carros de comida dentro de un radio de 5 km cercano a la ubicación introducida.
El aplicativo esta desarrollado con las siguientes tecnologias:
- FrontEnd: ReactJS
- BackEnd: NodeJS + Express

He trabajado más en el Backend ya que estoy aplicando a un rol de Backend. Si crees que tanto mi front como Back son buenos, tambien aceptaria gustoso un rol de FullStack.

## Backend
Contiene rutas, validadores y controladores (middlewares) para manejar todos los request en el API.(Al momento, solo existe 1 endpoint).
Valida si el request tiene valores validos(Strings, numeros y si tiene los campos requeridos).
Calcula las coordenadas donde la aplicación debe realizar los filtros (tanto longitud como latitud) y solicita la información al aplicativo que tiene los datos.

### API Documentation
La aplicacion tiene los siguientes endpoints:
- /api/searchRoutes?{x=number}&{y=number} (busqueda de camiones)

### Installation

#### Requirements
Esta aplicación ha sido desarrollada con las siguientes tecnologias:
- NodeJs (12.16.1)
- npm (6.13.4)

#### Deploy
***Debe ser ejecutado dentro del folder backend.***

Crea un archivo **.env** a partir del archivo **.env.example**.
Instala las dependencias con el siguiente comando
```
npm install
```

Una vez instaladas las dependencias corre el siguiente comando para levantar el ambiente local:
```
npm run dev
```

## FrontEnd 
Basado en los componentes de Material-ui.
Tiene diferentes componentes en react, que son renderizados dependiendo de la ruta(/, /profile, /search)
**Algunos de estos componentes son basados en ejemplos de Material-UI y fueron modificados para mostrar mi version.**
Algunos componentes manejan estados, otros no. Esto depende de la responsabilidad del mismo componente.
Cada componente tiene su estilo CSS.
Se crearion otros archivos para los utils y los request al API

### Installation

#### Requirements
Esta aplicación ha sido desarrollada con las siguientes tecnologias:
- NodeJs (12.16.1)
- npm (6.13.4)

#### Deploy
***Debe ser ejecutado dentro del folder frontend.***
Primero, instala las dependencias con el siguiente comando:
```
npm install
```

Espera a que se instalen. Luego corres el siguiente comando para correr el frontend:
```
npm start
```