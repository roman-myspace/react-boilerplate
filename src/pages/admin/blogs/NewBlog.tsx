import React, { useState } from 'react'
import Card from '../../../components/Card'
import MyEditor from '../../../components/Editor';
import ReactFileUpload from '../../../components/elements/ReactDropzone';
import ReactSelect from '../../../components/elements/ReactSelect'


export default function NewBlog() {

  const [categories, setCategories] = useState([
    { label: 'News', value: 'news' },
    { label: 'Web', value: 'web' },
    { label: 'Health & Fitness', value: 'health-fitness' },
    { label: 'movies', value: 'movies' },
  ]);
  const [tags, setTags] = useState([
    { label: 'wordpress', value: 'wordpress' },
    { label: 'writing', value: 'writing' },
    { label: 'digital', value: 'digital' },
  ]);

  const [selectedCat, setSelectedCat] = useState<Object[] | undefined>();
  const [selectedTag, setSelectedTag] = useState<Object[] | undefined>();

  const [description, setDescription] = useState<String | undefined>();
  const [featuredImg, setFeaturedImg] = useState('');

  const handleChangeCategory = (cat:{ label: String, value: String }[]) => {
    setSelectedCat(cat);        
  }
  const handleChangeTag = (cat:{ label: String, value: String }[]) => {
    setSelectedTag(cat);
  }

  const handleChangeDescription = (data: String) => {
    setDescription(data);
  }

  return (
    <>
      <Card className="my-4 border border-gray-200">
        <h2 className="text-2xl font-semibold p-4">New Blog</h2>

        <div className="grid grid-cols-3 items-center mt-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Featured Image</label>
          <div className="col-span-2">
            <ReactFileUpload
              selectedFile={featuredImg}
              pickSelectedFile={setFeaturedImg}
              name={'featured_image'}
              isMultiple={false}
              isRequired={true}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 items-center mt-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input type="text" name="title" id='name' className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write Blog Title" />
        </div>

        <div className="grid grid-cols-3 items-center mt-4">
          <label htmlFor="excerpt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Excerpt</label>
          <textarea name="excerpt" id='excerpt' className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write Blog Title"></textarea>
        </div>

        <div className="grid grid-cols-3 items-center mt-4">
          <label htmlFor="excerpt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
          <div className="col-span-2">
            <ReactSelect 
              options={categories}
              value={selectedCat}
              onChange={handleChangeCategory}
              multiple={true}
              placeholder="Select Categories"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 items-center mt-4">
          <label htmlFor="excerpt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
          <div className="col-span-2">
            <ReactSelect 
              options={tags}
              value={selectedTag}
              onChange={handleChangeTag}
              multiple={true}
              placeholder="Select Tags"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 items-start mt-4">
          <label htmlFor="excerpt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <div className="col-span-2">
            <MyEditor 
              value={description}
              onChange={handleChangeDescription}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 item-center mt-16">
          <div></div>
          <div className="col-span-2 space-x-6 flex justify-end">
            <button type='button' className='text-gray-600 font-medium text-sm hover:underline'>Save as Draft</button>
            <button type='button' className='font-medium text-sm px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg'>Publish</button>
          </div>
        </div>

      </Card>
    </>
  )
}
