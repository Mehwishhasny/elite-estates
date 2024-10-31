import Image from 'next/image';
import Link from 'next/link';

interface MediaProps {
  openModal: () => void;
  openSignUpModal: () => void; 
}

export function Media({ openModal, openSignUpModal }: MediaProps) {
  return (
    <div className="bg-blue-900 sm:w-[1150px] w-full h-[80px] flex justify-between items-center sm:absolute mx-auto mt-20 sm:mt-2 sm:mb-12 mb-2 rounded-lg sm:right-5">
      <div className="flex sm:flex-row flex-col sm:absolute sm:p-5 p-1 space-x-4 sm:right-0 top-0">
        <div className="sm:mr-4 mb-2 ml-4">
          <button
            onClick={openSignUpModal} 
            className="bg-gray-600 text-white sm:px-4 sm:py-2 rounded hover:bg-gray-500 transition duration-300 sm:text-base text-sm p-1"
          >
            Sign Up
          </button>
        </div>

        <div className="mb-2">
          <button
            onClick={openModal}
            className="bg-gray-600 text-white sm:px-4 sm:py-2 rounded hover:bg-gray-500 transition duration-300 sm:text-base text-sm p-1"
          >
            Book a Tour
          </button>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-center sm:justify-between">
        <div className="p-1 text-white flex items-center">
          <Image src="/images/location.png" alt="Location Icon" width={24} height={24} className="sm:w-6 sm:h-6" />
          <p className="sm:text-md text-sm ml-2">
            <Link
              href="https://www.google.com/maps/place/Dubai+-+United+Arab+Emirates/@25.0762804,54.8978168,10z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43496ad9c645:0xbde66e5084295162!8m2!3d25.2048493!4d55.2707828!16zL20vMDFmMDhy?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              : Dubai City Centre
            </Link>
          </p>
        </div>

        <div className="text-white flex items-center">
          <Image src="/images/mail.png" alt="Mail Icon" width={24} height={24} className="sm:w-6 sm:h-6" />
          <p className="sm:text-md text-sm ml-2">
            <Link href="mailto:gmail.com" className="hover:underline">: info@gmail.com</Link>
          </p>
        </div>

        <div className="text-white flex items-center">
          <Image src="/images/phone.png" alt="Call Icon" width={24} height={24} className="sm:w-6 sm:h-6" />
          <p className="sm:text-md text-sm ml-2">
            <Link href="https://www.whatsapp.com" target="_blank" className="hover:underline">
              : 9216736458959
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
