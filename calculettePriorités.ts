export function parsePlus(str: string): number {
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

