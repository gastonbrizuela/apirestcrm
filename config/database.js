const mysql = require('mysql')
//se cargan los parametros de conexion 
const mysqlConnection = mysql.createConnection({
    host:'100.100.100.4',
    user:'openorange',
    password :'cosmetica1533',
    database: 'erp'
});
//se utiliza el metodo connect para conectarse y devuelve un error en el caso de que lo halla
mysqlConnection.connect((err)=>{
    if (err){
        console.log(err)
    }else{
        console.log('La conexion a la base de datos fue correcta')
    }
});

module.exports = mysqlConnection;