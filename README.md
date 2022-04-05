# The Faster One

## Cross Device Application
We created an online single- and multiplayer game where you control your player using your smartphone (iOS not supported). 

The project was created in a course of six weeks during the module *Studio Web and Mobile Design and Engineering 2*.

## How to play
Open this on a Desktop (preferably Chrome): https://thefasterone.herokuapp.com/

Scan the QR-Code with up to four Android mobile devices (no than four though).

## Design
The core concept and design was created in Figma by two UX and UI Designers in their module *Studio UX Design 2*.

* [Figma Prototype Singleplayer](https://www.figma.com/proto/SvU34EUYjpnpFq1tZPvfUH/STUWEUX2?node-id=261%3A1323&scaling=scale-down&page-id=0%3A1&starting-point-node-id=261%3A1323&show-proto-sidebar=1)

* [Figma Prototype Multiplayer](https://www.figma.com/proto/SvU34EUYjpnpFq1tZPvfUH/STUWEUX2?node-id=262%3A1043&scaling=scale-down&page-id=0%3A1&starting-point-node-id=262%3A1043&show-proto-sidebar=1)

* [Figma Prototype Multiplayer Mobile](https://www.figma.com/proto/SvU34EUYjpnpFq1tZPvfUH/STUWEUX2?node-id=483%3A736&scaling=min-zoom&page-id=411%3A643&starting-point-node-id=483%3A736&show-proto-sidebar=1)

## Technologies and Frameworks

### Architecture
We used [Vue.js](https://vuejs.org/) with [Nuxt3.js](https://v3.nuxtjs.org/) as Frameworks. For the socket connection we used the [socket.io](https://socket.io/) library. To read the gyroscope data we used the [VueUse](https://vueuse.org/) library.
The deployment runs via [Heroku](https://www.heroku.com/).

## Images

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
