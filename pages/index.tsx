import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Button } from '../packages/mo-ui-base/src/Button/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button>hi</Button>
      </main>
    </>
  )
}
