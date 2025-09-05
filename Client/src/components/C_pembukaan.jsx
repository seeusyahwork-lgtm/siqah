import React from 'react'

function C_pembukaan() {
    return (
        <div className='flex flex-col lg:flex-row h-auto lg:h-[600px]'>
            {/* Bagian kiri (kuning) */}
            <div className='basis-1/2 bg-amber-300 relative flex justify-center items-center p-6'>
                {/* Container foto */}
                <div className="relative w-full max-w-md h-[350px] sm:h-[500px]">
                    {/* Foto kiri atas */}
                    <img
                        src="https://images.unsplash.com/photo-1716047866470-eee2aa333637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="foto 1"
                        className="absolute top-0 left-1/8 w-1/3 sm:w-2/5 h-40 sm:h-64 object-cover shadow-lg rounded-lg 
                       transition-transform duration-300 hover:scale-105 hover:z-50"
                    />

                    {/* Foto kanan atas */}
                    <img
                        src="https://images.unsplash.com/photo-1716047864438-9f91b14d1bb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="foto 2"
                        className="absolute top-0 left-2/4 sm:left-50 w-2/5 sm:w-1/2 h-40 sm:h-48 object-cover shadow-lg rounded-lg 
                       transition-transform duration-300 hover:scale-105 hover:z-50"
                    />

                    {/* Foto bawah */}
                    <img
                        src="https://images.unsplash.com/photo-1716047866102-ec21d084fe0e?q=80&w=1170&auto=format&fit=crop"
                        alt="foto 3"
                        className="absolute top-28 sm:top-40 left-12 sm:left-24 w-1/2 sm:w-2/3 h-48 sm:h-80 object-cover shadow-lg rounded-lg 
                       transition-transform duration-300 hover:scale-105 hover:z-50"
                    />
                </div>
            </div>

            {/* Bagian kanan (coklat) */}
            <div className='basis-1/2 bg-amber-900 flex justify-center p-6'>
                <div className="flex flex-col justify-center items-center text-center">
                    <img src='./src/assets/lg-only.png' alt='logo-only' className='w-40 h-40 ' />
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Siqah - Siap Aqiqah</h1>
                    <p className="text-base sm:text-lg text-white mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, earum porro velit consequatur tempora voluptatibus voluptatum expedita cumque fugiat, quasi accusantium harum minus doloribus vitae optio tempore. Hic, rerum expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in soluta molestias et ut atque sit tempore quam deserunt ea illum, nisi, eos error repudiandae? Eaque libero accusantium non aliquam.
                    </p>
                    <button className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded">
                        Mulai Sekarang
                    </button>
                </div>
            </div>
        </div>
    )
}

export default C_pembukaan
