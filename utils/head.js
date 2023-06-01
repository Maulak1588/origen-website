const request = require('postman-request')

const getHeaders = (callback) => {
    request('http://localhost:3000/headers', (error,res,body) => {
        if(error) {
            console.log(error);
            return(callback)
        }
        if(res){
            if(body){
                console.log(body);
                return callback(undefined, body)
            }
            callback('no se encontraron productos')
        }
    })
}

module.exports = {
    getHeaders
}