exports.viewTab = function(req, res){
  var name = req.params.name;
  console.log("The project name is now "+name);
  res.render(name, {
    "tabName":name
  });
};
