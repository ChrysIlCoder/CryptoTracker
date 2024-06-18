import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.scss'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { cryptosSagaActions } from '../../redux/saga/cryptos/slice/cryptosSlice'
import { cryptosActions } from '../../redux/saga/cryptos/slice'
import { useSearchParams } from 'react-router-dom'

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' })
  const query = searchParams.get('query')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query !== '' ) {
      dispatch(cryptosSagaActions.sagaGetSearchResults(query))
    } else {
      dispatch(cryptosActions.reset())
      dispatch(cryptosSagaActions.sagaGetTrendingCryptos)
    }
  }

  return (
    <div className='search_bar_container'>
      <FontAwesomeIcon className='search_bar_container__icon' icon={faMagnifyingGlass} color='white' />
      <form className='search_bar_container__form' onSubmit={handleSubmit}>
        <input 
          className='search_bar_container__form__input' 
          name='search'
          placeholder='Search Cryptos...' 
          type="search"
          onChange={(e) => setSearchParams({ query: e.target.value })}
          //@ts-ignore
          onClick={(e) => setSearchParams({ query: e.target.value })}
          //@ts-ignore
          value={query}
        />
      </form>
    </div>
  )
}
