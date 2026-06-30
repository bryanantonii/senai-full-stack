class Carro {
    marca: string;
    modelo: string;
    ano: number;

    
    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(): void{
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }

}

let carro1 = new Carro("Fiat", "Uno", 1996);
carro1.exibirDetalhes();