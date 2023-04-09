const HeadLine = () => {
    return ( 
        <section className='max-w-[1640px] max-auto flex justify-between gap-4 overflow-hidden px-8 py-6 md:px-16 md:py-10'>
            {/* Left side */}
            <div className="w-160 md:h-96 bg-gradient-to-r from-sky-300 to-blue-500 rounded-xl p-4 md:py-7 md:px-10">
                <div className="text-white font-semibold text-base md:text-4xl">
                    <h3>The Best Platform</h3>
                    <h4>for Car Rental</h4>
                </div>
                <p className='mt-3 text-white font-medium text-base md:text-2xl line-clamp-2 w-2/3'>
                Ease of doing a car rental safely and 
                reliably. Of course at a low price.
                </p>
                <button className='mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded duration-300'>Rental Car</button>
                <div className="w-full mt-2 flex justify-center items-center">
                    <img className='' src={require('../image/image 7.png')} alt="" />
                </div>
            </div>
            {/* Right side */}
            <div className="hidden md:block w-160 md:h-96 bg-gradient-to-r from-sky-700 to-indigo-800 rounded-xl py-7 px-10">
                <div className="text-white font-semibold text-3xl lg:text-4xl">
                    <h3>Easy way to rent </h3>
                    <h4>a car at a low price</h4>
                </div>
                <p className='mt-6 text-white font-medium text-2xl line-clamp-2 w-2/3'>
                Providing cheap car rental services 
                and safe and comfortable facilities.
                </p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded duration-300'>Rental Car</button>
                <div className="w-full mt-2 flex justify-center items-center">
                    <img src={require('../image/image 8.png')} alt="" />
                </div>
            </div>
        </section>
     );
}
 
export default HeadLine;