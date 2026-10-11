class Log {
    constructor(id) {
        this.id = id;
    }
    message (result) {
        console.log(`[Calculator :${this.id}]:${result}`)
    }
}

module.exports = Log;