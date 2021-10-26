import Head from 'next/head'
import Image from 'next/image'
import ChatDetails from '../components/ChatDetails'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Nav/>
      <ChatDetails/>
    </>
  )
}
