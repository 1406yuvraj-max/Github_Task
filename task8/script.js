async function sendData() {
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        });

        const data = await response.json();

        document.getElementById("result").innerText =
            "Data Sent Successfully! ID: " + data.id;

    } catch (error) {
        console.log("Error:", error);
    }
}