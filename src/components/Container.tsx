// 'use client'

export function Container ({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-[157rem] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      {children}
    </div>
  )
}
