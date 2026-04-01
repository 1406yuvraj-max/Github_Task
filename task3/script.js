async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();

        const list = document.getElementById("dataList");

        list.innerHTML = ""; // clear old data

        data.slice(0, 5).forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            list.appendChild(li);
        });

    } catch (error) {
        console.log("Error:", error);
        alert("Failed to fetch data");
    }
}