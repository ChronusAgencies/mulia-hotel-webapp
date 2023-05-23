
import MobileHeader from '@/components/layouts/mobile/mobileHeader/mobileHeader'
import '@/app/styles/global.scss'
import SideModal from '@/components/layouts/sideModal/sideModal'

export const metadata = {
  title: 'Mulia - Web App',
  description: 'Plan your vacation more easier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <SideNav/> */}
        <MobileHeader/>
        <SideModal/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

