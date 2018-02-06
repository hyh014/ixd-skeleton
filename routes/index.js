
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    "tabs": [
      { "name": "Create New Entry",
        "id": "entry"},
      { "name": "Anxiety",
        "id": "anxiety"},
      { "name": "View Diary",
        "id": "diary"},
      {"name": "Show Statistics",
        "id": "stat"},
      {"name": "Settings",
        "id": "setting"}
    ]
  });
};
