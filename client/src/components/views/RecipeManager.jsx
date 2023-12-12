import React from 'react';
import NavBar from "../modules/Navbar";
import Footer from "../modules/Footer";
import deleteIcon from "../../assets/trash_can.svg";
import EditIcon from "../../assets/edit.png";
import starIcon from "../../assets/star.png";
import clockIcon from "../../assets/clock.png";

const Recipe = () => {
    return (
        <div className="bg-white rounded-lg shadow pl-10 h-64 grid grid-cols-4">
            <div className="col-span-3 flex items-center">
                <div className="w-1/2 overflow-hidden">
                    <img className="object-cover h-48 w-full rounded" src="https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg" alt="" />
                </div>

                <div className="w-1/2 space-y-5">
                    <h2 className="text-xl font-semibold mb-2 text-center">Dooky Chase - Style Fried Chicken</h2>

                    <div className="w-1/2 pl-4 flex items-center">
                        <p className="text-gray-500">Ratings: 6</p>
                        <img className="w-4 h-4 ml-1 mb-0.5" src={starIcon} alt="" />
                    </div>
                    <div className="w-2/3 pl-4 flex items-center">
                        <p className="text-gray-500">Cook time: 25 mins</p>
                        <img className="w-5 h-5 ml-1 " src={clockIcon} alt="" />
                    </div>

                    <h2 className="pl-4 text-gray-500">Create time: 2023-12-06T07:38:04.133+00:00</h2>

                </div>

            </div>

            <div className="col-span-1 flex items-center justify-center ml-10 space-x-5">
                <img className="h-10 w-10" src={EditIcon} alt="" />

                <img className="h-10 w-10" src={deleteIcon} alt="" />
            </div>
        </div>

    );
}

const RecipeManager = () => {

    return (
        <div className="flex flex-col min-h-screen bg-red-100 ">
            <NavBar />
            <div className="container mx-auto">
                <h1 className="text-3xl text-center font-bold mb-4 mt-4">Recipe Manager</h1>
                <div className="flex flex-col space-y-3 pl-64 pr-64">

                    <Recipe />


                </div>
            </div>
            <div className="flex-grow"></div>
            <Footer className="justify-self-end" />
        </div>
    );
};

export default RecipeManager;