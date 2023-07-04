# Bienvenido a EduGreen App

## Mi primera aplicación móvil con React Native

Esta aplicación móvil fue desarrollada con React Native, utilizando el boilerplate de Ignite, el cual es un generador de aplicaciones móviles de código abierto, creado por Infinite Red, que proporciona un punto de partida sólido para aplicaciones móviles y sitios web. Es un proyecto de código abierto, y estamos muy agradecidos con todos los contribuyentes que han ayudado a hacerlo genial.

## Inicio rápido

1. Ejecuta `yarn install ` para instalar las dependencias.
2. Ejecuta `npx expo start` para iniciar el servidor de desarrollo.
3. Escanea el código QR con la aplicación Expo Go (Android) o la cámara (iOS).

## Backend y base de datos

En este proyecto se utilizó Firebase como backend y base de datos. Para poder utilizarlo, es necesario crear un proyecto en Firebase y configurar las credenciales en el archivo `.env` como el archivo `.env.example`.

## Estructura de archivos

Ignite boilerplate utiliza una estructura de archivos que se basa en las mejores prácticas de React Native. Si bien no es necesario que sigas esta estructura, se recomienda que lo hagas, ya que es un buen punto de partida para la mayoría de las aplicaciones móviles.

```
ignite-project
├── app
│   ├── components
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   ├── app.tsx
├── test
│   ├── __snapshots__
│   ├── mockFile.ts
│   ├── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   └── templates
|       |── app-icon
│       ├── component
│       ├── model
│       ├── navigator
│       └── screen
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

## Exportar apk

1. Para exportar el apk de la aplicación, es necesario ejecutar el siguiente comando en la carpeta root:

`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

Nota: Si obtienes un error, asegurate que la carpeta `android/app/src/main/assets` exista.

2. Ejecuta `cd android && ./gradlew assembleRelease` para generar el apk.

3. El apk se encuentra en la siguiente ruta: `android/app/build/outputs/apk/release/app-release.apk`

## Limpiar cache

Si deseas limpiar el cache de la aplicación, ejecuta el siguiente comando en la carpeta root:
`npx expo start --clear`

## Generadores

Para crear un elemento a base de los templates que se encuentran en la carpeta ignite/templates, se debe ejecutar el siguiente comando:

```bash
npx ignite-cli generate --help

```

- app-icon
- component
- model
- navigator
- screen
- splash-screen
