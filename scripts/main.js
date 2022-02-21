async function apiCall(url) {
    //add api call logic here
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        return data;

    }catch(err){
        console.log(err);
    }
}

function appendArticles(articles, main) {
    //add append logic here
    articles.forEach(element => {

        let div = document.createElement("div");
        div.addEventListener("click", () =>{
            localStorage.setItem("article", JSON.stringify(element))
            window.location.href = "news.html";
        })

        let img = document.createElement("img");
        img.src = element.urlToImage;

        let content = document.createElement("p");
        content.innerText = element.title

        div.append(img,content);
        main.append(div);
    });
}

export { apiCall, appendArticles }