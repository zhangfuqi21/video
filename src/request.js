
import axios from 'axios'
const api =axios.create({
    // baseURL:'http://movie.douban.com',
    timeout: 2000
})
export default api