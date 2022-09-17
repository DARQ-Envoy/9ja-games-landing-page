const search = document.querySelector("#search");
const filterGames = document.querySelector("#filter-games");
const allGames = document.querySelector("#all-games");
const mobile = matchMedia("(max-width: 900px)");
let timeOut;
// let gamesDisplayed;
// let calls = 0;
let games;
let no = 0;
const notFound = document.querySelector(".n-found");


settingGames();

const inputStatus = (element,eWidth, filterMobile = 90)=>{
    if(element.value != ""){
        if(!mobile.matches){
            element.style.width = eWidth;
        }
        else if(element === filterGames && !mobile.matches){
            element.style.width = eWidth
        }
        else if(element === filterGames && mobile.matches){
        element.style.width = `${filterMobile}%`
        }
   
        else {
            element.style.width = "100%"
        }
        element.style.backgroundImage = "none"
        element.style.padding="0 10px"
    }
    else if (element.value  === "" && element != document.activeElement){
        element.style="";
    }
}

search.addEventListener("input",(e)=>{
    inputStatus(e.target, "25%")
});
search.addEventListener("blur",(e)=>{
    inputStatus(e.target, "25%")
});
filterGames.addEventListener("input",(e)=>{
    inputStatus(e.target, "40%");
    gameFilter(e.target)
});
filterGames.addEventListener("blur",(e)=>{
    inputStatus(e.target, "40%")
});

groups.addEventListener("input",(e)=>{
    gameFilter(e.target)
});
topics.addEventListener("input",(e)=>{
    gameFilter(e.target)
})
// search.addEventListener("focus",(e)=>{
//     inputStatus(e.target)

// });


function settingGames(){
    allGames.innerHTML = ``
    gamesData.forEach( object =>{
                gameCreator(object)
        })
}

function gameCreator(game){
   let div = document.createElement('div');
    div.setAttribute("class","game")
    div.innerHTML =`
    <img src="${game["GameImage"]}" alt="Game Image">
    <div>
    <h3>${game["GameTitle"]}</h3>
    <p>${game["GameDescription"]}</p>
    <small>${game["Subject"]}</small>
    <small class="d-none" id="g-topic">${game["Topic"]}</small>
    <small class="d-none" id="g-group">${game["Group"]}</small>
    </div>
        `;
        allGames.appendChild(div)
}


function gameFilter(element){
    notFound.classList.add("d-none");
    games = allGames.querySelectorAll(".game");

    if(element == filterGames){
        // calls += 1;
        allGames.classList.add("load");
        gamesArray = Array.from(games);
        gamesArray.forEach((game)=>{
        title = game.querySelector("h3");
        titleLower = title.textContent.toLowerCase();
        elementLower = element.value.toLowerCase()
        if(!titleLower.startsWith(elementLower)){
            game.classList.add("game-hide");
        }
        else{
            game.classList.remove("game-hide");
        }
        });

       let gamesNotDisplayed = allGames.querySelectorAll('.game-hide');
        if(gamesNotDisplayed.length === gamesArray.length){
            allGames.classList.remove("load");
            dNone();
        }
        clearTimeout(timeOut);
       timeOut = setTimeout(()=>{
            allGames.classList.remove("load");
        }, 2000)
    }
    else if(element == groups || element == topics){
        debugger;
        filterType(element);
    }

}
function filterType(element){
    allGames.innerHTML = ``;
    let allEl = element === topics ? topics.querySelector("option").textContent: groups.querySelector("option").textContent;
    let term;
    let otherEl;
    let filter1;
    let filter2;
    let othTerm;
    if(element == groups){
        term = "Group";
        otherEl = topics;

    }
    else{
        term = "Topic";
        otherEl = groups;
    }

    let text ;
    othTerm = term === "Group"? "Topic" : "Group";
    
    if(element.value != allEl || otherEl.value != otherEl.querySelector("option").textContent ){
        if(otherEl.value != otherEl.querySelector("option").textContent && element.value != allEl){
        allGames.innerHTML = "";
        gamesData.forEach( obj =>{
           filter1 = element == groups ? obj.Topic : obj.Group;
           filter2 = element == topics ? obj.Topic : obj.Group;
        if(element.value === filter2 && otherEl.value === filter1){
            gameCreator(obj)
                                    }
            else{   return      }; 
                    });
        if(!allGames.innerHTML){
            dNone()
        }
        }
    else if(otherEl.value != otherEl.querySelector("option").textContent && element.value === allEl){
        allGames.innerHTML = ``;
            gamesData.forEach((obj)=>{
                if( otherEl.value === obj[othTerm] ){
                    gameCreator(obj);
                }
                else{
                    return;
                }
            });
            if(!allGames.innerHTML){
                dNone();
            }

                }
    else if(otherEl.value === otherEl.querySelector("option").textContent && element.value != allEl){
        allGames.innerHTML = ``;
            gamesData.forEach((obj)=>{
                if( element.value === obj[term] ){
                    gameCreator(obj);
                }
                else{
                    return;
                }
            });
            if(!allGames.innerHTML){
                dNone();
            }

    }

        // else{
        //         allGames.innerHTML=``;

        //                 }
        // console.log(element.value);
        // console.log(games)
        // games.forEach( obj =>{
        //    text = obj.querySelector(`#g-${term}`.toLowerCase()).textContent
        //    console.log(text)
        // if(text === element.value)
        //         { allGames.appendChild(obj)
        //       }
        //     else{   return      };

        //             });
        // console.log(Boolean(allGames.innerHTML))
        // if(!allGames.innerHTML){
        //     dNone();
        //             }

                }
    else{
        settingGames()
        }
}
function dNone(){
 notFound.classList.contains("d-none")?notFound.classList.remove('d-none'):notFound.classList.add("d-none"); 
}