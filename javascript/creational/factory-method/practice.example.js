
//contrato tem que implementar
class Window{
    createWindow(){
        throw new Error('Method not implemented');
    }
}


class MacWindow extends Window{
    createWindow(){
        console.log('Criando janela para MacOS');
    }
}

class LinuxWindow extends Window{
    createWindow(){
        console.log('Criando janela para Linux');
    }
}

//Factory
class WindowFactory{
    createWindow(){
       throw new Error('Method not implemented');
    }

    exibirJanela(){
      const window = this.createWindow();

      window.createWindow();
    }

}

//Concrete Factory
class MacFactory extends WindowFactory{
    createWindow(){
        return new MacWindow();
    }
}


class LinuxFactory extends WindowFactory{
    createWindow(){
        return new LinuxWindow();
    }
}



let factory = new MacFactory();
factory.exibirJanela();


factory = new LinuxFactory();
factory.exibirJanela();





