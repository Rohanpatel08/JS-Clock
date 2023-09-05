let selectedRow = null
//Clear all data
function clearAll(){
    document.querySelector("#exampleInputFName").value = ""
    document.querySelector("#exampleInputLName").value = ""
    document.querySelector("#exampleInputRNo").value = ""
}

//add data
document.querySelector(".add-btn").addEventListener("click", ()=>{
    const fName = document.querySelector("#exampleInputFName").value;
    const lName = document.querySelector("#exampleInputLName").value;
    const rNo = document.querySelector("#exampleInputRNo").value;
    if (fName == "" || lName == "" || rNo == "") {
        alert("Please fill the fields")
    }else{
        if (selectedRow == null) {
            let list = document.querySelector("#student-list");
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${fName}</td>
                <td>${lName}</td>
                <td>${rNo}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null
        }else{
            selectedRow.children[0].textContent = fName
            selectedRow.children[1].textContent = lName
            selectedRow.children[2].textContent = rNo
            selectedRow = null
        }
        clearAll()
    }
})

//edit data
document.querySelector("#student-list").addEventListener("click", (e)=>{
    target = e.target
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#exampleInputFName").value = selectedRow.children[0].textContent;
        document.querySelector("#exampleInputLName").value = selectedRow.children[1].textContent;
        document.querySelector("#exampleInputRNo").value = selectedRow.children[2].textContent;
    }
})

//delete data
document.querySelector("#student-list").addEventListener("click", (e)=>{
    target = e.target
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        alert("Data is Deleting")
    }
})