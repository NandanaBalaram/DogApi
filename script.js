async function getDogList(){
    try{
        const result = fetch("https://dog.ceo/api/breeds/list/all",{
            method: "GET"
        });
        const data= await (await result).json()
        const dogList =  Object.keys(data.message)
        console.log(dogList)
        dogList.forEach(element => {
            let className = document.getElementsByClassName("custom-select")
            className[0].innerHTML += `<option value="${element}">${element}</option>`
            
        });
    }
    catch(err){
        console.log(err)
    }
}
async function displayImage()
{
    let dogOptions = document.getElementsByClassName("custom-select")
    let selectedDog = dogOptions[0].options[dogOptions[0].selectedIndex].value

    const result = fetch(`https://dog.ceo/api/breed/${selectedDog}/images/random`,{
            method: "GET"
        });
        const data= await (await result).json()
        let dogPicture = document.getElementsByClassName("dogPicture")
        dogPicture[0].innerHTML =`<div class="card bg-dark" style="width: 30rem;">
        <img src="${data.message}" class="card-img-top">
        <div class="card-body">
          <p class="card-text">${selectedDog}</p>
        </div>
      </div>`
    
}
