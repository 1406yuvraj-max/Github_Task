async function fetchData() {
    try {
        
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        
        const userList = document.getElementById("userList");
        userList.innerHTML = "";

        users.slice(0, 5).forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });

        
        const postList = document.getElementById("postList");
        postList.innerHTML = "";

        posts.slice(0, 5).forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            postList.appendChild(li);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}