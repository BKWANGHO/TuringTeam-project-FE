import { instance } from "@/app/components/common/configs/axios-config"


export const findAllArticlesAPI = async (page:number)=>{

try{
    const response = await instance.get('/articles/list',{
        params:{page,size:10,limit:10}
    })
    console.log('api확인 : '+response.data)
return response.data
}catch(error){
console.log(error)
}}

export const findArticleByIdAPI = async (id:number)=>{

    try{
        const response = await instance.get('/articles/detail',{
            params:{id}
        })
        console.log('api확인 : '+response.data)
    return response.data
    }catch(error){
    console.log(error)
    }}