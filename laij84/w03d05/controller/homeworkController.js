var homeworkArray = require("../data/homeworkData.js")

//index
function homeworkIndex(req, res) {
   res.render("index", {homeworkArray: homeworkArray});
  }


  //about
  function homeworkAbout(req, res) {
     res.render("about");
    }

//new
  function homeworkNew(req, res) {
    res.render("new");
  }

//create
function homeworkCreate(req, res){
  console.log(req.body);

  var homework = req.body.homework;
  homework.id = homeworkArray.length;
  homeworkArray.push(homework);

  res.redirect("/home");

}

//Show
function homeworkShow(req, res) {
   var id = req.params.id;
   res.render("show", {homeworkObject: homeworkArray[id] });
}

//edit
function homeworkEdit(req, res) {
      var id = req.params.id;
      res.render("edit", { homeworkObject: homeworkArray[id] });
}

function homeworkUpdate(req, res) {
    
  var id = req.params.id;
  var homework = req.body.homework;
  homework.id = id;

  homeworkArray[id] = homework;

  res.redirect("/home");
}

//delete
function homeworkDelete(req, res) {
  var id = req.params.id;
  homeworkArray.splice(id , 1);

  homeworkArray = homeworkArray.map(function(homework) {
    if(homework.id>=id) homework.id--;
      return homework;
    });
  res.redirect("/home");
}



module.exports = {
  index: homeworkIndex,
  new: homeworkNew,
  create: homeworkCreate,
  show: homeworkShow,
  edit: homeworkEdit,
  update: homeworkUpdate,
  delete: homeworkDelete,
  about: homeworkAbout  
};