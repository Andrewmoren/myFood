document.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs");
  const modal = require("./modules/modal");
  const timer = require("./modules/timer");
  const cards = require("./modules/cards");
  const calculator = require("./modules/calculator");
  const forms = require("./modules/forms");
  const slider = require("./modules/slider");

  tabs();
  modal();
  timer();
  cards();
  calculator();
  forms();
  slider();
});
