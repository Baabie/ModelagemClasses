/* 2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor */

class Bola {
  private cor: string;
  private circunferencia: number;
  private material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }

  // Método para trocar a cor da bola
  public trocarCor(novaCor: string): void {
    this.cor = novaCor;
  }

  // Método para mostrar a cor atual da bola
  public mostrarCor(): string {
    return this.cor;
  }
}

// Exemplo de uso da classe Bola
const minhaBola = new Bola("vermelha", 30, "couro");
console.log(minhaBola.mostrarCor()); // Saída: vermelha
minhaBola.trocarCor("azul");
console.log(minhaBola.mostrarCor()); // Saída: azul
