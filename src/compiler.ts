function echo(message: string): string | undefined {
  if (message) {
    return message;
  }
  return;
}

let implictAny;
implictAny = "any";
implictAny.toUpperCase();

let nullable = echo("hi");
let nullable1: string | undefined = undefined;
let onlyNull: null | undefined = undefined;
let onlyUndefined: undefined = undefined;
if (nullable) {
  nullable.toUpperCase;
}

const newFunction = echo.bind(null, "nbice");
// applyはパラメーターに配列を入れるもの
const newFunction1 = echo.apply(null, ["hi"]);
