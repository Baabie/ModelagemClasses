/* 3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo. */

class ContaCorrente {
        private numeroConta: string;
        private nomeCorrentista: string;
        private saldo: number;
    
        constructor(numeroConta: string, nomeCorrentista: string, saldo: number = 0) {
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;
        }
    
        // Método para alterar o nome do correntista
        public alterarNome(novoNome: string): void {
        this.nomeCorrentista = novoNome;
        }
    
        // Método para realizar um depósito
        public deposito(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
        }
    
        // Método para realizar um saque
        public saque(valor: number): void {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
        } else if (valor > 0) {
            console.log("Saldo insuficiente para o saque.");
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
        }
    
        // Método para obter o saldo atual
        public obterSaldo(): number {
        return this.saldo;
        }
    
        // Método para obter os dados da conta
        public obterDadosConta(): string {
        return `Conta: ${this.numeroConta}, Nome: ${this.nomeCorrentista}, Saldo: ${this.saldo}`;
        }
    }
    
    
    const minhaConta = new ContaCorrente('12345-6', 'João Silva');
    console.log(minhaConta.obterDadosConta());
    minhaConta.deposito(1000);
    console.log(minhaConta.obterSaldo());
    minhaConta.saque(500);
    console.log(minhaConta.obterSaldo());
    minhaConta.alterarNome('João Souza');
    console.log(minhaConta.obterDadosConta());