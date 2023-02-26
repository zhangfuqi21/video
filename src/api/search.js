import axios from '../request'
export function searchList(title,limit){
    return axios({
        method:'get',
        url:`/lay/video/search/title/${title}/1/${limit}`,
    })
}

export function detailList(videoId){
    return axios({
        method:'get',
        url:`/lay/videoChapter/search/${videoId}`,
    })
}