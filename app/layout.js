import { Inter } from 'next/font/google'
import './globals.css'
import NavBarComp from './components/Navigation/NavBarComp'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lovelife Memories',
  description: 'Make your memories last forever',
  // icons: {
  //   icon: logo,
  // },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='mytheme'>
      <body className={inter.className}>
        <NavBarComp />
        {children}
        <Footer />
      </body>
    </html>
  )
}
