function getData(){
    fetch("https://api.github.com/users").then((response)=>{
        const data= response.json();
        return data;
    }).then((response)=>{
        const data=document.getElementById("parent");
        const img=document.getElementById("avatar");
          console.log(response);
          for (i=0;i<30;i++){
          data.innerText=response[i].login;
          img.src=response[i].avatar_url;}
    })
}