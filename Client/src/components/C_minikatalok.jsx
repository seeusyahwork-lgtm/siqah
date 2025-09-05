import React from 'react'

function C_minikatalok() {
    return (
        <div>
            <h1 className='text-3xl font-bold justify-center text-center m-auto mb-6'>
                C_minikatalok
            </h1>
            <div className='flex flex-col lg:flex-row h-auto lg:h-[800px]'>

                {/* Bagian kiri (kuning) */}
                <div className='basis-1/2 bg-amber-300 relative flex justify-center items-center p-6'>
                    {/* Container foto */}
                    <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                className="rounded-box" />
                        </div>
                    </div>
                </div>

                {/* Bagian kanan (coklat) */}
                <div className='basis-1/2 bg-amber-900 flex justify-center p-6'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-amber-600 p-4 rounded items-center  ">
                            <h1 className='text-2xl font-bold justify-center text-center m-auto mb-6'>
                                Paket 1 - Full pack
                            </h1>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
                            </p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                            </ul>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
                            </p>

                            {/* Tombol ditengah */}
                            <div className="flex justify-center mt-4">
                                <button className='bg-amber-200 text-black py-2 px-4 rounded hover:bg-amber-400'>
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>
                        <div className="bg-amber-600 p-4 rounded">
                            <h1 className='text-2xl font-bold justify-center text-center m-auto mb-6'>
                                Paket 1 - Full pack
                            </h1>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
                            </p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                            </ul>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
                            </p>

                            {/* Tombol ditengah */}
                            <div className="flex justify-center mt-4">
                                <button className='bg-amber-200 text-black py-2 px-4 rounded hover:bg-amber-400'>
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>
                        <div className="bg-amber-600 p-4 rounded">
                            <h1 className='text-2xl font-bold justify-center text-center m-auto mb-6'>
                                Paket 1 - Full pack
                            </h1>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
                            </p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                            </ul>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia.
                            </p>

                            {/* Tombol ditengah */}
                            <div className="flex justify-center mt-4">
                                <button className='bg-amber-200 text-black py-2 px-4 rounded hover:bg-amber-400'>
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>
                        <div className="bg-amber-600 p-4 rounded">
                            <h1 className='text-2xl font-bold justify-center text-center m-auto mb-6'>
                                List Paket lainnya 
                            </h1>
                             <p className='text-center'>
                                penyesuaian paket dan harga
                            </p>

                            {/* Tombol ditengah */}
                            <div className="flex justify-center mt-4">
                                <button className='bg-amber-200 text-black py-2 px-4 rounded hover:bg-amber-400'>
                                    Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default C_minikatalok