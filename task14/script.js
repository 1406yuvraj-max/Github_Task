async function fetchImages() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();

        const container = document.getElementById("imageContainer");
        container.innerHTML = "";

        data.slice(0, 5).forEach(photo => {
            const img = document.createElement("img");

            img.src = photo.url;   
            img.width = 150;
            img.style.margin = "10px";

            container.appendChild(img);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}