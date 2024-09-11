class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        this.recintos = [
            new CriaRecintos(1, "Savana", 10, 3, false),
            new CriaRecintos(2, "Floresta", 5, 0, true),
            new CriaRecintos(3, "Savana e Rio", 7, 2, false),
            new CriaRecintos(4, "Rio", 8, 0, true),
            new CriaRecintos(5, "Savana", 9, 3, true)
        ];
        this.animal = animal.toLowerCase();
        this.quantidade = quantidade;
        const animalValido = this.validaAnimal(animal.toLowerCase());

        if(animalValido === false) {
            console.log("Animal Inválido");
            return;
        }

        const quantidadeValida = this.validaQuantidade(quantidade);
        if(quantidadeValida === false) {
            console.log("Quantidade Invalida");
        }

        if(animalValido && quantidadeValida) {
            const remessa =  this.verificarTamanhoAnimal(this.animal, this.quantidade);
            this.verificar = this.verificar(this.animal, remessa);
            console.log(this.verificar)
        }
    }

    verificar(animal, remessa) {
        if(animal === "leão") {
            this.recintos[4].animaisExistentes += remessa;
            if(this.recintos[4].animaisExistentes > this.recintos[4].tamanhoTotal) {
                return "Não há recintos disponíveis";
            } else {
                let espacoLivre = this.recintos[4].tamanhoTotal - this.recintos[4].animaisExistentes;
                return {
                    recintosViaveis: [
                        `Recinto 5 (espaço livre: ${espacoLivre} total: ${this.recintos[4].animaisExistentes}) `
                    ]
                }
            }
        }

        if(animal === "leopardo") {
            console.log("Animais carnívoros devem habitar somente com a própria espécie");
            return "Não há recintos disponíveis";
        }

        if(animal === "crocodilo") {
            this.recintos[3].animaisExistentes += remessa;
            if(this.recintos[3].animaisExistentes > this.recintos[3].tamanhoTotal) {
                return "Não há recintos disponíveis";
            } else {
                let espacoLivre = this.recintos[3].tamanhoTotal - this.recintos[3].animaisExistentes;
                return {
                    recintosViaveis: [
                        `Recinto 4 (espaço livre: ${espacoLivre} total : ${this.recintos[3].tamanhoTotal}) `
                    ]
                }
            }
        }

        if(animal === "macaco") {

            const recintosPossiveis = {
                recintosViaveis : [
        
                ]
            }

            this.recintos[0].animaisExistentes += remessa;
            this.recintos[1].animaisExistentes += remessa;
            this.recintos[2].animaisExistentes += (remessa + 1);

            if(this.recintos[0].animaisExistentes <= this.recintos[0].tamanhoTotal) {
                let espacoLivre = this.recintos[0].tamanhoTotal - this.recintos[0].animaisExistentes;
                recintosPossiveis.recintosViaveis.push(`Recinto 1 (espaço livre: ${espacoLivre} total : ${this.recintos[0].tamanhoTotal})`);
            }

            if(this.recintos[1].animaisExistentes <= this.recintos[1].tamanhoTotal && remessa !== 1) {
                let espacoLivre = this.recintos[1].tamanhoTotal - this.recintos[1].animaisExistentes;
                recintosPossiveis.recintosViaveis.push(`Recinto 2 (espaço livre: ${espacoLivre} total : ${this.recintos[1].tamanhoTotal})`);
            }

            if(this.recintos[2].animaisExistentes <= this.recintos[2].tamanhoTotal) {
                let espacoLivre = this.recintos[2].tamanhoTotal - this.recintos[2].animaisExistentes;
                recintosPossiveis.recintosViaveis.push(`Recinto 3 (espaço livre: ${espacoLivre} total : ${this.recintos[2].tamanhoTotal})`);
            }

            if(recintosPossiveis.recintosViaveis.length === 0) {
                return "Não há recintos disponíveis";
            }

            return recintosPossiveis;
        }

        if(animal === "gazela") {

            const recintosPossiveis = {
                recintosViaveis : [

                ]
            }

            this.recintos[0].animaisExistentes += (remessa + 1);
            this.recintos[2].animaisExistentes += remessa;

            if(this.recintos[0].animaisExistentes <= this.recintos[0].tamanhoTotal) {
                let espacoLivre = this.recintos[0].tamanhoTotal - this.recintos[0].animaisExistentes;
                recintosPossiveis.recintosViaveis.push(`Recinto 1 (espaço livre: ${espacoLivre} total : ${this.recintos[0].tamanhoTotal})`);
            }

            if(this.recintos[2].animaisExistentes <= this.recintos[2].tamanhoTotal) {
                let espacoLivre = this.recintos[2].tamanhoTotal - this.recintos[2].animaisExistentes;
                recintosPossiveis.recintosViaveis.push(`Recinto 3 (espaço livre: ${espacoLivre} total : ${this.recintos[2].tamanhoTotal})`);
            }

            if(recintosPossiveis.recintosViaveis.length === 0) {
                return "Não há recintos disponíveis";
            }

            return recintosPossiveis;
        }

        if(animal === "hipopotamo") {
            
            const recintosPossiveis = {
                recintosViaveis: [

                ]
            }

            this.recintos[2].animaisExistentes += (remessa +1);
            this.recintos[3].animaisExistentes += remessa;

            if(this.recintos[2].animaisExistentes <= this.recintos[2].tamanhoTotal) {
                let espacoLivre = this.recintos[2].tamanhoTotal - this.recintos[2].animaisExistentes;
                recintosPossiveis.recintosViaveis.push(`Recinto 3 (espaço livre: ${espacoLivre} total : ${this.recintos[2].tamanhoTotal})`);
            }

            if(this.recintos[3].animaisExistentes <= this.recintos[3].tamanhoTotal) {
                let espacoLivre = this.recintos[3].tamanhoTotal - this.recintos[3].animaisExistentes;
                recintosPossiveis.recintosViaveis.push(`Recinto 4 (espaço livre: ${espacoLivre} total : ${this.recintos[3].tamanhoTotal})`);
            }

            if(recintosPossiveis.recintosViaveis.length === 0) {
                return "Não há recintos disponíveis";
            }

            return recintosPossiveis;
        }

    }

    verificarTamanhoAnimal(animal, quantidade) {
        let multiplicadorAnimal = 0;
        if(animal === "macaco") {
            return quantidade;
        }

        if(animal === "gazela" || animal === "leopardo") {
            multiplicadorAnimal = 2;
        }

        if(animal === "crocodilo" || animal === "leão") {
            multiplicadorAnimal = 3;
        }

        if(animal === "hipopotamo") {
            multiplicadorAnimal = 4;
        }

         return quantidade * multiplicadorAnimal;
    }

    validaQuantidade(quantidade) {
        if(isNaN(quantidade) || quantidade == "" || quantidade == 0) {
            quantidade = false;
            return quantidade;
        }

        return true;
    }

    validaAnimal(animalEnviado) {
        const animais = ["leão", "leopardo", "crocodilo", "macaco", "gazela", "hipopotamo"];
        let animalValido = false;

        for (let animal of animais) {
            if (animalEnviado === animal) {
                animalValido = true;
                return animalValido;
            }
        }

        if(animalValido === false) return false;
    }

}

export { RecintosZoo as RecintosZoo };

class CriaRecintos {
    constructor(id, bioma, tamanhoTotal, animaisExistentes) {
        this.id = id;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = animaisExistentes;
    }
}

const zoo = new RecintosZoo().analisaRecintos("crocodilo", 2);

 

