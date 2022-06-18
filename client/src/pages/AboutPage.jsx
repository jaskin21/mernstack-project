import React from 'react'
import { Link } from 'react-router-dom';
import Picture from '../images/about-image.jpg'


const AboutPage = () => {
  return (


<section class="text-gray-400  body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <h2 className='pt-40 mb-8 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl'>
      About Us
    </h2>
    <h2 class='text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-300 text-center'>
      "Quick, and Simple"
    </h2>
    
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Picture} />
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Our Mission</h1>
      <p class="leading-relaxed mb-8">
        Our premise is simple: we believe questions and answers are the building blocks of conversation, self-expression and deeper understanding.
        As the only global social network built on a Question format, we are a bit different from other services you might use.
        How you engage with friends and express yourself on SLVL is done through the lens of what your social connections are curious to learn about you.
        Through the natural curiosity of questions, SLVL to be a safe, fun and engaging place for learning more about yourself and exploring the social world around you.
      </p>


      <div className='ml-6 text-center'>
        <Link
          className='inline-flex items-center py-3 font-semibold  text-white hover:text-black transition duration-500 ease-in-out transform bg-transparent  px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline'
          to={'/about'}
        >
          <div className='flex text-lg'>
            <span className='justify-center'>Learn more</span>
          </div>
        </Link>
        <Link
          className='inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline'
          to={'/register'}
        >
          <div className='flex text-lg'>
            <span className='justify-center'>Join now</span>
          </div>
        </Link>
      </div>


    </div>
  </div>

  


</section>


  )
}

export default AboutPage