const category = "https://www.themealdb.com/api/json/v1/1/categories.php"

//selectors

const getCategory = () => {
    const categories = document.querySelector(".categories")
    const cards = document.querySelector(".cards")
    fetch(category)
    .then(res=>res.json())
    .then(data=>{
        //console.log(data.categories)
        data.categories.forEach(item=>{
            //console.log(item)
            const card = document.createElement("div")
            cards.appendChild(card)
            card.classList.add("card")
            const image = document.createElement("div")
            image.classList.add("image")
            const name = document.createElement("div")
            name.classList.add("name")
            const description = document.createElement("div")
            description.classList.add("desc")
            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(description)

            image.innerHTML =  `
            <img src="${item.strCategoryThumb}" alt="category image">
            `
            name.textContent = item.strCategory
            description.textContent = item.strCategoryDescription
        })

    })
    .catch(err=>{
        console.log(err)
        cards.textContent = err.message;
        setInterval(getCategory, 1000)
    })
}


getCategory()