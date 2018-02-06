exports.viewTab = function(req, res){
  var name = req.params.name;
  res.render(name, {
    "tabName":name
  });
};
