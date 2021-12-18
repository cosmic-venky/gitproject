function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
        
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data = JSON.parse(text); 
    console.log(data);
    display(data.cards)

})
function display(mb){
    var deck=document.querySelector(".card-deck")
    console.log(deck)
   

    for( var i in mb){
        // console.log(mb[i].name)
        var caddiv=document.createElement("div")
        caddiv.classList.add("card")
        var cadimg=document.createElement("img")
        cadimg.src=mb[i].img
        caddiv.appendChild(cadimg)
        deck.appendChild(caddiv)

        // Name Area
        var cname=documnet.createElement("h2")
        cname.textContent=mb[i].name;
        caddiv.appendChild(cname)

        // Price Area
        var cname=documnet.createElement("h3")
        cname.textContent=mb[i].rate;
        caddiv.appendChild(rate)
        // Offer Area
        var cname=documnet.createElement("h3")
        cname.textContent="off/-"+mb[i].offer;
        caddiv.appendChild(offer)
        // Button Area
        var btn=document.createElement("button")
        btn.textContent=mb[i].button;
        caddiv.appendChild(btn)  

    }
}