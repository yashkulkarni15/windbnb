import React from 'react'

const Card = (props) => {
    var id="#" + props.id
    return (
        <div className='m-4'>
            <div className="flex justify-center">
                <div className="bg-white max-w-sm">
                    <a href="#!">
                        <div id={props.id} className="carousel slide relative" data-bs-ride="carousel">
                            <div className="carousel-inner relative w-full overflow-hidden">
                                <div className="carousel-item active relative float-left w-full">
                                    <img
                                        src="/carouselimage.jpg"
                                        className="block w-full rounded-lg"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className="carousel-item relative float-left w-full">
                                    <img
                                        src="/carouselimage.jpg"
                                        className="block w-full rounded-lg"
                                        alt="Camera"
                                    />
                                </div>
                                <div className="carousel-item relative float-left w-full">
                                    <img
                                        src="/carouselimage.jpg"
                                        className="block w-full rounded-lg"
                                        alt="Exotic Fruits"
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                type="button"
                                data-bs-target={id}
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                type="button"
                                data-bs-target={id}
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </a>
                    <div className="p-2">
                        <div className='flex items-center justify-between'>
                            <h5 className="text-gray-900 text-sm font-medium">Abiansemal, Indonesia</h5>
                            <h5 className='text-gray-900 text-sm font-medium'>4.48⭐</h5>

                        </div>
                        <p className="text-gray-700 text-base">
                            5,548 kilometres
                        </p>
                        <p className="text-gray-700 text-base">
                            13-20 April
                        </p>
                        <p className="text-gray-700 text-base">
                            $300
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card