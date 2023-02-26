import axios from '../request'
export function getTagList(){
    return axios({
        method:'get',
        url:'/api/j/search_tags?type=tv&source=index',
    })
}export function getList(tag,limit){
    return axios({
        method:'get',
        url:`/api/j/search_subjects?type=tv&tag=${tag}&page_limit=${limit}&page_start=0`,
    })
}