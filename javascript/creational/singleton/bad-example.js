
class Config {

    constructor() {
        this.tema = "dark";
    }
}

const c1 = new Config();
const c2 = new Config();

console.log(c1 === c2);