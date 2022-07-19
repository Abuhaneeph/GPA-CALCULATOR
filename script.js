
let delBtn;
let gradeValue;
const rowList=[];
const unitInput=[];
const gradeInput=[];
const btnList=[];
const courseBtn=document.querySelector('#addCourse');
const refreshBtn=document.querySelector('#reload');
const table=document.querySelector('table');
const calBtn=document.querySelector('#calculate');
const delIndex=[];
var index=0;
var rowIndex=0;
let GPA;
  calBtn.disabled=true;

courseBtn.addEventListener('click',()=>{
 
  calBtn.disabled=false;
  const courseCredit=parseInt(document.querySelector('input').value);
  const courseGrade=document.querySelector('#option').value;

  //Create tablerow and table cell
  if(isNaN(courseCredit)){
    alert("Course credit unit is empty ")
  }else if(courseGrade === "null"){
   alert("The Course Grade is null")
  }else{
 
  const tableRow=document.createElement('tr');
  const tableCell1=document.createElement('td');
  const tableCell2=document.createElement('td');
  const tableCell3=document.createElement('td');
  const tableCell4=document.createElement('td');
  var id;
  //push each row created to the rowList array and increment tableCell id by 1

  rowIndex=rowIndex+1;
  tableRow.id=rowIndex;
  tableRow.setAttribute('class','w3-center');
  //tableRow.setAttribute('class','w3-animate-left');
  tableCell1.textContent="Course"+" "+rowIndex;
  tableCell1.setAttribute("class","course");
  tableCell1.setAttribute("class","w3-animate-left");
  //store Course credit unit and Course grade and 
  //push them to their respective array Unitinput and GradeInput

 
  tableCell2.textContent=courseCredit;
  tableCell2.setAttribute("class","courses");
  tableCell2.setAttribute("class","w3-animate-right");
  
  if(courseGrade==="A"){
   gradeValue=5;
  }else if(courseGrade==="B"){
     gradeValue=4;
  }else if(courseGrade==="C"){
    gradeValue=3;
 }else if(courseGrade==="D"){
  gradeValue=2;
}else if(courseGrade==="E"){
  gradeValue=1;
}else {
  gradeValue=0;
}
tableCell3.textContent=courseGrade;
tableCell3.setAttribute("class","courses");
tableCell3.setAttribute("class","w3-animate-zoom"); 
unitInput.push(courseCredit);
gradeInput.push(gradeValue)

  
  //Create Delete button
const tag=document.createElement("i");
tag.setAttribute("class","fa fa-trash 3X");
tag.setAttribute("style","color:green;");
delBtn=document.createElement('button');
delBtn.setAttribute("style","color:#f2f2f2;")
delBtn.appendChild(tag);
index=index+1;
delBtn.id=index;
tableCell4.setAttribute("class","courses");
tableCell4.setAttribute("class","w3-animate-zoom");
tableCell4.appendChild(delBtn);


  tableRow.appendChild(tableCell1);
  tableRow.appendChild(tableCell2);
  tableRow.appendChild(tableCell3);
  tableRow.appendChild(tableCell4);
  
  table.appendChild(tableRow);

  
//On Delete event
  delBtn.addEventListener('click',(event)=>{
    delIndex.push(event.target.id-1);
    rowIndex=rowIndex-1;
    table.removeChild(tableRow);
    
  })
  
  }
})



// On refresh event
refreshBtn.addEventListener('click',()=>{
  window.location.reload();
})
 




// on calculate gpa event

calBtn.addEventListener('click',()=>{
 
  // if there is not deleted course
 if(delIndex.length === 0 && unitInput.length != 0){  
  const gradePoints =unitInput.map((eachInput,index)=>{
    return eachInput*gradeInput[index];
  })
  const totalGradePoints=gradePoints.reduce((initialGP,finalGP)=>{
    return initialGP+finalGP;
 })
 const totalCredit=unitInput.reduce((initialCredit,currentCredit)=>{
  return initialCredit+currentCredit;
})
GPA=totalGradePoints/totalCredit;
GPA=GPA.toFixed(2);

alert("Your GPA is "+GPA+"points");

 // if there is a deleted course
 }else if (delIndex.length > 0 && unitInput.length !=0) {
  let totalGradePoints;
  let totalCredit;
  const  delunitInputs=unitInput.filter(function(value,index){
    return delIndex.indexOf(index) == -1;
  })

const  delgradeInputs=gradeInput.filter(function(value,index){
  return delIndex.indexOf(index) == -1;
})


const gradePoints =delunitInputs.map((eachInput,index)=>{
  return eachInput*delgradeInputs[index];
})
// if all the courses were deleted 
if(delgradeInputs.length === 0){
  totalGradePoints=0;
}else{
  totalGradePoints=gradePoints.reduce((initialGP,finalGP)=>{
    return initialGP+finalGP;
  })
}// if all the unit inputs were deleted
if(delunitInputs.length === 0){
totalCredit=0;
}else{
totalCredit=delunitInputs.reduce((initialCredit,currentCredit)=>{
return initialCredit+currentCredit;
})
}
GPA=totalGradePoints/totalCredit;
GPA=GPA.toFixed(2);
}
  // if the GPA is not a number
  if(isNaN(GPA)){
    
    alert("You've not yet added any course")
  }else{
    alert("Your GPA is "+GPA+"points");
  }
})




  
    
  var valuesArr = [1,2,3,4,5];
  var removeValFrom = [0, 1, 2];
  valuesArr = valuesArr.filter(function(value, index) {
       return removeValFrom.indexOf(index) == -1;
  })
 