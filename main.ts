
//__________________ Calculette super simple _____________________________________
const formCalcSS   = document.querySelector("form.calculetteSuperSimple") as HTMLFormElement;
const inputCalcSS  = document.querySelector("form.calculetteSuperSimple input") as HTMLInputElement;
const outputCalcSS = document.querySelector("form.calculetteSuperSimple output") as HTMLInputElement;

formCalcSS.onsubmit = (evt) => {
  evt.preventDefault ();
  evt.stopPropagation();
  const str = inputCalcSS.value;

  const operators = str.split(/[0-9]+/).map( s => s.trim() );
  operators.pop();
  const operandes = str.split(/\+|\-|\/|\*/).map( parseFloat );
  const result: number = operators.reduce(
    (acc, op, i) => {
                      const v = operandes[i];
                      switch (op) {
                        case '':
                        case '+': return acc + v;
                        case '-': return acc - v;
                        case '*': return acc * v;
                        case '/': return acc / v;
                      }
                    },
    0
  );


  outputCalcSS.textContent = '' + result;
}

//__________________ Calculette simple ___________________________________________
const formCalcS   = document.querySelector("form.calculetteSimple") as HTMLFormElement;
const inputCalcS  = document.querySelector("form.calculetteSimple input") as HTMLInputElement;
const outputCalcS = document.querySelector("form.calculetteSimple output") as HTMLInputElement;


function parsePlusS(str: string): number {
  const [op1, ...L] = str.split('+').map( parseMinusS );
  return L.reduce( (acc, v) => acc + v, op1);
}

function parseMinusS(str: string): number {
  const [op1, ...L] = str.split('-').map( parseDivS );
  return L.reduce( (acc, v) => acc - v, op1);
}

function parseDivS(str: string): number {
  const [op1, ...L] = str.split('/').map( parseMultS );
  return L.reduce( (acc, v) => acc / v, op1);
}

function parseMultS(str: string): number {
  const [op1, ...L] = str.split('*').map( parseFloat );
  return L.reduce( (acc, v) => acc * v, op1 || 0);
}

formCalcS.onsubmit = (evt) => {
  evt.preventDefault ();
  evt.stopPropagation();
  const str = inputCalcS.value;
  outputCalcS.textContent = '' + parsePlusS(str);
}


//__________________ Calculette avec parenthèses _________________________________
const formCalc   = document.querySelector("form.calculette") as HTMLFormElement;
const inputCalc  = document.querySelector("form.calculette input") as HTMLInputElement;
const outputCalc = document.querySelector("form.calculette output") as HTMLInputElement;

function split(str: string, op: string): string[] {
  let nb = 0;
  const L: string[] = [];
  let current = '';
  for(let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    switch(c) {
      case ' ': break;
      case '(': nb++; current += c; break;
      case ')': nb--; current += c; break;
      default:
        if (nb === 0 && c === op) {
          L.push(current);
          current = '';
        } else {
          current += c;
        }
    }
  }
  return [...L, current];
}

function parsePlus(str: string): number {
  const [op1, ...L] = split(str, '+').map( parseMinus );
  return L.reduce( (acc, v) => acc + v, op1);
}

function parseMinus(str: string): number {
  const [op1, ...L] = split(str, '-').map( parseDiv );
  return L.reduce( (acc, v) => acc - v, op1);
}

function parseDiv(str: string): number {
  const [op1, ...L] = split(str, '/').map( parseMult );
  return L.reduce( (acc, v) => acc / v, op1);
}

function parseMult(str: string): number {
  const [op1, ...L] = split(str, '*').map( parseExpr );
  return L.reduce( (acc, v) => acc * v, op1 || 0);
}

function parseExpr(str: string): number {
  if (str.charAt(0) === '(' ) {
    console.log("récusrsion avec", str.slice(1, -1));
    return parsePlus( str.slice(1, -1) );
  } else {
    return parseFloat( str );
  }
}

formCalc.onsubmit = (evt) => {
  evt.preventDefault ();
  evt.stopPropagation();
  const str = inputCalc.value;
  outputCalc.textContent = '' + parsePlus(str);
}
