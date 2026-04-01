function fetchData() {
    alert("Working");

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("dataList"); // ✅ fixed

        list.innerHTML = "";

        data.slice(0, 5).forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            list.appendChild(li);
        });
    })
    .catch(err => console.log(err));
}