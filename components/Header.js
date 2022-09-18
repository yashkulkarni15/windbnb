import React from 'react'
import Category from './Category'

const Header = () => {
    const count = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11]
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap py-5 px-16 flex-col md:flex-row items-center border-b-2">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-10">
                        <img src="https://img.icons8.com/color/48/000000/airbnb.png" />
                        <span className="ml-3 text-xl text-red-500">Windbnb</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <div className="relative">

                            <div className="h-14 w-96rounded z-0 border rounded-3xl flex item-center justify-center shadow hover:shadow-md">
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center mr-2" role="group">
                                        <button
                                            type="button"
                                            className="
                                                rounded-l
                                                px-6
                                                py-2
                                                border-r-2
                                                font-medium
                                                text-sm
                                                text-black
                                                leading-tight
                                                focus:outline-none focus:ring-0
                                                transition
                                                duration-150
                                                ease-in-out
                                            "
                                        >
                                            Anywhere
                                        </button>
                                        <button
                                            type="button"
                                            className="
                                                px-6
                                                py-2
                                                border-r-2
                                                font-medium
                                                text-sm
                                                text-black
                                                leading-tight
                                                focus:outline-none focus:ring-0
                                                transition
                                                duration-150
                                                ease-in-out
                                            "
                                        >
                                            Any week
                                        </button>
                                        <button
                                            type="button"
                                            className="
                                                rounded-r
                                                px-6
                                                py-2
                                                font-medium
                                                text-sm
                                                text-slate-700
                                                leading-tight
                                                focus:outline-none focus:ring-0
                                                transition
                                                duration-150
                                                ease-in-out
                                            "
                                        >
                                            Add guests
                                        </button>
                                        <div style={{ height: "2rem", width: "2rem" }} className="bg-red-500 rounded-2xl flex items-center jusify-center cursor-pointer">
                                            <svg style={{ margin: "0 auto" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </nav>
                    <div className='flex items-center justify-center'>
                        <button type="button" className="inline-block px-6 py-3 text-gray-800 font-medium text-sm leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Become a host</button>
                        <button type="button" className="inline-block px-6 py-3 mr-2 text-gray-800 font-medium text-sm leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                            </svg>
                        </button>
                        <div className="dropdown relative">
                            <button type="button" className="flex items-center justify-center gap-x-3 border-2 px-4 py-3 text-gray-800 font-medium text-sm leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </button>
                            <ul
                                className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <a
                                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                        href="#"
                                    >Sign Up</a>
                                </li>
                                <li>
                                    <a
                                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                        href="#"
                                    >Login</a>
                                </li>
                                <li>
                                    <a
                                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                        href="#"
                                    >Host your home</a>
                                </li>
                                <li>
                                    <a
                                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                        href="#"
                                    >Host an experience</a>
                                </li>
                                <li>
                                    <a
                                        className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                        href="#"
                                    >Help</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap py-5 px-16 flex-row items-center border-b-2 gap-x-6">
                    {
                        count.map(item => {
                            return <Category />
                        })
                    } 
                </div>
            </header>
        </div>
    )
}

export default Header