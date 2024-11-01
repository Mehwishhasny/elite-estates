import Image from 'next/image';

export function Services() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center sm:ml-64 max-w-6xl sm:mb-10 sm:mx-0 mx-4">
      <h1 className="text-blue-800 font-bold sm:text-3xl text-xl mt-10 text-center">
        OUR EXPERT BUSINESS OFFERINGS
      </h1>
      <h2 className="text-gray-800 font-bold sm:text-xl text-lg text-center">
        Your Outcomes Are Our Greatest Concern!
      </h2>

      <div className="mt-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">

    
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative max-w-lg bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden md:mr-6">
            <Image
              src="/images/services.jpg"
              alt="Services"
              objectFit="cover"
              width={500}
              height={500}
              className="object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center text-blue-800 font-bold text-3xl bg-blue-100 bg-opacity-30 p-2 rounded-lg">
              Services
            </p>
          </div>

          <div className="w-full max-w-lg p-6">
            <p className="text-black">
            We offer complete, tailored solutions to meet all your relocation needs, ensuring a seamless move to the UAE. From visa assistance to housing and local integration, we manage every detail with care and precision. Our expert team is committed to making the process smooth and stress-free. With our comprehensive approach, your transition will be flawless. Trust us to make your move effortless, so you can focus on new opportunities in the UAE.
            </p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 mt-4">
              Click here
            </button>
          </div>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row items-center mt-12">
        <div className="w-full max-w-lg p-6 order-2 md:order-1">
          <p className="text-black">
          We prioritize our clients needs, offering customized solutions that ensure a seamless migration experience to the UAE. Our dedicated team carefully navigates every aspect of the process, from visa applications to settling in. By understanding individual requirements, we create tailored plans that minimize stress and maximize efficiency. Our commitment to excellence guarantees a smooth transition, allowing clients to focus on their new opportunities. Trust us to make your move to the UAE as flawless as possible.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 mt-4">
            Click here
          </button>
        </div>

        <div className="relative max-w-lg bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden md:mr-6 order-1 md:order-2">
          <Image
            src="/images/approach.jpeg"
            alt="Our Approach"
            objectFit="cover"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-blue-800 font-bold text-3xl bg-blue-100 bg-opacity-30 p-2 rounded-lg">
            Our Approach
          </p>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row items-center mt-12">
        <div className="relative max-w-lg bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden md:mr-6 order-1">
          <Image
            src="/images/results.jpg"
            alt="Results"
            objectFit="cover"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-blue-800 font-bold text-3xl bg-blue-100 bg-opacity-30 p-2 rounded-lg">
            Results
          </p>
        </div>

        <div className="w-full max-w-lg p-6 order-2">
          <p className="text-black">
          Our results consistently exceed expectations, reflecting our commitment to excellence. We take pride in delivering outstanding service that leaves clients delighted. Dont just take our word for it—explore our customer testimonials to see their experiences. Discover how we have made a positive impact on their journeys.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 mt-4">
            Click here
          </button>
        </div>
      </div>
    </div>
  );
}
