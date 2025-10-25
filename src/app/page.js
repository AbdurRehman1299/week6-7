import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Service from './components/service'

function Page() {
  return (
    <div className='bg-blue-950 min-h-screen font-serif'>
        <div className='flex items-center justify-between pt-5 pl-20 pr-50'>
            <h1 className='text-white'>Next JS</h1>
            <button className='text-white bg-blue-400 px-11 py-2 rounded-xl hover:bg-blue-500'>Cv</button>
        </div>
        <div className='text-center m-auto w-2/4 mt-20'>
          <h1 className='text-3xl text-blue-300 font-bold'>John Wick</h1>
          <h3 className='text-white text-lg mt-2'>Actor and Artist</h3>
          <p className='text-gray-300 mt-4'>John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski in his directional debut from a screenlay by Derek Kolstand.</p>
          <div className='w-[200px] flex items-center justify-between mx-auto mt-5 text-white text-2xl'>
            <FaFacebook />
            <FaLinkedin />
            <FaYoutube />
          </div>
          <img src='image.webp' className='w-[152px] h-[152px] mt-5 m-auto rounded-full' />
        </div>
        <Service />
    </div>
  )
}

export default Page