import avatarAlex from './assets/images/avatar-alex.jpeg';
import { SocialMediaButton } from './components/SocialMediaButton';

function App() {

  return (
    <div className='h-screen flex items-center justify-center bg-stone-900 font-[Inter_SemiBold]'>
      <div className="flex flex-col items-center bg-stone-800 w-full mx-6 rounded-lg p-6 sm:w-xl">
        <img src={avatarAlex} alt="Avatar Icon" className='rounded-full w-24 mb-4' />
        <h1 className='text-white text-2xl mb-2'>Alexandru Fulga</h1>
        <h2 className='text-lime-300 mb-8'>Villarrobledo, Albacete</h2>
        <h3 className='text-gray-300 text-sm mb-6'>"Full-stack developer y lector ávido."</h3>
        <div className="flex flex-col w-full">
          <SocialMediaButton name='GitHub' link={'https://github.com/Alexandru-Fulga'} />
          <SocialMediaButton name='LinkedIn' link={'https://www.linkedin.com/in/alexandru-fulga-214350180/'} />
          <SocialMediaButton name='Instagram' link={'https://www.instagram.com/alexandru_q/'} />
        </div>
      </div>
    </div>
  )
}

export default App
