import java.util.ArrayList;
import java.util.List;




// Componente
interface Item {

    void mostrar();

}

// Composto ((leaf)
class Arquivo implements Item {

    private String nome;

    public Arquivo(String nome) {
        this.nome = nome;
    }

    @Override
    public void mostrar() {
        System.out.println(nome);
    }

}


class Pasta implements Item {

    private String nome;

    private List<Item> itens = new ArrayList<>();

    public Pasta(String nome) {
        this.nome = nome;
    }

    public void adicionar(Item item) {
        itens.add(item);
    }

    @Override
    public void mostrar() {

        System.out.println("Pasta: " + nome);

        for (Item item : itens) {
            item.mostrar();
        }

    }

}



public class Main {

    public static void main(String[] args) {

        Arquivo contrato = new Arquivo("contrato.pdf");
        Arquivo notas = new Arquivo("notas.txt");
        Arquivo foto = new Arquivo("foto.jpg");

        Pasta documentos = new Pasta("Documentos");
        documentos.adicionar(contrato);
        documentos.adicionar(notas);

        Pasta imagens = new Pasta("Imagens");
        imagens.adicionar(foto);

        Pasta raiz = new Pasta("Raiz");

        raiz.adicionar(documentos);
        raiz.adicionar(imagens);

        raiz.mostrar();

    }

}