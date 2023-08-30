import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { NextPage } from "next"
import { AppProps } from "next/app"
import Head from "next/head"
import * as React from "react"
import theme from "./config/theme"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}
// Client-side cache, shared for the whole session of the user in the browser.

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
}

export default function MyApp(props: MyAppProps) {
  const { Component,  pageProps } = props
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)

  return (<div>
          <Head>
            <title>Prédiagnostic</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
            </ThemeProvider>
      </div>
  )
}
