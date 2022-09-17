import React from 'react';

function CoverImg() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
            console.log(file)
        }
    };

    return (
        <div className='h-[30vh] object-fill bg-slate-400'>
            {/* <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                    display: "none"
                }}
            /> */}
            <div className='cursor-pointer' onClick={() => imageUploader.current.click()}>
                <img ref={uploadedImage} alt="UploadCoverImage" className="w-full h-[250px] object-cover "/>
            </div>
        </div>
    );
}

export default CoverImg;