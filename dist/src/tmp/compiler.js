"use strict";
function echo(message) {
    return message;
}
let implictAny;
implictAny = "any";
implictAny.toUpperCase();
let nullable = echo("hi");
let nullable1 = undefined;
let onlyNull = undefined;
let onlyUndefined = undefined;
if (nullable) {
    nullable.toUpperCase;
}
const newFunction = echo.bind(null, "nbice");
// applyはパラメーターに配列を入れるもの
const newFunction1 = echo.apply(null, ["hi"]);
