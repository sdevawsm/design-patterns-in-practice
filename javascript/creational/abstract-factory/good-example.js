// ======================================
// ABSTRACT PRODUCTS
// ======================================

class Window {
    render() {
        throw new Error("Method not implemented");
    }
}

class Button {
    render() {
        throw new Error("Method not implemented");
    }
}

class Menu {
    render() {
        throw new Error("Method not implemented");
    }
}


// ======================================
// MAC FAMILY
// ======================================

class MacWindow extends Window {
    render() {
        console.log("🪟 Janela MacOS");
    }
}

class MacButton extends Button {
    render() {
        console.log("🔘 Botão MacOS");
    }
}

class MacMenu extends Menu {
    render() {
        console.log("📋 Menu MacOS");
    }
}


// ======================================
// LINUX FAMILY
// ======================================

class LinuxWindow extends Window {
    render() {
        console.log("🪟 Janela Linux");
    }
}

class LinuxButton extends Button {
    render() {
        console.log("🔘 Botão Linux");
    }
}

class LinuxMenu extends Menu {
    render() {
        console.log("📋 Menu Linux");
    }
}


// ======================================
// ABSTRACT FACTORY
// ======================================

class GUIFactory {

    createWindow() {
        throw new Error("Method not implemented");
    }

    createButton() {
        throw new Error("Method not implemented");
    }

    createMenu() {
        throw new Error("Method not implemented");
    }
}


// ======================================
// CONCRETE FACTORIES
// ======================================

class MacFactory extends GUIFactory {

    createWindow() {
        return new MacWindow();
    }

    createButton() {
        return new MacButton();
    }

    createMenu() {
        return new MacMenu();
    }
}

class LinuxFactory extends GUIFactory {

    createWindow() {
        return new LinuxWindow();
    }

    createButton() {
        return new LinuxButton();
    }

    createMenu() {
        return new LinuxMenu();
    }
}


// ======================================
// CLIENT
// ======================================

class Application {

    constructor(factory) {
        this.factory = factory;
    }

    render() {

        const window = this.factory.createWindow();
        const button = this.factory.createButton();
        const menu = this.factory.createMenu();

        console.log("Renderizando interface:");

        window.render();
        button.render();
        menu.render();

        console.log("-------------------");
    }
}


// ======================================
// USO
// ======================================

console.log("=== MAC ===");

let factory = new MacFactory();

let app = new Application(factory);

app.render();


console.log("=== LINUX ===");

factory = new LinuxFactory();

app = new Application(factory);

app.render();