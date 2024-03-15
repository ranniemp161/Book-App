import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className=" fixed bg-black bg-opacity-55 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => event.stopPropagation()}
        className=" w-[600px] max-h-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className=" absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <h2 className=" w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className=" m-y text-gray-500">{book.id}</h4>
        <div className=" flex justify-center items-center gap-x-2">
          <PiBookOpenTextLight className=" text-red-300 text-2xl" />
          <h2 className=" my-1">{book.title}</h2>
        </div>
        <div className=" flex justify-start items-center gap-x-2">
          <BiUserCircle className=" text-red-300 text-2xl " />
          <h2 className=" my-1">{book.author}</h2>
          <div>
            <p className=" m-4"> Anything You want to Show</p>
            <p className=" my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
