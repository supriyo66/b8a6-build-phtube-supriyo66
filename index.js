const allCategory=async()=>{

    const res=await fetch(" https://openapi.programming-hero.com/api/videos/categories")
    const data=await res.json()
    const tabContainer=document.getElementById('tab-container')
    data.data.forEach((category)=>{
        const div=document.createElement('div')
        // div.innerHTML=`
        // <div class=" ml-1 flex justify-center rounded bg-gray-100 mb-10">
        // <a onclick="loadData(${category.category_id})" class="tab">${category.category}</a>
        // </div>`

        if (category.category_id !== 1005) {
            div.innerHTML = `
                <div class="ml-1 flex justify-center rounded bg-gray-100 mb-10">
                    <a onclick="loadData(${category.category_id})" class="tab">${category.category}</a>
            
                </div>
        
            `;
        } else {
            
            div.innerHTML = `
                <div class="alternative-content">
                    Your alternative content here.
                </div>
            `;
            
        }
        console.log(category.category_id)
        
        
          
        tabContainer.appendChild(div)


    }
    )

//  console.log(data.data)
}
const loadData=async(categoryId)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data=await res.json()
    const cardContainer=document.getElementById('card-container')
    cardContainer.innerHTML='';
    data.data.forEach((content)=>{
        //  console.log(content.others.views)
        const div=document.createElement('div')
        div.innerHTML=`
        <div  class="card w-72 h-72 bg-base-100 shadow-xl mx-auto">
        
        <div><figure class="w-72 h-40 rounded " ><img  src=${content.thumbnail} alt="Shoes" /></figure>
        <p class="text-end -mt-8 mr-4 text-white" id="result">${content.others.posted_date} </p>
        </div>
        
       
         <div class="card-body flex flex-row px-2 mt-2">
                  <img class="w-9 h-9 rounded-full mt-2" src="${content.authors[0].profile_picture}">
                  
                  
                  <div class="">
                  <p class=" font-bold">${content.title}</p>
                  <p class="text-light">${content.authors[0].profile_name}</p>
                  <p class="text-light">${content.others.views} <span>views</span></p>
                  
                  </div>
                  
                  
                  
                </div>`

        cardContainer.appendChild(div)
    })
   

}


allCategory()
loadData(1000)