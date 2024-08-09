/* 5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba. */


class BombaCombustivel {
    private tipoCombustivel: string;
    private valorLitro: number;
    private quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    public abastecerPorValor(valor: number): void {
        const litros = valor / this.valorLitro;
        if (litros > this.quantidadeCombustivel) {
            console.log("Combustível insuficiente na bomba.");
        } else {
            this.quantidadeCombustivel -= litros;
            console.log(`Abastecidos ${litros.toFixed(2)} litros.`);
        }
    }

    public abastecerPorLitro(litros: number): void {
        const valor = litros * this.valorLitro;
        if (litros > this.quantidadeCombustivel) {
            console.log("Combustível insuficiente na bomba.");
        } else {
            this.quantidadeCombustivel -= litros;
            console.log(`Valor a pagar: €${valor.toFixed(2)}.`);
        }
    }

    public alterarValor(novoValor: number): void {
        this.valorLitro = novoValor;
        console.log(`Novo valor por litro: €${this.valorLitro.toFixed(2)}.`);
    }

    public alterarCombustivel(novoCombustivel: string): void {
        this.tipoCombustivel = novoCombustivel;
        console.log(`Novo tipo de combustível: ${this.tipoCombustivel}.`);
    }

    public alterarQuantidadeCombustivel(novaQuantidade: number): void {
        this.quantidadeCombustivel = novaQuantidade;
        console.log(`Nova quantidade de combustível: ${this.quantidadeCombustivel.toFixed(2)} litros.`);
    }
}


const bomba = new BombaCombustivel("Gasolina", 1.50, 500);

bomba.abastecerPorValor(30);
bomba.abastecerPorLitro(20); 
bomba.alterarValor(1.60); 
bomba.alterarCombustivel("Diesel");
bomba.alterarQuantidadeCombustivel(300);

