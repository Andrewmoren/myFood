import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calculator from "./modules/calculator";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
  const modalTimerID = setTimeout(
    () => openModal(".modal", modalTimerID),
    50000
  );
  tabs();
  modal("[data-modal]", ".modal", modalTimerID);
  timer();
  cards();
  calculator();
  forms(modalTimerID);
  slider();
});
