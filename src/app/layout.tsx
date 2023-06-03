import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from '@/components/navbar'
// import { Modal } from '@/components/modals'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'This is an Airbnb clone built with Next.js and Tailwind CSS.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} min-h-screen`}>
        {/* <Modal /> */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
