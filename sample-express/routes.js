import fetch from "node-fetch";

const routeHello = ()=>"Hello, world!";

const routeAPINames = async ()=>{
    const url ="https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try{
        const reponse = await fetch(url);
        data = await reponse.json();

    }catch(err){
        return err;
    }
    const names = data.map((item)=>`id:${item.id}, name:${item.name}`).join("<br />");
    return names;
}

export {routeHello, routeAPINames};