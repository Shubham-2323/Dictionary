const wrapper = document.querySelector('.wrapper'),
    searchInput = wrapper.querySelector('input')
infoText = wrapper.querySelector('.info-text');

function data(result,word){
    if(result.title){
        // cannot find
        infoText.innerHTML=`Can't find tyhe meaning of <span>"${word}</span>..Please, try to search another word.`;   
    }
    else{
        console.log(result);
        wrapper.classList.add("active")
        let definitions = result[0].meanings[0].definitions[0],
        phonetics =`${result[0].meanings[0].partOfSpeech} /${result[0].phonetics[0].text}/`;

        
        document.querySelector(".word p").innerText=result[0].word;
        document.querySelector(".word span").innerText=phonetics;
        document.querySelector(".Meaning span").innerText=definitions.definition;
        document.querySelector(".example span").innerText=definitions.example;
    }
}

function fetchApi(word) {
    infoText.style.color="#000"
    infoText.innerHTML =`Searching the meaning of <span>"${word}"</span>`;
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch (url).then(res=>res.json()).then(result=>data(result,word));
    
}

searchInput.addEventListener("keyup", e => {
    if (e.key === "Enter" && e.target.value) {
        
        fetchApi(e.target.value);
    }
    
});
// function fetchApi (word){
//     infoText.getElementsByClassName.color="#000";
//     infoText.innerHTML=`searching the meaning of <span>${word}</span>`;
    // let url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
//     fetch(url).then(res=>res.json()).then(result=>console.log(result));

// }

// searchInput.addEventListener('keyup',e=>{
//     if(e.key==="Enter"&&e.target.value){
//         fetchApi(e.target.value);
//     }
// })