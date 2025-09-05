import React from 'react'

function C_aqiqah() {
    return (
        <div className='flex flex-col h-auto lg:h-[600px]'>
            <h1 className='text-2xl font-bold justify-center m-auto mb-6'>
                C_aqiqah
            </h1>

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-cyan-700 p-4'>
                
                <div className='bg-amber-600 p-4 rounded'>
                    <h3 className='text-xl font-bold text-center mb-2'>Pengertian Aqiqah</h3>
                    <p className='text-justify'>
                        Pengertian aqiqah dalam istilah agama berarti penyembelihan hewan untuk anak
                        yang baru lahir sebagai bentuk rasa syukur kepada Allah SWT atas anugerahnya,
                        dengan niat dan syarat-syarat tertentu. Biasanya aqiqah dilakukan saat anak
                        berusia tujuh hari. Tetapi ada juga yang baru mengaqiqahkan anaknya pada hari
                        ke-14 atau ke-21 usai kelahiran sang anak.
                    </p>
                </div>

                <div className='bg-amber-200 p-4 rounded'>
                    <h3 className='text-xl font-bold text-center mb-2'>Hukum Aqiqah</h3>
                    <p className='text-justify'>
                        Hukum aqiqah adalah sunnah muakkadah, yaitu sangat dianjurkan dan memiliki
                        pahala jika dikerjakan, namun tidak berdosa jika ditinggalkan.
                    </p>
                </div>

                <div className='bg-amber-600 p-4 rounded'>
                    <h3 className='text-xl font-bold text-center mb-2'>Syarat Aqiqah</h3>
                    <p className='text-justify'>
                        Syarat aqiqah tentunya mengacu pada ketentuan kambing atau domba yang
                        disembelih. Adapun syarat aqiqah terkait kambing atau domba yang digunakan
                        adalah:
                    </p>

                    <ul className='list-decimal m-3'>
                        <li>Kambing atau domba harus dalam keadaan sehat dan tidak sakit.</li>
                        <li>Kambing atau domba aqiqah tidak kurus.</li>
                        <li>Syarat aqiqah adalah kambing atau domba tidak cacat.</li>
                        <li>Kambing atau domba aqiqah sudah berumur satu tahun lebih atau sudah
                            pernah berganti gigi.</li>
                    </ul>

                    <p className='text-justify mt-3'>
                        Mayoritas ulama berpendapat bahwa jumlah hewan untuk aqiqah disesuaikan
                        dengan jenis kelamin anak:
                    </p>

                    <ul className='list-disc m-3'>
                        <li>Anak laki-laki: 2 ekor kambing atau domba</li>
                        <li>Anak perempuan: 1 ekor kambing atau domba</li>
                    </ul>

                    <p className='mt-3'>Hal ini berdasarkan hadis:</p>
                    <p className='italic text-justify'>
                        “Untuk anak laki-laki dua ekor kambing, dan untuk anak perempuan satu ekor
                        kambing. Tidak mengapa jantan atau betina.” (HR. Abu Dawud No. 2834–2835)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default C_aqiqah
