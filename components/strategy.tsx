import Image from 'next/image';

export function Strategy() {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center sm:ml-60 max-w-6xl sm:mb-10 sm:mx-0 mx-1">
            <h1 className="text-center sm:text-3xl text-xl font-bold text-blue-800 sm:mt-6 mb-8">BUSINESS STRATEGY</h1>

            <div className="overflow-hidden relative sm:right-8 w-full h-full mb-4">
                <Image
                    src="/images/bus.strategy.jpg"
                    alt="Strategy"
                    width={1250}
                    height={1250}
                    style={{
                        filter: 'grayscale(60%)',
                        objectFit: 'cover'
                    }}
                     className="w-full h-[520px] sm:h-auto"
                />
                <h1 className="text-center text-blue-400 font-extrabold sm:text-4xl text-2xl absolute inset-0 flex m-6 mt-4">OUR CORE BUSINESS FOCUS</h1>
                <div className="absolute inset-0 flex flex-col items-start justify-center text-black font-bold sm:text-xl text-sm sm:m-6 m-2 sm:mt-20 sm:space-y-4 space-y-2 mt-14">
                    <span className="bg-blue-300 p-2 animate-color-changing">Business Evaluation</span>
                    <span className="bg-blue-300 p-2 animate-color-changing">Report Assessment</span>
                    <span className="bg-blue-300 p-2 animate-color-changing">Profit Strategy</span>
                    <span className="bg-blue-300 p-2 animate-color-changing">Project Oversight</span>
                    <span className="bg-blue-300 p-2 animate-color-changing">Estate Management</span>
                    <span className="bg-blue-300 p-2 animate-color-changing">Real Estate Investment</span>
                    <span className="bg-blue-300 p-2 animate-color-changing">Property Administration</span>
                    <span className="bg-blue-300 p-2 animate-color-changing">Financial Investments</span>
                    <span className="bg-blue-300 p-2 animate-color-changing">Strategic Partnerships</span>
                </div>
            </div>
        </div>
    );
}
