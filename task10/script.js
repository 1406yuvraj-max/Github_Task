async function deleteData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });

        if (response.ok) {
            document.getElementById("result").innerText =
                "Post Deleted Successfully!";
        } else {
            document.getElementById("result").innerText =
                "Failed to delete post";
        }

    } catch (error) {
        console.log("Error:", error);
    }
}