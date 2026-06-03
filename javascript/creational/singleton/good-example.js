

// class Config {

//     constructor() {
//         this.tema = "dark";
//     }
// }

// const c1 = new Config();
// const c2 = new Config();

// console.log(c1 === c2);




class Config {

    static instance = null;

    constructor() {

        if (Config.instance) {
            return Config.instance;
        }

        this.tema = "dark";

        Config.instance = this;
    }
}



const c1 = new Config();

const c2 = new Config();

console.log(c1 === c2);