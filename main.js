var newsType = document.querySelectorAll("[type='radio']")
var inputText = document.getElementById("txt")
var inputSearch = document.getElementById("search")
var addBtn = document.getElementById("add")
var table = document.getElementsByTagName("table")[0]

var tr,td

addBtn.addEventListener("click",function(){
    for(i=0; i<newsType.length; i++){
        if(newsType[i].checked){
            if(inputText.value.trim() != ""){
                tr = document.createElement("tr")
                td = document.createElement("td")
    
                td.innerHTML = inputText.value
                tr.appendChild(td)
                table.appendChild(tr)
                
                switch (newsType[i].value) {
                    case "sport":
                        tr.style.backgroundColor = "lightgreen"
                        break;
                    case "social":
                        tr.style.backgroundColor = "lightblue"
                        break;
                    case "politic":
                    tr.style.backgroundColor = "#ffeb3b"
                    break;
                    default:
                        break;
                }
                inputText.value=""
            }
        }
    }
})

inputSearch.addEventListener("keyup", function(){

    var trs = table.children
    for(i=0; i<trs.length; i++){
        var elem = trs[i].children[0].innerText.toLowerCase().trim()
        if(elem.match(inputSearch.value.trim())){
            trs[i].children[0].style.display = "block"
        } else {
            trs[i].children[0].style.display = "none"
        }
    }
})

