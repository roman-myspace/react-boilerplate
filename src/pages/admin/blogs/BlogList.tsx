import React, { useState } from 'react'
import Card from '../../../components/Card'
import moment from "moment";


export default function BlogList() {

    const [toggleMenu, setToggleMenu] = useState<String | Number | undefined>("");

    const [blogs, setBlogs] = useState([
        {
            _id: 1,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "publish",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 2,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "draft",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 3,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "publish",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 4,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "draft",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 5,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "publish",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 6,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "draft",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 7,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "draft",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 8,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "draft",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 9,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "draft",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        {
            _id: 10,
            title: "How to write a blog in wordpress and promote it.",
            slug: "how-to-write-a-blog-in-wordpress-and-promote-it",
            description: "this is a complete description of blog, where you can see how to write blog in wordpress and promote this blog.", 
            excerpt: "this is a short description of blog, where you can learn how to write blog in wordpress.",
            featured_image: "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg", 
            tags: ['wordperss', 'promote', 'write blog'], 
            category: ['writing', 'wordpress'], 
            status: "draft",
            author: {
                first_name: 'Jhon', 
                last_name: 'Doe', 
                username: 'jhon.doe', 
                email: 'jhondoe@hotmail.com', 
                profile_image: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
            },
            created_at: "2022-12-08T11:20:02.216+00:00",
            updated_at: "2022-12-08T11:20:02.216+00:00",
        },
        
    ]);

    return (
        <>
            <Card className="my-4 border border-gray-200">
                <h2 className="text-2xl font-semibold p-4">Blogs List</h2>
                <div className="w-full mt-4">
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
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">                                
                                <div className="flex items-center space-x-3 w-full md:w-auto">                                    
                                    <button className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 relative" type="button" onClick={() => toggleMenu == 'filter_dropdown' ? setToggleMenu('') : setToggleMenu('filter_dropdown')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                        </svg>
                                        Filter
                                        <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </button>
                                    <div className={`z-10 absolute top-16 right-0 ${toggleMenu == 'filter_dropdown' ? 'block' : 'hidden'} w-48 p-3 border-2 border-gray-200 bg-white rounded-lg shadow-lg dark:bg-gray-700 `}>
                                        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                                        <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                            <li className="flex items-center">
                                                <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input id="fitbit" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input id="razor" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input id="nikon" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="nikon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                            </li>
                                            <li className="flex items-center">
                                                <input id="benq" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Blog Title</th>
                                        <th scope="col" className="px-4 py-3">Author</th>
                                        <th scope="col" className="px-4 py-3">Category</th>
                                        <th scope="col" className="px-4 py-3">Status</th>
                                        <th scope="col" className="px-4 py-3">Date</th>
                                        <th scope="col" className="px-4 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        blogs && blogs.map((item, idx) => 
                                            <tr className="border-b dark:border-gray-700" key={idx}>
                                                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white space-x-3 flex items-center gap-2">
                                                    <img 
                                                        src={item.featured_image}
                                                        className="rounded-lg w-14 object-contain"
                                                    />
                                                    {item.title}
                                                </th>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center space-x-4">
                                                        <img className="w-10 h-10 rounded-full" src={item.author.profile_image} alt="" />
                                                        <div className="font-medium dark:text-white">
                                                            <div>{item.author.first_name + " " + item.author.last_name}</div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-400">@{item.author.username}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    {
                                                        item.category.map((cat, ind) => 
                                                            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300" key={ind}>{cat}</span>
                                                        )
                                                    }
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className={`${item.status == 'publish' ? 'bg-green-500 text-white' : 'bg-gray-100'} uppercase text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>{item.status}</span>
                                                </td>
                                                <td className="px-4 py-3">{moment(item.created_at).format("MMM DD, YYYY")}</td>
                                                <td className="px-4 py-3 flex items-center justify-end relative">
                                                    <button className={`inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none`} 
                                                    type="button" 
                                                    onClick={() => toggleMenu === item._id ? setToggleMenu("") : setToggleMenu(item._id) }>
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
