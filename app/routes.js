//==============================================================================================================================================================================----------------------->
var regSchema    = require('./models/regSchema');
var host            = "localhost:3000";
//==============================================================================================================================================================================----------------------->
module.exports = function (app) {

  //*********************************** POST request to inserting data into the database *********************************************************

  app.post('/insert', function (req, res) {


        var datastorage =
        {
          Fname         : req.body.FNAME,
          Lname         : req.body.LNAME,
          Dname         :req.body.DNAME,
          Password      :req.body.PASSWORD,
          Confirm_Password : req.body.CONFIRM_PASSWORD,

          MobileNumber  : req.body.MOBILENUMBER

        };

        regSchema.create(datastorage, function (err, insertresponse)
        {

          if (err)
          res.send(err);
          if(insertresponse == 0)
          {
            res.json({ success: false });
          }
          else
          {
            res.json({ success : true});
          }

        });

  });

  //*************************** Get request to getting the JSON response when we hit /retrieve ********************************************************************************************************

  app.get('/retrieve', function (req, res) {

    regSchema.find(function (err, retrieveAllRegisterUsersResponse) {
      if (err)
      res.send(err);
      res.json(retrieveAllRegisterUsersResponse);
    });

  });

//*********************************************************************************************

app.delete('/api/fname/:id', function (req, res) {

regSchema.remove({"Fname":req.params.id}, function (err, deleteresponse)
{

  if (err)
  res.send(err);
  if(deleteresponse == 0)
  {
    res.json({ success: false });
  }
  else
  {
    res.json({ success : true});
  }

});



});
//===============================================================================================
};
//=================================================================================================================================================================================-------------------->
