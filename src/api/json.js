async function fetchName() { 
    let response = await fetch(`https://randomuser.me/api/?results=10`);
    let data = await response.json()
    return data.results[0].name.first
} 

    export {fetchName};