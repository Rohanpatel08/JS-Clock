let selectedRow = null
add = document.getElementById('add')
dlt = document.getElementById('delete')
itemArray = [];
let tbody;
let str = ''
window.onload = function () {
    if (localStorage.getItem('itemJson') != null) {


        title = document.getElementById('title').value
        desc = document.getElementById('description').value
        itemArrayStr = localStorage.getItem('itemJson')
        itemArray = JSON.parse(itemArrayStr);
        console.log('123', itemArray)

        if (title && desc) {
            itemArray.push([title, desc]) 
        }

        localStorage.setItem('itemJson', JSON.stringify(itemArray))

        tbody = document.getElementById('tbody')

        itemArray.forEach((element, index) => {
            str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>
                <a href="#" onclick="deleteData(' + index + ')" class="btn btn-danger mx-2 delete" id="delete">Delete</a>
                <a href="#" onclick="updateData(' + index + ')" class="btn btn-warning edit">Edit</a>
            </td>
        </tr>
        `
        });
        tbody.innerHTML = str
    }
}

// Add Data

add.addEventListener("click", () => {
    // console.log("Hello ")
    title = document.getElementById('title').value
    desc = document.getElementById('description').value
    console.log(title, desc);
    if (localStorage.getItem('itemJson')) {
        console.log(title, desc);
        itemArray.push([title, desc]);
        console.log(itemArray)
        localStorage.setItem('itemJson', JSON.stringify(itemArray))
        location.reload()
    }
})

// Delete Data

function deleteData(index){
    
    let itemJson;
    if (localStorage.getItem("itemJson") == null) {
        itemJson = []
    } else {
        itemJson = JSON.parse(localStorage.getItem("itemJson"));
    }

    itemJson.splice(index, 1);
    localStorage.setItem("itemJson", JSON.stringify(itemJson));
    location.reload()
}

//Edit Data

function updateData(index){
    console.log("updateData clicked")
    let itemJson
    if (localStorage.getItem("itemJson") == null) {
        itemJson = []
    }
    else{
        itemJson = JSON.parse(localStorage.getItem("itemJson"))
    }
    // selectedRow = target.parentElement.parentElement;
    // document.querySelector("#title").value = selectedRow.children[1].textContent;
    // document.querySelector("#description").value = selectedRow.children[2].textContent;
    document.getElementById('title').value = itemJson[index].title;
    document.getElementById('description').value = itemJson[index].desc;
    
}

