
module.exports = {
    entry:"./main_errorHandler",
    output:{filename :"app.js"},
    module:{
        
        rules:[
            {
                test:/.ts$/,
                loader:"ts-loader"
            }
        ]
    },
    resolve:{
        extensions:[".ts",".js"]
    }
}