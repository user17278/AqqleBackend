import Axios from '../utils/axios'

export function login(input_data) {
    return Axios({
        url: '/login',
        method: 'POST',
        data: input_data
    })
}