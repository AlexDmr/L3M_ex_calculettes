import { parsePlus as computeWithParenthesis } from "./calculetteParenthèses";
import { parsePlus as computeWithPriority } from "./calculettePriorités";
import { computeSimple } from "./calculetteSimple";

//__________________ Calculette super simple _____________________________________
const formCalcSS   = document.querySelector("form.calculetteSuperSimple") as HTMLFormElement;
const inputCalcSS  = document.querySelector("form.calculetteSuperSimple input") as HTMLInputElement;
const outputCalcSS = document.querySelector("form.calculetteSuperSimple output") as HTMLInputElement;

formCalcSS.onsubmit = (evt) => {
  evt.preventDefault ();
  evt.stopPropagation();
  outputCalcSS.textContent = '' + computeSimple( inputCalcSS.value );
}

//__________________ Calculette simple ___________________________________________
const formCalcS   = document.querySelector("form.calculetteSimple") as HTMLFormElement;
const inputCalcS  = document.querySelector("form.calculetteSimple input") as HTMLInputElement;
const outputCalcS = document.querySelector("form.calculetteSimple output") as HTMLInputElement;

formCalcS.onsubmit = (evt) => {
  evt.preventDefault ();
  evt.stopPropagation();
  outputCalcS.textContent = '' + computeWithPriority(inputCalcS.value);
}


//__________________ Calculette avec parenthèses _________________________________
const formCalc   = document.querySelector("form.calculette") as HTMLFormElement;
const inputCalc  = document.querySelector("form.calculette input") as HTMLInputElement;
const outputCalc = document.querySelector("form.calculette output") as HTMLInputElement;

formCalc.onsubmit = (evt) => {
  evt.preventDefault ();
  evt.stopPropagation();
  outputCalc.textContent = '' + computeWithParenthesis(inputCalc.value);
}
