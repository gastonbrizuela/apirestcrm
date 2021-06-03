'use strict'
const mysqlConnection = require('../config/database')

class CrmSegmentController{
    static store(req,res){
        console.log('llega al store')
        const columns = Object.keys(req.body);
        const values = Object.values(req.body);
    
        let sql = "INSERT INTO CrmCampaignSegment (" + columns.join(" , ") +") VALUES (";
    
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
            
}

module.exports = CrmSegmentController