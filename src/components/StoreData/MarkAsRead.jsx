import { toast } from "react-toastify";


const getMarkStoreRead=()=>{
    const storeDataListStr=localStorage.getItem('read-list');
    if(storeDataListStr){
        const storeList=JSON.parse(storeDataListStr);
        return(storeList);
    }
    else{
        return [];
    }
}

const addToStoreReadList=(id)=>{
    const storeList=getMarkStoreRead();
    if(storeList.includes(id)){
        console.log(id,'alreadey exist')
    }
    else{
        storeList.push(id);
        const storeListStr=JSON.stringify(storeList)
        localStorage.setItem('read-list',storeListStr)
        toast('Thos Book is added to your list')
    }
}
export{addToStoreReadList,getMarkStoreRead}