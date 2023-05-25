import Axios from '@/utils/axios'


export function getOrderList(order_code_or_phone) {
    return Axios({
        url: '/getOrderList',
        methods: 'GET',
        params: {
            order_code_or_phone: order_code_or_phone
        }
    })
}   