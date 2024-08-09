/* 1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador. */


class Contador {
    private valor: number;
  
    constructor() {
      this.valor = 0;
    }
  
    // Método para zerar o contador
    public zerar(): void {
      this.valor = 0;
    }
  
    // Método para incrementar o contador
    public incrementar(): void {
      this.valor += 1;
    }
  
    // Método para retornar o valor do contador
    public obterValor(): number {
      return this.valor;
    }
  }
  
  // Exemplo de uso da classe Contador
  const contador = new Contador();
  contador.incrementar();
  console.log(contador.obterValor()); // Saída: 1
  contador.zerar();
  console.log(contador.obterValor()); // Saída: 0
  