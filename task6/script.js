async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        const list = document.getElementById("postList");
        list.innerHTML = "";

        // 👇 only first 5 records
        data.slice(0, 5).forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            list.appendChild(li);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}