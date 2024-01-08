const api='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'
const inp=document.getElementById('inp');
const images=document.querySelector('.image')
const  getImage =async () =>{ 
    const methods={
        method:'POST',
        headers:{
            "Content-Type":" application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
               "prompt":inp.value,
               "n":3,
               "size":"256x256"
            }
        )
    }
    const res= await fetch('https://api.openai.com/v1/images/generations',methods)
    const data=await res.json();
    const imageList=data.data
    images.innerHTML=''
    imageList.map(photo=>{
      const container=document.createElement("div");
      images.append(container);
      const img=document.createElement("img") 
      container.append(img) 
      img.src=photo.url
    })
}