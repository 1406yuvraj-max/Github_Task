alert("JS Loaded");

function fetchData() {
    fetch("https://jsonplasceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("dataList");
        list.innerHTML = "";

        data.slice(0,5).forEach(item =>{
            let li = document.createElement("li"):
            li.innerText = item.title;
            list.appendChild(li);    
        })
    })
    .catch(error =>{
        console.log(error);
    });
}