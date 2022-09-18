export const BaseUrl ="https://htm-project.herokuapp.com"

export const getBearer = ()=>{
    const data = sessionStorage.getItem('bearer');
    console.log(data)
}