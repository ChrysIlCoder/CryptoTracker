import {fetcher} from '../../../hooks/fetcher'

export const GetTrendingCryptos = async (url: string): Promise<any> => fetcher({ method: 'get', url })