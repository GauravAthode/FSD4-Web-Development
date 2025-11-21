  document.getElementById("btn1").addEventListener("click", function () {

    let personName = document.getElementById("PersonName").value;
    let contactNumber = document.getElementById("ContactNumber").value;
    let email = document.getElementById("Email").value;
    let qualification = document.getElementById("Qualification").value;
    let college = document.getElementById("CollegeSchool").value;
    
    let year = document.getElementById("Year").value;
    
    let branch = document.getElementById("Branch").value;

    let sourceInfo = document.getElementById("SourceInformation").value; 
    let executive = document.getElementById("NameOfExecutive").value; 

    
    let checkedCourses = [];
    document.querySelectorAll("input[name='choose']:checked").forEach((item) => {
 
      checkedCourses.push(item.nextSibling.textContent.trim());
    });
   
    let outputData = {
      Name: personName,
      Number: contactNumber,
      Email: email,
      Qualification: qualification,
      College: college,
      Year: year,
      Branch: branch,
      Courses: checkedCourses,
      Source: sourceInfo,
      Name_Executive: executive
    };

    console.log("Form Data");
    console.log(outputData);
});