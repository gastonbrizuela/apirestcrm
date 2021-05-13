const mysql = require('mysql')
//se cargan los parametros de conexion 
const mysqlConnection = mysql.createPool({
    connectionLimit : 100,
    host:'localhost',
    user:'root',
    password :'password',
    database: 'erp',
    multipleStatements: true
});
//se utiliza el metodo connect para conectarse y devuelve un error en el caso de que lo halla
mysqlConnection.getConnection((err)=>{
    if (err){
        console.log(err)
    }else{
        console.log('La conexion a la base de datos fue correcta')
    }
});

module.exports = mysqlConnection;