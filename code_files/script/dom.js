const gamesData=[
    {"GameTitle":"Before and After","GameDescription":"Before and After Yr 2 (prefix and suffix)","Topic":"Word Works and Spelling","Group":"Academic","Level":"Key Stage 1","Subject":"English","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Before and After"},
    {"GameTitle":"Communication","GameDescription":"Communication Yr 2 (different ways we can communicate)","Topic":"Social Studies","Group":"Academic","Level":"Key Stage 1","Subject":"Social Studies","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Communication"},
    {"GameTitle":"Kiddiepreneur 101","GameDescription":"Kiddiepreneur 101 (Intro to Earning and Spending)","Topic":"Financial Literacy","Group":"Financial Literacy","Level":"Financial Literacy","Subject":"Financial Literacy","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Kiddiepreneur 101"},{"GameTitle":"Money Matters","GameDescription":"Money Matters (Intro to Key Financial Terms)","Topic":"Financial Literacy","Group":"Financial Literacy","Level":"Financial Literacy","Subject":"Financial Literacy","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Money Matters"},
    {"GameTitle":"Maths Pop","GameDescription":"Maths Pop (writing numbers in word, sequencing & ordinal numbers)","Topic":"Number Sense","Group":"Academic","Level":"Key Stage 1","Subject":"Mathematics","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Maths Pop"},
    {"GameTitle":"Exploring Life","GameDescription":"Exploring Life KS","Topic":"Living Things & Non-Living Things","Group":"Academic","Level":"Key Stage 1","Subject":"Science","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Exploring Life"},
    {"GameTitle":"Mathsmania City - Decimals","GameDescription":"Mathsmania City - Decimal","Topic":"Decimals, Fractions & Percentage","Group":"Academic","Level":"Key Stage 2","Subject":"Mathematics","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Mathsmania City - Decimals"},{"GameTitle":"Literacy Hangman KS2","GameDescription":"Literacy Hangman KS2 (Nouns, Pronouns)","Topic":"Parts of Speech","Group":"Academic","Level":"Key Stage 2","Subject":"English","GameImage":"https:\/\/partners.9ijakids.com\/index.php\/thumbnail?game=Literacy Hangman KS2"}
];


const filOptions = document.querySelector("#filter-options");
const select = document.createElement("select");
const selectTopic = document.createElement("select");
const elements  = [select, selectTopic];
const names = ["group","topic"];
let allOptions;
let same;

function makeElements(iterable, names){
    let option;
    iterable.forEach((item, index)=>{
    let upperNaming = names[index].charAt(0).toUpperCase() + names[index].slice(1);
    item.name = names[index];
    item.setAttribute("id", `${names[index]}s`);
    option = document.createElement("option");
    option.value = `All ${upperNaming}s`;
    option.textContent = `All ${upperNaming}s`;
    item.appendChild(option);
    gamesData.forEach(obj=>{
        option = document.createElement("option");
        option.value = obj[upperNaming];
        option.textContent = obj[upperNaming];
        option.classList.add(`other${names[index]}`);
        same = false;
        allOptions = Array.from(item.querySelectorAll("option"));
        allOptions.forEach( (opt, index)=>{
            if(option.value === opt.value ){
                same = true
            }
            if(!same && index === allOptions.length -1){
                item.appendChild(option);
            }
            else{
                return
            }  
        });


    });
    filOptions.appendChild(item);
});

}
makeElements(elements, names);


const groups = document.querySelector("#groups");
const topics = document.querySelector("#topics");
