import React from "react";

export default function Product(props) {
    return (

        <div className="bg-transparent main">

            <div className="overflow-hidden border-2 border-gray">
                <img src={props.url} alt="" className="hover:scale-105 hover:duration-700" />
            </div>


            <p className="flex justify-items-start font-bold text-lg">{props.name}</p>
            {/* <div className="flex justify-items-start font-bold text-base">abc</div> */}
            <p className="flex justify-items-start pt-3 text-base mt-7">{props.description}
            </p>
            <p className="flex justify-items-start pb-3 text-base ">{props.description2}</p>
            <div className="flex justify-items-start gap-1 items-center">
                <p className="text-base text-darkGray">{props.rating}</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" className="bi bi-star-fill h-4 text-pinkyOrange" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </div>
                <span className="text-black text-base">{props.review}</span>
            </div>
            <div className="flex justify-items-start pt-4 font-bold text-base text-green">{props.price}</div>
            
        </div>

  );
}