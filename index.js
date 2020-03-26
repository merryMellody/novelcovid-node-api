const fetch = require("node-fetch");

const BASE_URL = "https://corona.lmao.ninja";

module.exports = {
  all: () => fetch(`${BASE_URL}/all`).then(a => a.json()),
  countries: (country = "") =>
    fetch(`${BASE_URL}/countries/${country}`)
      .then(a => a.json())
      .catch(() => ({ error: "Country not found" })),
  states: () => fetch(`${BASE_URL}/states`).then(a => a.json())
};
