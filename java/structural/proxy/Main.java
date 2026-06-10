import java.nio.file.Files;
import java.nio.file.Paths;

// =========================
// Service (simula banco)
// =========================
class ObterUsuario {

    public String getUsuario() {

        System.out.println("Buscando usuario no banco de dados...");

        
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


        // simula resposta do banco
        return """
        {
            "id": 273,
            "nome": "Pedro",
            "email": "pedro@email.com"
        }
        """;
    }
}

// =========================
// Interface (Subject)
// =========================
interface Relatorio {
    void gerar();
}

// Classe real que gera o relatório
class RelatorioFinanceiro implements Relatorio {

    private String usuario;

    public RelatorioFinanceiro(String usuario) {
        this.usuario = usuario;
    }

    @Override
    public void gerar() {

        System.out.println("\nGerando relatorio financeiro...");
        System.out.println(usuario);

    }

}


// =========================
// Proxy (GoF)
// =========================
class RelatorioProxy implements Relatorio {

    private RelatorioFinanceiro relatorioReal;
    private final ObterUsuario obterUsuario;

    // cache simples em memória (lazy loading)
    private String usuarioCache;

    public RelatorioProxy(ObterUsuario obterUsuario) {
        this.obterUsuario = obterUsuario;
    }

    @Override
    public void gerar() {

        // Lazy loading do usuário
        if (usuarioCache == null) {
            usuarioCache = obterUsuario.getUsuario();
        } else {
            System.out.println("Usuario carregado do cache.");
        }

        // Lazy loading do objeto real
        if (relatorioReal == null) {
            relatorioReal = new RelatorioFinanceiro(usuarioCache);
        }

        relatorioReal.gerar();
    }
}


// =========================
// Client
// =========================
public class Main {

    public static void main(String[] args) {

        ObterUsuario obterUsuario = new ObterUsuario();

        Relatorio relatorio = new RelatorioProxy(obterUsuario);

        // primeira chamada (vai buscar tudo)
        relatorio.gerar();

        System.out.println("\n--- Segunda chamada ---\n");

        // segunda chamada (usa cache + objeto já criado)
        relatorio.gerar();
    }
}