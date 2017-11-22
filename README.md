# Boilerplate

## CSS

Esta base usa SASS / SCSS. Está pensado para usarse con el editor [Atom](https://atom.io/) y su plugin [SASS Autocompile](https://atom.io/packages/sass-autocompile), que es muy fácil de configurar.

También incluye (a través de un CDN) una versión actualizada de [Bootstrap](http://getbootstrap.com/) , hoy por hoy, la 4.0.0-beta.2.

## Javascript

Incluye el Javascript (a través de un CDN) de Bootstrap y por dependencia, también [jQuery](https://jquery.com/).

También un archivo main.js preparado con el loader de jQuery.

## Recursos útiles no incluidos

 * [favicons](https://gist.github.com/jamesflorentino/3769868): códigos para la inclusión de favicons.
 * [bootstrap_ms](https://gist.github.com/firepol/7942411): Incluye un tamaño intermedio entre sm y xs.
 * [mobile-chrome-vh-fix](https://github.com/Stanko/mobile-chrome-vh-fix): Utilidad para corregir el comportamiento de la unidad vh en Chrome Mobile

## Uglify

El Javascript que se usa está minificado. El boilerplate incluye una tarea de [Gulp](http://gulpjs.com/) para procesarlo.

El uso sería el siguiente:

- Si no se tiene instalado [node y npm](http://www.nodejs.org), instalarlo desde la web oficial. 
- La primera vez que se va a usar, habrá que instalar las dependencias con el código ``npm install``
- Se necesita tener instalado [Gulp](http://gulpjs.com/), ``npm install --global gulp-cli``
- Cuando se tiene todo el entorno preparado, sólo hay que escribir ``gulp`` para procesar los archivos de Javascript.

---
[![we are Marmota](http://res.wearemarmota.com/logo-1.svg)](http://www.wearemarmota.com)
