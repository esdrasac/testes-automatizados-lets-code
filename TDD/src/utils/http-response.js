module.exports =  {
    badRequest: (res, message) => res.status(400).json(message)
}