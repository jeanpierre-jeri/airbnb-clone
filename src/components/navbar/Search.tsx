import { SearchIcon } from '../Icons'

export function Search () {
  return (
    <div className='border-b w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition-shadow'>
      <div className='flex items-center justify-between'>
        <button className='text-sm font-semibold px-6'>
          Anywhere
        </button>

        <button className='hidden sm:block text-sm font-semibold px-6 border-x flex-1 text-center'>
          Any Week
        </button>

        <button className='text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3'>
          <span className='hidden sm:block'>
            Add Guests
          </span>
          <i className='p-2 bg-rose-500 rounded-full text-white'>
            <SearchIcon />
          </i>
        </button>
      </div>
    </div>
  )
}
