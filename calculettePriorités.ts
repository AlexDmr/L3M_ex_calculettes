/*
 * On va découper la chaîne de caractère en commençant par l'opérateur le moins prioritaire.
 * On choisit ici d'utiliser l'opérateur PLUS (MOINS aurait tout aussi bien fonctionné).
 * On fois le texte découpé selon les PLUS, on passe les sous blocs à la fonction parseMinusS.
 * Cette dernière découpe selon l'opérateur MOINS et passe les sous blocs à parseDivs qui opère
 * de la même manière avec l'opérateur DIVISER et passe les sous bloc à la fonction parseMult.
 * ParseMultS enfin découpe selon MULTIPLIER, les sous blocs restant doivent alors représenter
 * des nombres qu'il faut traduire en type number à l'aide par exemple de la fonction parseFloat.
 */

export function parsePlus(str: string): number {
    return 0;
  }
  
  function parseMinusS(str: string): number {
    return 0;
  }
  
  function parseDivS(str: string): number {
    return 0;
  }
  
  function parseMultS(str: string): number {
    return 0;
  }

