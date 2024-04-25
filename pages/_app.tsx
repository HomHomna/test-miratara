import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = useState<string | null>('Explore')

  return (
    // <Layout menu={menu} setMenu={setMenu}>
      <Component {...pageProps} menu={menu} setMenu={setMenu}/>
    // </Layout>
  )
}
