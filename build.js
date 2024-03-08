const fs = require('fs');
const pkg = require('./package');
const date = new Date();

const simpl = `/*
 * simple from anime.js v${ pkg.version }
 * (c) ${ date.getFullYear() } Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
`;

console.info('Compiling... 😤');
