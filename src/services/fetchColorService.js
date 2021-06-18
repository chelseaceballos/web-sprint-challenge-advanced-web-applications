import { axiosWithAuth } from '../helpers/axiosWithAuth';

const mockFetchColors = () => {
    return axiosWithAuth()
    .get("/colors")
    .then(res =>{
        console.log(res)
        return res        
    })
}

export default mockFetchColors;