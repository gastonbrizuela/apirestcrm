'use strict'
const { response } = require('express');
const mysqlConnection = require('../config/database')


class CrmCampaignControllers {
    static index(req,res){
        console.log('llega al campaign')
        var sql = "select * from CrmCampaign"
        mysqlConnection.query(sql,(err,rows,fields)=>{
            if(!err){
                res.status(200).json(rows);
            }else{
                console.log(err)
            }
        })
    }
    static store(req,res){
    console.log('llega donde guarda los datos')
    console.log('llega donde guarda los datos dos')
    const columns = Object.keys(req.body);
    const values = Object.values(req.body);

    let sql = "INSERT INTO CrmCampaign (" + columns.join(" , ") +") VALUES (";

    for (let i = 0; i < values.length; i++) {
        sql += "?";
        if (i !== values.length - 1) {
            sql += ",";
        }
    }
    sql+= ")";
    mysqlConnection.query(sql, values, (error, result, fields) => {
    if (error){
        console.log(error.message)
        res.status(500).json({'error': error.message})
        return;
    }else{res.json({
        'exercise': req.body
    })}

    }); 
        }
    static search(req,res){
            var id = req.params['id']
            var sql = `select * from CrmCampaign where internalId = ${id} `
            mysqlConnection.query(sql,(err,rows,fields)=>{
                if(!err){
                    res.status(200).json(rows);
                }else{
                    console.log(err)
                }
            })
        }
    static delete(req,res){
        var id = req.params['id']
        var sql = `delete from CrmCampaign where internalId = ${id}`
        mysqlConnection.query(sql,(err,rows,fields)=>{
            if(!err){
                res.status(200)
            }else{
                console.log()
            }
        })
    }
    
}

module.exports =  CrmCampaignControllers