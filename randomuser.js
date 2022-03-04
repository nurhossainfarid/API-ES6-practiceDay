const loadUser = () => {
    fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => displayLoadUser(data))
}
const displayLoadUser = meals => {
    console.log(meals);
}
