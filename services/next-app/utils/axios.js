import axios from 'axios'
import { makeUseAxios } from 'axios-hooks'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
const API_URI = serverRuntimeConfig.apiUrl || publicRuntimeConfig.apiUrl

const instance = axios.create({
    baseURL: API_URI
});

export default instance

export const useAxios = makeUseAxios({
    axios: instance
})