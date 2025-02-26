'use client'

import './style.css'
import { useState } from 'react'


export default function Solution() {

    return (
        <div className="solutionConatiner">

            <div className="p-4">
                <table className="table-auto border-collapse w-full text-center border border-gray-300 rounded-lg overflow-hidden">

                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="border border-gray-300 px-4 py-2" colSpan="2">Solution 1 : Fix by yourself</th>
                            <th className="border border-gray-300 px-4 py-2" colSpan="2">Solution 2 : Call the mechanic</th>
                            <th className="border border-gray-300 px-4 py-2" colSpan="2">Solution 2 : Borrow a friend’s bike</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="odd:bg-gray-100 even:bg-white">
                            <td className="bg-green-500 text-white border border-gray-300 px-2 py-2">Pros</td>
                            <td className="bg-red-500 text-white border border-gray-300 px-2 py-2">Crons</td>
                            <td className="bg-green-500 text-white border border-gray-300 px-2 py-2">Pros</td>
                            <td className="bg-red-500 text-white border border-gray-300 px-2 py-2">Crons</td>
                            <td className="bg-green-500 text-white border border-gray-300 px-2 py-2">Pros</td>
                            <td className="bg-red-500 text-white border border-gray-300 px-2 py-2">Crons</td>
                        </tr>
                        <tr className="odd:bg-gray-100 even:bg-white">
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                        </tr>
                        <tr className="odd:bg-gray-100 even:bg-white">
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                        </tr>
                        <tr className="odd:bg-gray-100 even:bg-white">
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                        </tr>
                        <tr className="odd:bg-gray-100 even:bg-white">
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                            <td className="border border-gray-300 px-2 py-2"><textarea className="w-full h-10 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
}
