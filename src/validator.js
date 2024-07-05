export class Validator {
    validateUsername(name) {
        return /^(?!.*[\d]{3})[^0-9_-][a-zA-Z0-9-_]+[^0-9_-]$/.test(name);
    }
}

const nick = new Validator();

console.log(nick.validateUsername('qweqw32e-rw-e-q_q1we'));

