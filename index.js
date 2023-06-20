const fun = async()=>{
    const response =await fetch('https://cat-fact.herokuapp.com/facts');
    if (response.status!== 200){
      throw new Error("couldn't able to fetch data");
    }
    const data =await response.json();
    console.log(data);
    const maindiv =document.getElementById("datatodisplay");
    data.forEach((item) => {
     const addingelement= document.createElement("li");
     addingelement.classList.add("facts");
     addingelement.textContent=item.text;
     maindiv.appendChild(addingelement);
     addingelement.style.textAlign="center";
    })
    };
    fun();