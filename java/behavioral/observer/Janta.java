import java.util.ArrayList;
import java.util.List;

// Observer Pattern - Janta

interface Observer {
    void informar();
}


// Observer Concrete

class Mae implements Observer   {
    public void informar(){
        System.out.println("Mamae terminei a janta...");
    }
}


class Irma implements Observer{
    public void informar(){
        System.out.println("Irma terminei a janta...");
    }
}


class Pai implements Observer   {
    public void informar(){
        System.out.println("Pai terminei a janta...");
    }
}


class Cachorro implements Observer{
    public void informar(){
        System.out.println("Cachorro terminei a janta...");
    }
}





//Ação a ser tomada 
class FazerAJantaService{

    List<Observer> observers = new ArrayList<>();

    private void chamarPessoasQueEstaoObservando(){
        System.out.println("chamando as pessoas que estão observando...");

        for (Observer observer : observers) {
            observer.informar();
        }
    }


    public void terminado(){
        System.out.println("terminei a janta...");


        chamarPessoasQueEstaoObservando(); 
    }

}



    
class Janta{

    public static void main(String[] args) {
        
        FazerAJantaService fazerAJantaService = new FazerAJantaService();

        //Adicionr os observadores
        fazerAJantaService.observers.add(new Mae());
        fazerAJantaService.observers.add(new Irma());
        fazerAJantaService.observers.add(new Pai());
        fazerAJantaService.observers.add(new Cachorro());  

        fazerAJantaService.terminado();
    }

}


