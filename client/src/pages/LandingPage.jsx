import React from 'react';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';

const LandingPage = () => {
  return (
    <section class='text-gray-600 body-font'>
      <Banner />

      <h2 className='pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl'>
        Clean and tidy code.
      </h2>
      <br></br>
      <p className='mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3'>
        Here is our collection of free to use templates made with Next.js &
        styled with Tailwind CSS.
      </p>
      <div className='pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3'>
        <div class='ktq4'>
          <img className='w-10' src='https://nine4.app/favicon.png'></img>
          <h3 class='pt-3 font-semibold text-lg text-white'>
            Lorem ipsum dolor sit amet
          </h3>
          <p class='pt-2 value-text text-md text-gray-200 fkrr1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class='ktq4'>
          <img className='w-10' src='https://nine4.app/favicon.png'></img>
          <h3 class='pt-3 font-semibold text-lg text-white'>
            Lorem ipsum dolor sit amet
          </h3>
          <p class='pt-2 value-text text-md text-gray-200 fkrr1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class='ktq4 '>
          <img className='w-10' src='https://nine4.app/favicon.png'></img>
          <h3 class='pt-3 font-semibold text-lg text-white'>
            Lorem ipsum dolor sit amet
          </h3>
          <p class='pt-2 value-text text-md text-gray-200 fkrr1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class='ktq4'>
          <img className='w-10' src='https://nine4.app/favicon.png'></img>
          <h3 class='pt-3 font-semibold text-lg text-white'>
            Lorem ipsum dolor sit amet
          </h3>
          <p class='pt-2 value-text text-md text-gray-200 fkrr1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>
      <div className='pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3'>
        <div class='ktq4'>
          <img src='https://nine4.app/images/nine4-3.png'></img>
          <h3 class='pt-3 font-semibold text-lg text-white'>
            Lorem ipsum dolor sit amet
          </h3>
          <p class='pt-2 value-text text-md text-gray-200 fkrr1'>
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
        <div class='ktq4'>
          <img src='https://nine4.app/images/nine4-3.png'></img>
          <h3 class='pt-3 font-semibold text-lg text-white'>
            Lorem ipsum dolor sit amet
          </h3>
          <p class='pt-2 value-text text-md text-gray-200 fkrr1'>
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export default LandingPage;
