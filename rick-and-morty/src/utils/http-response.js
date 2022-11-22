module.exports = {
    success: (res, data) => {
        res.status(200).json(data)
    },
    serverError: (res, error) => {
        res.status(error?.status || 500).json({ message: error.message || 'Server Error'})
    } 
}