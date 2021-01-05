export function computeSimple(str: string): number {
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

    return result;
}
