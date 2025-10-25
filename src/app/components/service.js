import Image from 'next/image'
import { FaPencilAlt, FaFirstAid } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'

function Service() {
  return (
    <div>
        <div className='text-white mt-8 mx-20'>
          <h1 className='text-xl font-bold'>Services I Offer</h1>
          <p>Legendary assasin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John&apos;s prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seek vengence. Meanwhile Iosef&apos;s father (Michael Nyqvist) -- John&apos;s former colleague -- puts a huge bounty on John&apos;s head.</p>
        </div>
        <div className='mt-8 mx-20 flex gap-4'>
          <div className='bg-white rounded-xl py-5'>
            <FaPencilAlt className='m-auto text-4xl' />
            <h1 className='mt-5 text-center'>Dummy Text</h1>
            <p className='mt-3 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.</p>
            <h1 className='mt-3 text-center'>Dummy Text</h1>
          </div>
          <div className='bg-white rounded-xl py-5'>
            <FaFirstAid className='m-auto text-4xl' />
            <h1 className='mt-5 text-center'>Dummy Text</h1>
            <p className='mt-3 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.</p>
            <h1 className='mt-3 text-center'>Dummy Text</h1>
          </div>
          <div className='bg-white rounded-xl py-5'>
            <FaGears className='m-auto text-4xl' />
            <h1 className='mt-5 text-center'>Dummy Text</h1>
            <p className='mt-3 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.</p>
            <h1 className='mt-3 text-center'>Dummy Text</h1>
          </div>
        </div>
        <div className='text-white mt-8 mx-20'>
          <h1 className='text-xl font-bold'>Services I Offer</h1>
          <p>Legendary assasin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John&apos;s prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seek vengence. Meanwhile Iosef&apos;s father (Michael Nyqvist) -- John&apos;s former colleague -- puts a huge bounty on John&apos;s head.</p>
        </div>
        <div className='grid grid-cols-2 gap-3 mx-20 mt-2'>
          <Image src='/image1.jpg' className='h-[400px] w-[100%]' width={4} height={4} alt='Image1'></Image>
          <Image src='/image2.jpg' className='h-[400px] w-[100%]' width={4} height={4} alt='Image2'></Image>
          <Image src='/image3.jpg' className='h-[400px] w-[100%]' width={4} height={4} alt='Image3'></Image>
          <Image src='/image4.jpg' className='h-[400px] w-[100%]' width={4} height={4} alt='Image4'></Image>
          <Image src='/image6.jpg' className='h-[400px] w-[100%]' width={4} height={4} alt='Image6'></Image>
          <Image src='/image5.jpg' className='h-[400px] w-[100%]' width={4} height={4} alt='Image5'></Image>
        </div>
    </div>
  )
}

export default Service