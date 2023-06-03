interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export function MenuItem ({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className='px-4 py-3 hover:bg-neutral-100 transition-colors font-semibold block w-full'>
      {children}
    </button>
  )
}
