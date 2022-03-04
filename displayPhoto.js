function loadPhoto() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => displayLoadPhoto(data));
}

function displayLoadPhoto(data) {
    const displayPhoto = document.getElementById(`display-photo`);
    for (const photo of data) {
        if (photo.id <= 50 && photo.id >= 40) {
            const div = document.createElement(`div`);
            div.classList.add(`card`, `col-3`);
            div.innerHTML = `
            <img onclick='photoDetails()' src="${photo.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title.slice(0, 20)}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            `;
            displayPhoto.appendChild(div);
        }
    }
}

const photoDetails = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhotoDetails(data))
}

const displayPhotoDetails = detail => {
        console.log(detail);
        const displayDetail = document.getElementById(`photo-detail`);
        displayDetail.textContent = '';
        const div = document.createElement(`div`);
        div.classList.add(`card`);
        div.innerHTML = `
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${detail.id}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `;
        displayDetail.appendChild(div);
}