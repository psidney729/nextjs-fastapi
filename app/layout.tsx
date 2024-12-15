import TopMenuBar from '@/components/TopMenuBar'
import { AuthProvider } from '@/components/providers/auth'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { CssBaseline } from '@mui/material'
import { SnackBarProvider } from '@/components/providers/snackbar'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          {/* <ThemeProvider theme={theme}>
            <CssBaseline /> */}
          <main>
            <SnackBarProvider>
              <TopMenuBar />
              {children}
            </SnackBarProvider>
          </main>
          {/* </ThemeProvider> */}
        </body>
      </html>
    </AuthProvider>
  )
}
