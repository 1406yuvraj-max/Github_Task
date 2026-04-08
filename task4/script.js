async function fetchData() {
    try {
        // ❌ wrong URL to simulate error   
        const response = await fetch("https://jsonplaceholder.typicode.com/postss");

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        const list = document.getElementById("dataList");
        list.innerHTML = "";

        data.slice(0, 5).forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            list.appendChild(li);
        });

    } catch (error) {
        console.log("Error:", error);
        alert("Something went wrong while fetching data ❌");
    }
}