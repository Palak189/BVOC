//console.log("hello");
const path=require('path');
var express = require("express");
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
  //res.write("Inserted!!");
  res.render('index',{
    'EXCEL':'https://github.com/Palak189/Analyze-fitness-data-using-Excel.git',
    'IPL':'https://github.com/Palak189/Build-auction-strategy-for-IPL-franchise-using-SQL.git',
    'TABLEAU':'https://github.com/Palak189/Tableau-Dashboard.git',
    'POWERBI':'https://github.com/Palak189/Analyze-sales-data-to-identify-trends-for-business-decision-making-using-Power-Bi.git',
    'POWERBI2':'https://github.com/Palak189/HR-Attrition-dashboard-using-Power-BI.git',
    'LINEAR':'https://github.com/Palak189/Linear-regression-model-using-python.git',
    'ML':'https://github.com/Palak189/Machine-Learning-model-using-various-classification-models-to-predict-rainfall.git'
  })
  //res.end();
})
app.listen(8054);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

