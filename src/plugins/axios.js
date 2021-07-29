import axios from 'axios';
import router from '@/router';

const instance = axios.create();
instance.defaults.baseURL = 'https://5f55a98f39221c00167fb11a.mockapi.io/';
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

instance.interceptors.response.use(response => response,
  async (error) => {
    var { status } = error.response;
    if ([400, 404].includes(status)) {
      router.app.$notification.error(
        {
          message: 'message_error',
          description: `error_${status}_content`
        }
      )
      return Promise.reject(error)
    }
    if([500].includes(status)) {
      router.app.$notification.error(
        {
          message: 'message_error',
          description: `error_${status}_content`
        }
      )
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default instance
