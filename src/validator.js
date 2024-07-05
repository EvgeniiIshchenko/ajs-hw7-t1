export class Validator {
    validateUsername(name) {
        return /^[A-Za-z][-\w]+[A-Za-z]$/i.test(name) &&
        !/\d{4,}/.test(name);
    }
}
