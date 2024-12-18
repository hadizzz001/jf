

 

export async function fetchTemp2(type:any) { 
    console.log("enter 1");
    const response = await fetch(`/api/products2/${type}` , { next: { revalidate: 0 } }); 
    const result = await response.json();    
    return result.posts;
}



  

