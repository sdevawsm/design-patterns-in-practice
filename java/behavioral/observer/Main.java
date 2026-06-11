import java.util.ArrayList;
import java.util.List;

// // Observer
interface Observer {
    void update();
}

// Concrete Observer
class EnviarEmailObserver implements Observer {

    @Override
    public void update() {
        System.out.println("Enviando email...");
    }
}

// Concrete Observer
class AtualizarEstoqueObserver implements Observer {

    @Override
    public void update() {
        System.out.println("Atualizando estoque...");
    }
}

// Concrete Observer
class GerarNotaFiscalObserver implements Observer {

    @Override
    public void update() {
        System.out.println("Gerando nota fiscal...");
    }
}

// Subject 
class Pedido {

    private List<Observer> observers = new ArrayList<>();

    public void adicionarObserver(Observer observer) {
        observers.add(observer);
    }

    // public void removerObserver(Observer observer) {
    //     observers.remove(observer);
    // }

    private void notificarObservers() {
        for (Observer observer : observers) {
            observer.update();
        }
    }

    public void realizarPedido() {

        System.out.println("Pedido realizado com sucesso!");

        // Notifica todos os interessados
        notificarObservers();
    }
}

public class Main {

    public static void main(String[] args) {

        Pedido pedido = new Pedido();

        // Cadastro dos observadores
        pedido.adicionarObserver(new EnviarEmailObserver());
        pedido.adicionarObserver(new AtualizarEstoqueObserver());
        pedido.adicionarObserver(new GerarNotaFiscalObserver());

        // // Evento
        pedido.realizarPedido();
    }
}