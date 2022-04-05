# The Faster One

## Cross Device Application
We created an online single- and multiplayer game where you control your player using your smartphone (iOS not supported). 

The project was created in a course of six weeks during the module *Studio Web and Mobile Design and Engineering 2*.

## How to play
Open this on a Desktop (preferably Chrome): https://thefasterone.herokuapp.com/

Scan the QR-Code with up to four Android mobile devices (no than four though).

## Design
The core concept and design was created in Figma by two UX / UI Designers in their module *Studio UX Design 2*.

* [Figma Prototype Singleplayer](https://www.figma.com/proto/SvU34EUYjpnpFq1tZPvfUH/STUWEUX2?node-id=261%3A1323&scaling=scale-down&page-id=0%3A1&starting-point-node-id=261%3A1323&show-proto-sidebar=1)

* [Figma Prototype Multiplayer](https://www.figma.com/proto/SvU34EUYjpnpFq1tZPvfUH/STUWEUX2?node-id=262%3A1043&scaling=scale-down&page-id=0%3A1&starting-point-node-id=262%3A1043&show-proto-sidebar=1)

* [Figma Prototype Multiplayer Mobile](https://www.figma.com/proto/SvU34EUYjpnpFq1tZPvfUH/STUWEUX2?node-id=483%3A736&scaling=min-zoom&page-id=411%3A643&starting-point-node-id=483%3A736&show-proto-sidebar=1)

## Technologies and Frameworks

We used [Vue.js](https://vuejs.org/) with [Nuxt3.js](https://v3.nuxtjs.org/) as Frameworks. For the socket connection we used the [socket.io](https://socket.io/) library. To read the gyroscope data we used the [VueUse](https://vueuse.org/) library.

The deployment runs via [Heroku](https://www.heroku.com/).

### Architecture Diagram

![Architecture](https://user-images.githubusercontent.com/58468359/161763011-f526f0a3-272b-4974-8d64-a3855903aecd.png)

### Sequence Diagram

![Sequenzdiagramm](https://user-images.githubusercontent.com/58468359/161768419-162477fb-279c-4f14-b815-5bc7d2602b7f.png)



## Gameplay Images
*Start*

![start](https://user-images.githubusercontent.com/58468359/161757813-48d2b18d-31dd-4d11-8b32-6444ad84b818.png)

*Arena View One*

![arena(1)](https://user-images.githubusercontent.com/58468359/161757787-10ef7bdd-b5a7-49a2-aab7-77a8e140d4d6.png)

*Arena View Two*

![arena(2)](https://user-images.githubusercontent.com/58468359/161757801-cfe4f213-f56e-4960-a02e-7133264ec8f2.png)

*Game Over*

![gameOver](https://user-images.githubusercontent.com/58468359/161757808-00a12161-bba4-4709-8986-14a2bf924669.png)

*Phone View*

<img src="https://user-images.githubusercontent.com/58468359/161758329-7d7af01d-b62a-43d7-ab4d-d24050bf6fff.jpg" height="500px" />



## Run locally

### Setup
Make sure to install the dependencies
```
npm install
```

### Development
Start the development server on http://localhost:3000
```
npm run dev -- -o
```

### Production
Build the application for production:
```
npm run build
```


