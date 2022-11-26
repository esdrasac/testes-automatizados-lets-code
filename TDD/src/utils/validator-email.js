module.exports = (email) => {
    if(!email) {
        return false
    }

    const isValid = new RegExp(/^[A-z0-9\.\-]{1,}\@(\w{2,}\.)+[A-z]{2,}$/)

    return isValid.test(email)
}