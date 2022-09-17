import React from 'react';

function CoverImg() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    return (
        <div className='h-[30vh] object-fill bg-slate-400'>
            <div className='cursor-pointer' onClick={() => imageUploader.current.click()}>
                <img ref={uploadedImage} alt="UploadCoverImage" className="w-full h-[250px] object-cover "/>
            </div>
        </div>
    );
}

export default CoverImg;