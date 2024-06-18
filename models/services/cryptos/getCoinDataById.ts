import {fetcher} from '../../../hooks/fetcher'

export const GetCoinDataById = async (url: string): Promise<any> => fetcher({ method: 'get', url })