"use strict";

require("core-js/modules/es.array.at.js");

//-------- transformación
const abc = {
  a: "a",
  b: "b",
  c: "c"
};
const {
  a,
  ...bc
} = abc;
console.log(a); //--------- polyfill

const latest = ["uno", "dos", "tres"].at(-1);
console.log(latest);
