const getStoredApps =()=>{

const storedAppsSTR = localStorage.getItem('installList');

if(storedAppsSTR){
    const storedAppsData = JSON.parse(storedAppsSTR);
    return storedAppsData;
}
else{
    return [];
}
}


const addToStoreDB=(id)=>{
const storedAppsData = getStoredApps();

if(storedAppsData.includes(id)){
    return
}
else{
    storedAppsData.push(id)

    const data=JSON.stringify(storedAppsData)
    localStorage.setItem("installList",data)
    

}
}

export {addToStoreDB, getStoredApps};