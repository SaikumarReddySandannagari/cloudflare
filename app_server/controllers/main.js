module.exports.index = function(req, res, next) 
{
    res.render('index');
};

module.exports.random = function(req,res,next)
{
    min=1;
    max=101;
    fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then((response) => {
    return response.json();
    })
   .then((data) => {
    d1=data.variants[0]
    d2=data.variants[1]
  
    a=Math.floor(Math.random() * (max - min) + min);
    if(a<=50){
        res.redirect(d1)
    }
    if(a>50){
       res.redirect(d2)
    }
    
});
};
