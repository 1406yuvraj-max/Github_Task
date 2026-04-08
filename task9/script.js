async function updateData() {
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: title,
                body: body,
                userId: 1
            })
        });

        const data = await response.json();

        document.getElementById("result").innerText =
            "Data Updated Successfully! Title: " + data.title;

    } catch (error) {
        console.log("Error:", error);
    }
}