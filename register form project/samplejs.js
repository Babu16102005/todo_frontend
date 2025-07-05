function submitted(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var course = document.getElementById("course").value;
    var email = document.getElementById("mail").value.trim();
    var genderElems = document.getElementsByName("Gender");
    var gender = "";
    var nameregex=/^[A-Za-z].+$/;
    var ageregex=/^(1[8-9]|2[0-5]|)+$/;
    var emailregex=/^[0-9]|[a-z]+$/;

    for (var i = 0; i < genderElems.length; i++) {
        if (genderElems[i].checked) {
            gender=genderElems[i].value;
            break;
        }
    }

    if (name === "" || age === "" || course === "" || email === "" || gender === "") {
        alert("Please fill all the fields");
        return;
    }
    if (!age.match(ageregex)) {
        alert("You must be the range of 18 - 25 to register.");
        return;
    }
    if ((!email.match(emailregex))||!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }
    if(!name.match(nameregex)){
        alert("your name must be in alphabets only without any whitespace");
        return;
    }


    var table = document.getElementById("form1");
    var row = table.insertRow(-1);
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = age;
    row.insertCell(2).textContent = course;
    row.insertCell(3).textContent = email;
    row.insertCell(4).textContent = gender;
    var actionCell = row.insertCell(5);
    var deletebutton = document.createElement("tr");
    deletebutton.innerHTML="<button class='del'>Delete<button>"
    actionCell.append(deletebutton);
    deletebutton.onclick = function() {
        table.deleteRow(row.rowIndex);
    };
    


    document.querySelector("form").reset();

    alert("Form Submitted Successfully");
}