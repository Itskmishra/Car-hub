import { Footer, Navbar } from '../components'
import './globals.css'


export const metadata = {
  title: 'CarHub',
  description: 'Discover brand new cars in the market.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
