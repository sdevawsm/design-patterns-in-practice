import java.util.ArrayList;
import java.util.List;



class Arquivo {

    private String nome;

    //construtor
    public Arquivo(String nome) {
        this.nome = nome;
    }

    public void mostrar() {
        System.out.println("Arquivo: " + nome);
    }

}

class Pasta {

    private String nome;

    List<Arquivo> arquivos = new ArrayList<>();

    //construtor
    public Pasta(String nome) {
        this.nome = nome;
    }

    public void mostrar() {

        System.out.println("\nConteudo da pasta: " + nome);

        for (Arquivo arquivo : arquivos) {
            arquivo.mostrar();
        }

    }

    public void adicionar(Arquivo arquivo) {
        arquivos.add(arquivo);
    }

}


// Exemplo ruim: a classe Pasta depende diretamente 
// da classe Arquivo, o que torna difícil adicionar outros tipos de itens 
// (como pastas dentro de pastas) sem modificar a classe Pasta.
public class BadExample {

    public static void main(String[] args) {

        Arquivo arquivo1 = new Arquivo("contrato.pdf");

        //arquivo1.mostrar();

        Arquivo arquivo2 = new Arquivo("foto.jpg");
        Arquivo arquivo3 = new Arquivo("notas.txt");

        Pasta pasta = new Pasta("Minha Pasta");

        pasta.adicionar(arquivo1);
        pasta.adicionar(arquivo2);
        pasta.adicionar(arquivo3);

        pasta.mostrar();

    }

}