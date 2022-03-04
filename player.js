const loadPlayerInfo = () => {
    const searchBox = document.getElementById(`search-box`);
    const searchBoxValue = searchBox.value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBoxValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadPlayer(data.player))
}
const displayLoadPlayer = players => {
    const parents = document.getElementById(`parents-div`);
    parents.textContent = '';
    players.forEach(player => {
        console.log(player);
        const div = document.createElement('div');
        div.classList.add('card', 'col-4');
        div.innerHTML = `
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name: ${player.strPlayer}</h5>
            <p class="card-text">Country: ${player.strNationality}</p>
            <button class="btn bg-danger p-1">Delete</button>
            <button class="btn bg-success p-1" onclick='playerDetails(${player.idPlayer})'>Details</button>
        </div>
        `;
        parents.appendChild(div);
    });
    // for (const player of players) {
    //     console.log(player);
    // }
}

const playerDetails = async (platerID) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${platerID}`;
    const res = await fetch(url);
    const data = await res.json();
    setDetails(data.players[0]);
}

const setDetails = (info) => {
    console.log(info);
}