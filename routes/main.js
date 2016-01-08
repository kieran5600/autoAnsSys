
module.exports=function(app)
{
	
app.get('/',function(req,res){
res.render('pages/index', {
	author: 'Copyright Automated Answering Services 2016',
	page: 'Home'
	});
});

app.get('/about',function(req,res){
res.render('pages/about',{
	author: "Copyright Automated Answering Services 2016",
	page: 'Company-Background'
	});
});

app.get('/solutions',function(req,res){
res.render('pages/solutions',{
	author: "Copyright Automated Answering Services 2016",
	page: 'Solutions'
	});
});

app.get('/contact',function(req,res){
res.render('pages/contact',{
	author: "Copyright Automated Answering Services 2016",
	page: 'Contact'
	});
});

}