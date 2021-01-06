/*
 * Cela fonctionne de manière très similaire à l'exervice précédent (calculette avec priorité des opérateurs).
 * Utilisez la fonction split à la place de la méthode split des chaînes de caractères.
 * Utilisez la fonction parseExpr (définit à la fin de ce fichier) à la place de la fonction parseFloat.
 * Ces fonctions gèrent les parentèses pour vous, vous pouvez les lire pour voir comment elle fonctionnent.
 * N'hésitez pas à mettre des points d'arrêts via le debugger pour suivre le déroulement du programme.
 */


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
  
  export function parsePlus(str: string): number {
    return 0;
  }
  
  function parseMinus(str: string): number {
    return 0;
  }
  
  function parseDiv(str: string): number {
    return 0;
  }
  
  function parseMult(str: string): number {
    return 0;
  }
  
  function parseExpr(str: string): number {
    if (str.charAt(0) === '(' ) {
      console.log("récusrsion avec", str.slice(1, -1));
      return parsePlus( str.slice(1, -1) );
    } else {
      return parseFloat( str );
    }
  }