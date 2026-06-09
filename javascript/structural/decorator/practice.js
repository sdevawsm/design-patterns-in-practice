//
    class LimparCasaInterface{
        limpar(){
            throw new Error("Method not implemented");
        } 
    }


    //comportamento padrão
    class limparSala extends LimparCasaInterface {

        modulo = "Está limpando a sala"

        limpar(modulo){
            this.modulo = modulo
            console.log(modulo)
        }
    }

    // class limparQuarto{
    //     limpar(){
    //         console.log("Está limpando a sala")
    //     }
    // }



    class decoratorQuarto extends LimparCasaInterface{
        constructor(sala){
            super();
            this.sala = sala
        }

        limpar(){
            this.sala("Está limpando o quarto")
        }
    }
    

    




let tarefa = new  limparSala();
tarefa.limpar()

tarefa = new decoratorQuarto(tarefa)
tarefa.limpar()