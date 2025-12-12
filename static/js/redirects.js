export const back_port="8000"
export const front_port="5500"
export const backendUrl =window.location.href.replace(front_port ,back_port).split("menu.html")[0]
export const frontUrl= window.location.href.split("menu.html")[0]

export async function start_login(){
    document.getElementById("iniciar").addEventListener("click",async function(){
        const response = await fetch(backendUrl+"login",{
        method: "GET",
        credentials: "include"
    });
        try{
            const data = await response.json();
            if(data.ok && data.logged) window.location.href = frontUrl+"menu.html";
            if (data.ok && !data.logged) window.location.href = data.auth_url;
        }catch(e){
            console.error(e)
        }

        
    })
}
export async function return_index(){
    document.getElementById("inicio").addEventListener("click",function(){
        window.location.href=frontUrl
    })
}
export async function return_menu(){
    document.getElementById("menu").addEventListener("click",function(){
        window.location.href=frontUrl+"menu.html"
    })
}
export async function logout(){
    document.getElementById("logout").addEventListener("click",async function(){

    let url = backendUrl + "logout"
    const res= await fetch(url,{
        method: "POST",
        credentials: "include"
    })
    const data=  await res.json();
    if(data.ok){
        window.location.href=frontUrl
    }
    })
}