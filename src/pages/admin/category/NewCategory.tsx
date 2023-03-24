import { useFormik } from 'formik';
import React, { useState } from 'react'
import ReactFileUpload from '../../../components/elements/ReactDropzone';
import ReactSelect from '../../../components/elements/ReactSelect';

export default function NewCategory() {


  const [categories, setCategories] = useState([
    { label: 'None', value: 'none' },
    { label: 'News', value: 'news' },
    { label: 'Web', value: 'web' },
    { label: 'Health & Fitness', value: 'health-fitness' },
    { label: 'movies', value: 'movies' },
  ]);

  const [selectedCat, setSelectedCat] = useState<Object[] | undefined>();
  const [thumbnail, setThumbnail] = useState('');

  const handleChangeCategory = (cat:{ label: String, value: String }[]) => {
    setSelectedCat(cat);        
  }

  const formik = useFormik({
    initialValues: {
      name: '', 
      active : true, 
      parent : [''],
      thumbnail: '' 
    }, 
    onSubmit: async (values) => {
    }
  });

  return (
    <>
      <div className="">
        <div className="block space-y-4 mt-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail</label>
          <div className="">
            <ReactFileUpload
              selectedFile={thumbnail}
              pickSelectedFile={setThumbnail}
              name={'thumbnail'}
              isMultiple={false}
              isRequired={true}
            />
          </div>
        </div>
        <div className="block space-y-2 items-center mt-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input 
            type="text" 
            name="name" 
            id='name' 
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Category Name" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>

        <div className="block space-y-4 items-center mt-4">
          <label htmlFor="excerpt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent</label>
          <div className="">
            <ReactSelect
              options={categories}
              value={selectedCat}
              onChange={handleChangeCategory}
              multiple={true}
              placeholder="Select Parent Category"
            />
          </div>
        </div>

        <div className="block space-y-4 mt-4">          
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              name="active" 
              className="sr-only peer" 
              checked={formik.values.active}
              onChange={formik.handleChange} 
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
          </label>
        </div>

        <div className="block space-y-4 item-center mt-16">
          <div></div>
          <div className=" space-x-6 flex justify-end">
            <button type='button' className='text-gray-600 font-medium text-sm hover:underline'>Save as Draft</button>
            <button type='button' className='font-medium text-sm px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg'>Create Category</button>
          </div>
        </div>
      </div>
    </>
  )
}
