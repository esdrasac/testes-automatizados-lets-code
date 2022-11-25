class DependencyInjection {
    constructor(request) {
        this.request = request
    }

    run() {
        const res = this.request.fn()
        return res
    }
}

module.exports = DependencyInjection