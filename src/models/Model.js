import axios from '@/plugins/axios'

export default class Model {
  makeRequest ({ method, url, data, params, onUploadProgress }) {
    return axios({ method, url, data, params, onUploadProgress })
  }
}
