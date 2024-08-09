/* 6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque. */

class Carro {
    private consumo: number;
    private combustivel: number;

    constructor(consumo: number) {
        this.consumo = consumo;
        this.combustivel = 0;
    }

    // Método para simular o ato de dirigir o veículo por uma certa distância
    public andar(distancia: number): void {
        const combustivelNecessario = distancia / this.consumo;
        if (combustivelNecessario > this.combustivel) {
            console.log("Combustível insuficiente para percorrer esta distância.");
        } else {
            this.combustivel -= combustivelNecessario;
            console.log(`Percorridos ${distancia} km. Combustível restante: ${this.combustivel.toFixed(2)} litros.`);
        }
    }

    // Método para obter o nível atual de combustível
    public obterGasolina(): number {
        return this.combustivel;
    }

    // Método para adicionar combustível ao tanque
    public adicionarGasolina(quantidade: number): void {
        this.combustivel += quantidade;
        console.log(`Adicionados ${quantidade} litros de combustível. Nível atual: ${this.combustivel.toFixed(2)} litros.`);
    }
}

// Exemplo de uso
const meuCarro = new Carro(15);
meuCarro.adicionarGasolina(20);
meuCarro.andar(100);
console.log(`Combustível restante: ${meuCarro.obterGasolina().toFixed(2)} litros.`);
meuCarro.andar(300);
