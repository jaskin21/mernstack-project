import React from 'react';

const AnswerCardComponent = () => {
  return (
    <section className="text-gray-400 body-font p-2">
      <div className="container mx-auto">

        {/* border */}
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg"> 
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">Answer</label>
              <h3 className='pt-3 font-semibold text-lg text-white'>
                (Question)Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                (Answer)Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
                Nullam vehicula, libero at euismod tristique, neque ligula faucibus
                urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
                rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
                odio.
              </p>
            </div>
          </div>
        </div>
        {/* /border */}

      </div>
    </section>
  )
};

export default AnswerCardComponent;
