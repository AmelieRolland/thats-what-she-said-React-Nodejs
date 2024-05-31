// const express = require("express");
// const router = express.Router();
// const db = require('../../helpers/database');


// app.get('api/authors', (req, res) => {
//     try
//     {
//         const sqlQuery = 'SELECT * from author';
//         const result = db.query(sqlQuery);
//         res.status(200).json(result);
//         } 
//         catch(error) {
//             res.status(400).send({message: error.message});
//         }

//         res.status(200).json({id:req.params.id})
// });


// router.get('api/authors/:id', (req, res) => {
//     try
//     {
//         const sqlQuery = 'SELECT * from author where id=?';
//         const result = db.query(sqlQuery, [req.params.id]);
//         res.status(200).json(result);
//         } 
//         catch(error) {
//             res.status(400).send({message: error.message});
//         }

//         res.status(200).json({id:req.params.id})
// })

// module.exports = router;