exports.getReqMock = (body) => {
    return {
        body: body || {}
    }
}

exports.getResMock = () => {
    return {
        status: (status) => {
            return {
                json: (obj) => {
                    return {
                        data: obj,
                        status
                    }
                } 
            }
        }
    }
}

exports.getResponses = () => {
    return {
        invalidEmail: {
            message: 'Email is not provided or is invalid'
        },
        invalidPassword: {
            message: 'Password is not provided'
        },
        invalidCredentials: {
            message: 'Credenciais inválidas'
        },
        successBody: {
            token: 'any_token'
        }
    }
}