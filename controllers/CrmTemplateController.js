'use strict'
const mysqlConnection = require('../config/database')
const puppeteer = require('puppeteer')
var keygen = require("keygenerator");

class CrmTemplateController{
    static store(req,res){
        const keyImage = keygen._();
        const ima = async () => {
            const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'});
            const page = await browser.newPage()
            await page.setViewport({
                width: 640,
                height: 1000,
              });
            await page.setContent(req.body.Html)
            await page.screenshot({path: `${process.cwd()}/assets/imageTemplate/${keyImage}.png`})
            await browser.close()
          }
        ima()
        req.body.IdImage = keyImage
        const columns = Object.keys(req.body)
        const values = Object.values(req.body)
        let sql = "INSERT INTO CrmTemplate ("+ columns.join(" , ")+") VALUES ("
        for (let i = 0; i < values.length; i++) {
            sql += "?";
            if (i !== values.length - 1) {
                sql += ",";
            }
        }
        sql+= ")";
        mysqlConnection.query(sql, values,(error,result,fields)=>{
            if (error){
                console.log(error.message)
                res.status(500).json({'error':error.message})
                return;
            }
            res.json({
                'result':req.body
            })
        })
    }
    static index(req,res){
        var sql = "select * from CrmTemplate"
        mysqlConnection.query(sql,(err,rows,fields)=>{
            if(!err){
                res.status(200).json(rows);
            }
            else{
                console.log(err)
            }
        })
    }
}

module.exports = CrmTemplateController