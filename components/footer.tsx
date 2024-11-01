import Image from 'next/image';

export function Footer() {
    return (
        <div className="flex flex-col w-full sm:w-[1150px] sm:h-[350px] text-white justify-between items-center relative sm:left-20 left-0 mx-auto mt-0 sm:mb-4 mb-2 rounded-lg bg-gray-800">
            <div className="flex flex-col sm:flex-row justify-between w-full px-4">
                <div className="flex-col items-center m-2 mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68282783724!2d54.89781681599858!3d25.076280446331303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1729324009033!5m2!1sen!2s"
                        width="100%"
                        height="170"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="mt-4">
                        <a
                            href="https://www.google.com/maps/place/City+Centre+Deira/@25.2519707,55.3302278,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5cdf62ec2201:0x5a603bb4d5e3231e!8m2!3d25.2519659!4d55.3328027!16s%2Fm%2F03qhqnm?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline ml-6 font-bold text-sm"
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-end max-w-sm mt-6">
                    <h1 className="sm:text-3xl text-lg font-extrabold text-white bg-blue-800 sm:px-2 py-1 rounded sm:mr-16 mr-20">Elite Estates</h1>
                    <p className="text-sm text-white mt-4 p-4">
                        Elite Estates is a reputable real estate firm committed to assisting individuals and businesses in realizing their property aspirations. We elevate the real estate experience for our clients, empowering them to achieve their goals and secure a prosperous future.
                    </p>
                </div>
            </div>

            <div className="flex sm:space-x-8 space-x-2 items-center justify-center sm:mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/fb.png"
                        alt="Facebook Icon"
                        width={40}
                        height={30}
                        className="hover:opacity-80 transition-opacity duration-300"
                    />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/insta.png"
                        alt="Instagram Icon"
                        width={40}
                        height={40}
                        className="hover:opacity-80 transition-opacity duration-300"
                    />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/twitter.png"
                        alt="Twitter Icon"
                        width={40}
                        height={50}
                        className="hover:opacity-80 transition-opacity duration-300"
                    />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/linkedin.png"
                        alt="LinkedIn Icon"
                        width={30}
                        height={30}
                        className="hover:opacity-80 transition-opacity duration-300"
                    />
                </a>
            </div>

            <div className="flex justify-center mb-2 sm:mt-0 mt-2s">
                <p className="text-sm">© 2024 Elite Estates. All rights reserved.</p>
            </div>
        </div>
    );
}
