let posts = [];

// Fetch data once
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        posts = await response.json();

        displayData(posts); // show all initially

    } catch (error) {
        console.log("Error:", error);
    }
}

// Display function
function displayData(data) {
    const list = document.getElementById("postList");
    list.innerHTML = "";

    data.slice(0, 10).forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        list.appendChild(li);
    });
}

// Search function
function searchData() {
    const value = document.getElementById("searchInput").value.toLowerCase();

    const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(value)
    );

    displayData(filtered);
}

// Call fetch on page load
fetchData();