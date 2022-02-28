let searchText;


// searching for player
const searchPlayer = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    searchField.value = '';
    //     console.log(searchText);

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayer(data.player));
}


// showing result
const displayPlayer = players => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    players.forEach(player => {
        //   console.log(player);


        //   do operation to build card for every player
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
                <div class="card mx-3">
                    <img class="card-img-top" src="${player.strThumb}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <ul>
                              <li>Date of Birth: <span>${player.dateBorn}</span></li>
                              <li>Gender: <span>${player.strGender}</span></li>
                              <li>Nationality: <span>${player.strNationality}</span></li>
                              <li>Current Club: <span>${player.strTeam}</span></li>
                              <li>National Team: <span>${player.strTeam2}</span></li>
                              <li>Favourite Position: <span>${player.strPosition}</span></li>
                        </ul>
                        <h3>Follow to stay up date....</h3>
                        <div class="d-flex justify-content-around my-3 text-center">
                              <a href="${player.strFacebook}" class="btn btn-info">Facebook</a>
                              <a href="${player.strInstagram}" class="btn btn-info">Instagram</a>
                              <a href="${player.strTwitter}" class="btn btn-info">Twitter</a>
                        </div>
                    </div>
                </div>
             
     `;
        searchResult.appendChild(div);
    });
}