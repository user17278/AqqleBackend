import Axios from '../utils/axios'

export function regUser(input_data) {
    return Axios({
        url: '/register',
        method: 'POST',
        data: input_data,
    })
}