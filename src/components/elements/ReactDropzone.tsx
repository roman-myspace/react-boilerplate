import React, {useState} from 'react'
import { FileUploader } from "react-drag-drop-files";
import SVG from '../SVG';

export default function ReactFileUpload(props: any) {
  
    const fileTypes = ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp'];
    
    const [filePreview, setFilePreview] = useState<string[] | undefined>();

    const handleChangeFile = (ufile:any) => {
        
        props.pickSelectedFile(ufile);
        
        let files;
        if(ufile.length) {
            files = [...ufile].map((item) => {
                let prw = URL.createObjectURL(item);
                return prw;
            });
        } else {
            let prw = URL.createObjectURL(ufile);
            files = [prw];
        }
        setFilePreview(files);
        // all_files.push(ufile);
        // let files;
        // if(all_files) {
            // files = all_files.map((item) => {
            //     let prw = URL.createObjectURL(item);
            //     return prw;
            // });
        // }
        // setFilePreview(files);
    }

    const removeFile = (index: number) => {
        let f = filePreview?.filter((item, idx) => idx != index);
        setFilePreview(f);
    }


    return (
        <div>
            <FileUploader 
                name={props.name}
                types={fileTypes}
                handleChange={handleChangeFile}
                multiple={props.isMultiple ?? false}
                required={props.isRequired ?? false}
                children={(
                    <div className={`border-2 border-gray-200 rounded-lg p-4 text-center w-full cursor-pointer hover:bg-gray-50 transition ${props.className}`}>
                        <h6 className='font-bold '>Drap Files here to upload.</h6>
                        <small>{fileTypes.join(", ")}</small>
                    </div>
                )}
            />
            {
                filePreview && filePreview.length > 0 && 
                (
                    <>
                        <ul className="flex gap-4 justify-center my-4">
                            {
                                filePreview?.map((item, idx) => (
                                    <li className='rounded-lg w-20 border border-gray-100 bg-100 p-2 relative' key={idx}>
                                        <img src={item} className='w-full object-cover' />
                                        <span onClick={() => removeFile(idx)} className="h-5 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200 border px-1 absolute top-[-10px] right-[-10px]">&times;</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <button type='button' className='mx-auto border border-slate-900 hover:bg-slate-900 hover:text-white px-8 py-2 rounded-lg flex items-center gap-2'>   
                        <SVG 
                            type={'feather'}
                            icon={'upload'}
                        />
                        Upload
                        </button>
                    </>
                )
            }
            
        </div>
    );

}