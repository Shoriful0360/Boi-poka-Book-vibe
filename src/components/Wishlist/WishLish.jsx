import { json } from "react-router-dom";


const getWishListData=()=>{
    const getData=localStorage.getItem('wish-list');
    if(getData){
        const getDataParse=JSON.parse(getData);
        return(getDataParse)
    }
    else{
        return []
    }
}

const addWishListData=(id)=>{
    console.log(id)
    const addWishListData=getWishListData();
    if(addWishListData.includes(id)){
        console.log(id,'alreade exist')
    }
    else{
        addWishListData.push(id)
        const addWishListDataStr=JSON.stringify(addWishListData);
        localStorage.setItem('wish-list',addWishListDataStr)
    }

}

export {addWishListData}