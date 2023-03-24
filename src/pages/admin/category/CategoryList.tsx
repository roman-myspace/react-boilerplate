import React, { useState } from 'react'
import Card from '../../../components/Card'
import moment from "moment";
import NewCategory from './NewCategory';


export default function CategoryList() {

  const [toggleMenu, setToggleMenu] = useState<String | Number | undefined>("");

  const [categories, setCategories] = useState([
    {
      _id: 1,
      name: "IT",
      slug: "it",
      thumbnail: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg",
      active: true,
      parent: null,
      created_at: "2022-12-08T11:20:02.216+00:00",
      updated_at: "2022-12-08T11:20:02.216+00:00",
    },
    {
      _id: 2,
      name: "Books",
      slug: "books",
      thumbnail: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg",
      active: false,
      parent: ['writing', 'reading'],
      created_at: "2022-12-08T11:20:02.216+00:00",
      updated_at: "2022-12-08T11:20:02.216+00:00",
    },
  ]);

  return (
    <>
      <Card className="my-4 border border-gray-200">
        <h2 className="text-2xl font-semibold p-4">Categories List</h2>
        <div className="w-full mt-4 grid grid-cols-2 gap-14 px-4">

          <NewCategory />

          <div className="bg-white dark:bg-gray-800 relative sm:rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
                  </div>
                </form>
              </div>
            </div>
            <div className="">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">Thumbnail</th>
                    <th scope="col" className="px-4 py-3">Name</th>
                    <th scope="col" className="px-4 py-3">Parent</th>
                    <th scope="col" className="px-4 py-3">Status</th>
                    <th scope="col" className="px-4 py-3">Date</th>
                    <th scope="col" className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    categories && categories.map((item, idx) =>
                      <tr className="border-b dark:border-gray-700" key={idx}>
                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white space-x-3 flex items-center gap-2">
                          <img
                            src={item.thumbnail}
                            className="rounded-lg w-16 object-contain"
                          />
                        </th>
                        <td className="px-4 py-3">
                          {item.name}
                        </td>
                        <td className="px-4 py-3">
                          {
                            item?.parent ? item.parent?.map((cat, ind) =>
                              <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300" key={ind}>{cat}</span>
                            ) : "None"
                          }
                        </td>
                        <td className="px-4 py-3">
                          <span className={`${item.active ? 'bg-green-500 text-white' : 'bg-gray-100'} uppercase text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>{item.active ? "Active" : "Inactive"}</span>
                        </td>
                        <td className="px-4 py-3">{moment(item.created_at).format("MMM DD, YYYY")}</td>
                        <td className="px-4 py-3 flex items-center justify-end relative">
                          <button className={`inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none`}
                            type="button"
                            onClick={() => toggleMenu === item._id ? setToggleMenu("") : setToggleMenu(item._id)}>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                          <div className={`${toggleMenu === item._id ? 'block' : 'hidden'} absolute top-9 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 border-2 border-gray-200`}>
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" >
                              <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                              </li>
                              <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                              </li>
                            </ul>
                            <div className="py-1">
                              <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}
