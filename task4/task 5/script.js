async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        const table = document.getElementById("tableData");
        table.innerHTML = ""; // clear old data

        data.slice(0, 5).forEach(item => {
            const row = document.createElement("tr");

            const id = document.createElement("td");
            id.textContent = item.id;

            const title = document.createElement("td");
            title.textContent = item.title;

            row.appendChild(id);
            row.appendChild(title);

            table.appendChild(row);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}
