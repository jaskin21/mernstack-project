import React from 'react';

const ProfileCardComponent = () => {
  return (
    <section class="text-gray-400 body-font">
      <div class="container py-20 mx-auto">
        {/* border */}
        <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg"> 
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-5/6">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-white">Holden Caulfield</h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /border */}
      </div>
    </section>
  )
}

export default ProfileCardComponent;
