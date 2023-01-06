import db from '../models/index';
let getHomePage= async (req, res) => {
    try {
        let data = await db.User.findALL();
        console.log('-----------------------');
        console.log(data)
        console.log('------------------------');
        return res.render("homePage.ejs");
    } catch (e) {
        console.log(e)
    }
 let getAboutPage = (req,res )=>{
    return res.send('test/about.ejs');
}

// object :{
//key:'',
//value:''
//}
module.exports ={
    getHomePage: getHomePage,
    getAboutPage: getAboutPage

}
}