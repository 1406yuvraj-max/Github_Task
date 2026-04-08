async function fetchData() {
    const loading = document.getElementById("loading");
    const list = document.getElementById("dataList");

    try {
        // 👉 Show loading message
        loading.innerText = "Loading...";

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        // 👉 Clear loading message
        loading.innerText = "";

        list.innerHTML = "";

        data.slice(0, 5).forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            list.appendChild(li);
        });

    } catch (error) {
        loading.innerText = "Error loading data!";
        console.log("Error:", error);
    }
}