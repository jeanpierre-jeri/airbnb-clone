'use client'
import { useState } from 'react'
import { AvatarIcon, OutlineMenuIcon } from '../Icons'
import { MenuItem } from './MenuItem'

export function UserMenu () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div className='relative'>
      <div className='flex items-center gap-3'>
        <button className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition-colors'>
          Airbnb your home
        </button>

        <button onClick={toggleIsOpen} className='p-1 pl-3 border border-neutral-200 flex items-center gap-3 rounded-full hover:shadow-md transition-shadow'>
          <OutlineMenuIcon />
          <i className='hidden md:block text-neutral-500'>
            <AvatarIcon />
          </i>
        </button>
      </div>

      {isOpen && (
        <div className='absolute rounded-xl shadow-md bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col'>
            <>
              <MenuItem>
                Login
              </MenuItem>
              <MenuItem>
                Sign up
              </MenuItem>
            </>
          </div>
        </div>
      )}
    </div>
  )
}
