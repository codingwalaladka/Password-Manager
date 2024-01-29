function maskPassword(pass){
    let str = ""
    for (let index = 0; index < pass.length; index++) {
        str  += "*"
    }
    return str
}


// logic to delete password
const deletePassword = (WebsiteName) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data)
    arrUpdated = arr.filter((e) => { 
        return e.WebsiteName != WebsiteName
     } )
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`successfully deleted ${WebsiteName}'s password`)

    showPass()
}



function copy(txt) {
    navigator.clipboard.writeText(txt).then(
        () => {
          /* clipboard successfully set */
          alert("Copy successfully")

        },
        () => {
          /* clipboard write failed */
          alert("Clipboard copying failed")
        },
      );
  }



//logic to fill the table

const showPass = () => {
    let tb = document.querySelector("table")

    let data = localStorage.getItem("passwords")
    if (data == null || JSON.parse(data).length == 0) {
        tb.innerHTML = "No Data To Show"
    }

    else {
        tb.innerHTML = ` <tr>
        <th>WebsiteName</th>
        <th>Username</th>
        <th>Password</th>
        <th>Delete</th>
    </tr>`

        let arr = JSON.parse(data);
        let str = "";
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];



            str += `<tr>
<td>${element.WebsiteName}<button class="bt" onclick="copy('${element.WebsiteName}')" alt="Alternative text">Copy</button></td>
<td>${element.username}<button class="bt" onclick="copy('${element.username}')"  alt="Alternative text">Copy</button></td>
<td>${maskPassword(element.password)}<button class="bt" onclick="copy('${element.password}')"  alt="Alternative text">Copy</button></td>
<td><button class="deletebt" onclick="deletePassword('${element.WebsiteName}')" >Delet</button></td>
</tr>`
        }

        tb.innerHTML = tb.innerHTML + str;

    }
    WebsiteName.value = ""
    username.value = ""
    password.value = ""

}

console.log("Working");
showPass();
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    // Move these variable declarations to the top of the function
    let WebsiteName = document.querySelector("#WebsiteName").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    let passwords = localStorage.getItem("passwords");

    if (passwords == null) {
        let json = [];
        json.push({ WebsiteName: WebsiteName, username: username, password: password });
        alert("Saved successfully");
        localStorage.setItem("passwords", JSON.stringify(json));
    } else {
        let json = JSON.parse(passwords);
        json.push({ WebsiteName: WebsiteName, username: username, password: password });
        alert("Saved successfully");
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    showPass();
});


// in this code having a issu

// document.querySelector(".btn").addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Clicked....");
//     console.log(WebsiteName.value, username.value, password.value);

//     let WebsiteName = document.querySelector("#WebsiteName").value;
// let username = document.querySelector("#username").value;
// let password = document.querySelector("#password").value;

//     let passwords = localStorage.getItem("passwords");
//     console.log(passwords);

//     if (passwords == null) {
//         let json = []
//         json.push({ WebsiteName: WebsiteName.value, username: username.value, password: password.value })
//         alert("seved sucessfully")
//         localStorage.setItem("passwords", JSON.stringify(json))

//     }
//     else {
//         let json = JSON.parse(localStorage.getItem("passwords"))
//         json.push({ WebsiteName: WebsiteName.value, username: username.value, password: password.value })
//         alert("seved sucessfully")
//         localStorage.setItem("passwords", JSON.stringify(json))

//     }
//     showPass();
// })