

export async function fetchTemp() { 
    const response = await fetch('/api/posts', { next: { revalidate: 0 } });
    const result = await response.json();  
    return result.posts; 
}



export async function fetchTemp2(id:any) { 
    const response = await fetch(`/api/posts2/${id}` , { next: { revalidate: 0 } }); 
    const result = await response.json();    
    return result.posts;
}



 

export async function fetchTemp3(id:any) { 
    const response = await fetch(`/api/posts/${id}` , { next: { revalidate: 0 } }); 
    const result = await response.json();    
    return result.posts;
}


