import { Container } from '@/components/Container'
import { Logo } from './Logo'
import { Search } from './Search'
import { UserMenu } from './UserMenu'

export function Navbar () {
  return (
    <header className='sticky w-full bg-white shadow-sm'>
      <div className='py-4 border-b'>
        <Container>
          <div className='flex items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  )
}
