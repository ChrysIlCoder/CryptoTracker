import {fetcher} from '../../../hooks/fetcher'

export const GetSearchResults = async (url: string): Promise<any> => fetcher({ method: 'get', url })