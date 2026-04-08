async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // 👉 JSON → JavaScript Object
        const data = await response.json();

        const list = document.getElementById("userList");
        list.innerHTML = "";

        // 👉 Display specific fields
        data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = "Name: " + user.name + " | Email: " + user.email;
            list.appendChild(li);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}