let token = null

const setToken = newToken =>{
    token = `Bearer ${newToken}`
    return token
}
const config =  {
    headers:{
        tokenn:token
    }
}
console.log(config(setToken('asd')))
export default {setToken}