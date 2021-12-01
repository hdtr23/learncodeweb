import db from '../models/index';

let getHomePage = async(req,res)=>{
    try{
        let data = await db.User.findAll();
        console.log('---------------------');
        console.log(data);
        console.log('---------------------');
        return res.render('home.ejs',{
            data: JSON.stringify(data)
        });
    }catch(e){ console.log(e); }
   
    
}

module.exports = {
    getHomePage: getHomePage
}