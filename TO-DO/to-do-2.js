let id = "";
// localStorage.clear()
selectData()

function hideData(){
    document.getElementById("msg").innerHTML = "";
}

// Add data to localStorage
function manageData(){
    document.getElementById("msg").innerHTML = ""
    let title = document.getElementById("title").value
    if (title === '') {
        document.getElementById("msg").innerHTML = "Please fill all fields..."

    }else{
        console.log(id)
        if (id == '') {
            let itemArr = JSON.parse(localStorage.getItem("itemJson"))
            if (itemArr == null) {
                let data = [title]
                localStorage.setItem('itemJson',JSON.stringify(data));
            }else{
                itemArr.push(title)
                localStorage.setItem('itemJson',JSON.stringify(itemArr));
            }
            document.getElementById("msg").innerHTML = "Data added"
            setTimeout(hideData,3000)

        }else{
            console.log(id)
            let itemArr = getData()
            itemArr[id] = title;
            localStorage.setItem('itemJson',JSON.stringify(itemArr));
            document.getElementById("msg").innerHTML = "Data updated"
            setTimeout(hideData,3000)
        }
        document.getElementById("title").value = ""
        selectData();
    }
    
}

// display data from localstorage
function selectData(){
    let itemArr = JSON.parse(localStorage.getItem("itemJson"));
    if (itemArr != null) {
        let html = '';
        let index = 1;
        for (let k in itemArr ) {
            html = html + `
                <tr>
                    <td>${index}</td>
                    <td>${itemArr[k]}</td>
                    <td><a href="#" class="btn btn-danger mx-2" onclick="deleteData(${k})" id="delete">Delete</a>
                        <a href="#" class="btn btn-warning" onclick="updateData(${k})" id="edit">Edit</a>
                    </td>
                </tr>
            `
            index = index +1
        }
        document.getElementById("tbody").innerHTML = html
    }
}

//delete data from localstorage
function deleteData(did){
    let itemArr = getData();
    itemArr.splice(did,1);
    document.getElementById("msg").innerHTML = "Data deleted"
    localStorage.setItem('itemJson',JSON.stringify(itemArr));
    selectData();
    setTimeout(hideData,3000)
}

//updating Data into LocalStorage
function updateData(uid){
    console.log("updateData clicked...")
    id = uid;
    let itemArr = getData();
    document.getElementById("title").value = itemArr[uid];
    
}

//getting data from itemJson localStorage
function getData(){
    let itemArr = JSON.parse(localStorage.getItem("itemJson"))
    return itemArr;
}