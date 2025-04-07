
'use client'
import './globals.css'

// import Footer from './footer/footer';
import Footer from './footer/footer'
import NavBar from './header/header'
import { ThemeProvider } from './providers'
import { CssBaseline } from '@mui/material';



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider>
          <CssBaseline />
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 