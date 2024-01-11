

const jokeGenerator = document.getElementsByClassName("joke_generator")[0]
const joke=document.getElementsByClassName("joke")[0]

const url = "https://api.api-ninjas.com/v1/facts?limit=1"
const API_KEY = "xmFN7SYaoAV1r0+uu75UbA==1TuN09bqjAQEQDk8"

const generateARandomJoke = ()=>{
    fetch(url,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': API_KEY
              }
        }  
    ).then(response => response.json())
    .then(data =>{
        console.log(data);
        joke.innerHTML = data[0].joke
    })
    .catch(error =>{
        console.log(error)
    })
}



jokeGenerator.addEventListener("click",generateARandomJoke)