import Head from 'next/head'
import Countdown, { zeroPad } from 'react-countdown'

export default function Home() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <p>
          <span>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span><br/>
          <span className="mt-3 text-5xl">Days Hrs Min Secs</span>
        </p>
      );
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey-pattern">
      <Head>
        <title>DIKOUBA Coming Soon...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-indigo-800" href="https://nextjs.org">
            DIKOUBA
          </a>
        </h1>
        <p className="mt-3 text-2xl text-red-900 py-5">
          Coming soon...
        </p>
        
        <div className="flex flex-wrap items-center justify-around max-w-full mt-full sm:w-full py-10 bg-indigo-50">

          <p className="mt-3 text-7xl">
            <Countdown date={Date.parse("2022-01-01")} renderer={renderer} />
          </p>
          
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/favicon.ico" alt="Dikouba logo" className="h-4 ml-2" />
          {' '}DIKOUBA
        </a>
      </footer>
    </div>
  )
}
