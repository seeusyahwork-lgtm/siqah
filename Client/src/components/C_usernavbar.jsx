import React from 'react'

const C_usernavbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-55">
            {/* LEFT (MOBILE MENU) */}
            <div className="navbar-start ">

                {/* LOGO di kiri (hanya tampil di desktop) */}
                <div className="hidden lg:flex items-center m-auto">
                    <img
                        src="src/assets/Siqah-lg-100px.png"
                        className="h-16 w-16 lg:h-20 lg:w-20"
                        alt="logo"
                    />
                </div>
            </div>

            {/* LOGO di tengah (hanya tampil di mobile) */}
            <div className="navbar-center lg:hidden">
                <img
                    src="src/assets/Siqah-lg-100px.png"
                    className="h-16 w-16"
                    alt="logo"
                />
            </div>

            {/* LOGIN BUTTON */}
            <div className="navbar-end">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Logout</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    </div>
                </dialog>
            </div>



        </div>
    )
}

export default C_usernavbar