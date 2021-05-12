'use strict'
const { response } = require('express');
const mysqlConnection = require('../config/database')

class CustomerController{
    static index(req,res){
        console.log('entra al pagina')
        const limit = parseInt(req.query.limit, 10)
        const page = parseInt(req.query.page, 10)
        const offset = (page-1)*limit
        var sql = "select Code, NameOne, LastNameTwo,Sex,ChargeDate,Email from Customer where LastNameTwo is not Null limit " +limit+ " OFFSET "+ offset
        mysqlConnection.query(sql,(err,rows,fields)=>{
            if(!err){
                console.log('finaliza el pagina')
                res.status(200).json(rows);
            }else{
                console.log(err)
            }
        })
    }
    static  search(req,res){
        console.log('entra al req de dos funciones')
        var id = req.params['id']
        var sql =   `select Name,Code,Email,Phone,Mobile,NameOne,LastNameTwo,Birthdate,Sex from Customer where Code = '${id}';
                     select avg(Total) as avgtotal, sum(Total) sumtotal,count(Total) counttotal, SUM(If(Year(TransDate)>=YEAR(CURDATE()),1,0)) counttotalyear,SUM(If(Year(TransDate)>=YEAR(CURDATE()),Total,0)) sumtotalyear,
                     max(TransDate) as maxtransdate
                     from Invoice where CustCode = '${id}'
                        and Year(TransDate)> 2017 `
        mysqlConnection.query(sql,(err,result,fields)=>{
            if(!err){
                console.log('finaliza el reques de dos funciones ')
                res.status(200).json(result);
            }else{
                console.log(err)
            }
        })
        req.connection.on('close',function(){
            console.log('cancelacion del usuario')
        })
    }
    
}

module.exports =  CustomerController