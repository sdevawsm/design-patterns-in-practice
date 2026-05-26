# Design Patterns in Practice

Repositório para estudo e implementação de Design Patterns em:

- JavaScript
- PHP
- Java

---

# Sobre este repositório

Este projeto organiza e exemplifica os 23 padrões clássicos do Gang of Four, agrupados em três categorias principais. Além disso, destacamos os padrões mais importantes para estudar primeiro e os menos importantes para aprofundar depois.

---

# Categorias de Padrões de Projeto

Os padrões de projeto são organizados em três grandes categorias:

- **Criacionais** — definem como criar objetos e instâncias de forma adequada.
- **Estruturais** — definem como montar classes e objetos em estruturas mais complexas.
- **Comportamentais** — definem como objetos interagem e assumem responsabilidades.

## Criacionais

Padrões criacionais focam na construção e na configuração de objetos, permitindo que o código cliente continue desacoplado de implementações concretas.

- Abstract Factory
- Builder
- Factory Method
- Prototype
- Singleton

## Estruturais

Padrões estruturais lidam com a composição de objetos e classes, equilibrando flexibilidade, eficiência e simplicidade na arquitetura.

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

## Comportamentais

Padrões comportamentais tratam da comunicação entre objetos, do encapsulamento de algoritmos e do controle de fluxo dentro do sistema.

- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

---

# Prioridade de estudo

Nem todos os padrões precisam ser estudados na mesma ordem. Aqui está uma sugestão com as prioridades de aprendizado.

## Mais importantes

Estes são os padrões mais usados e com maior aplicabilidade prática em projetos do dia a dia.

1. Strategy
2. Template Method
3. Factory Method
4. Abstract Factory
5. Builder
6. Singleton
7. Adapter
8. Facade
9. Decorator
10. Proxy
11. Composite
12. Observer
13. Command
14. Chain of Responsibility
15. State

## Menos importantes

Estes padrões são igualmente relevantes, mas costumam aparecer em domínios mais específicos ou em sistemas maiores e mais maduros.

- Prototype
- Bridge
- Flyweight
- Interpreter
- Iterator
- Mediator
- Memento
- Visitor

---

# Por que essa organização?

- **Criacionais** ajudam a evitar acoplamento direto com classes concretas e facilitam testes e manutenção.
- **Estruturais** tornam o design do sistema mais modular e permitem adicionar comportamentos sem alterar clientes existentes.
- **Comportamentais** melhoram a comunicação entre objetos e tornam o fluxo de execução mais previsível e extensível.

---

# Estrutura do repositório

```txt
design-patterns-in-practice/
│
├── java/
│   ├── behavioral/
│   ├── creational/
│   └── structural/
├── javascript/
│   ├── behavioral/
│   ├── creational/
│   └── structural/
├── php/
│   ├── behavioral/
│   ├── creational/
│   └── structural/
└── docs/
    ├── diagrams/
    └── notes/
```




```bash
mkdir -p design-patterns-in-practice/javascript/behavioral/{chain-of-responsibility,command,interpreter,iterator,mediator,memento,observer,state,strategy,template-method,visitor}

mkdir -p design-patterns-in-practice/javascript/creational/{abstract-factory,builder,factory-method,prototype,singleton}

mkdir -p design-patterns-in-practice/javascript/structural/{adapter,bridge,composite,decorator,facade,flyweight,proxy}

mkdir -p design-patterns-in-practice/php/behavioral/{chain-of-responsibility,command,interpreter,iterator,mediator,memento,observer,state,strategy,template-method,visitor}

mkdir -p design-patterns-in-practice/php/creational/{abstract-factory,builder,factory-method,prototype,singleton}

mkdir -p design-patterns-in-practice/php/structural/{adapter,bridge,composite,decorator,facade,flyweight,proxy}

```