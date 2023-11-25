"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect } from 'react'


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    useEffect(() => {
      require("jquery/dist/jquery.min.js");
      // require("./assets/js/main.js");
      require("./assets/js/dark-mode-switch.min.js");
      require("@fortawesome/fontawesome-free/js/all.min.js");
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, [])
    return (
      <html lang="en">
        <head>
          <title>My Portofolio</title>
        </head>
        <body>{children}</body>
      </html>
    )
  }