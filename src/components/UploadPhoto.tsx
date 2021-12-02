import React, {ChangeEvent} from 'react';
import FolderIcon from "../assets/img/Folder.svg"
import CloseIcon from "../assets/img/CloseIcon.svg"

type UploadPhotoProps = {
    images:string[],
    multy?:boolean,
    error?:string,
    changeImagesHandler:(image:string[])=>void
}

const UploadPhoto:React.FC<UploadPhotoProps> = ({images,changeImagesHandler,multy,error}) => {


    let uniqID = Date.now();

    async function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            let images = e.target.files;
            let promises = [];
            for(let i = 0; i< images.length; i++){
                promises.push(readFile(images[i]));
                if (!multy) break;
            }
            Promise.all(promises)
                .then(results => {
                    let needRender: string[] = [];
                    for(let i = 0; i< results.length; i++){
                        needRender.push(results[i] as string );
                    }
                    addImageHandler(needRender);
                });
        }
    }

    let addImageHandler = (newImages:string[]) =>{
        let modifiedImages = [...images,...newImages];
        changeImagesHandler(modifiedImages);
    }

    let removeImageHandler = (image:string) =>{
        let modifiedImages = images.filter(img => img !== image);
        changeImagesHandler(modifiedImages);
    }

    let readFile = (file:File)=>{
        return new Promise(resolve => {
            let reader = new FileReader();
            reader.onload = function (e) {
                resolve(e.target?.result);
            };
            reader.readAsDataURL(file);
        })
    }

    console.log('images in comp',images)

    return (
        <div>
            <div className="drag">
                <div className="drag__container">
                    <div className="drag__upload">
                        <div className="image-upload">
                            {images.length===0 ? (
                                <>
                                    <label htmlFor={"upload-input" + uniqID}>
                                        <img
                                            src={FolderIcon}
                                            draggable={"false"}
                                            alt="placeholder"
                                            style={{ width: 100, height: 100 }}
                                        />
                                        <p style={{ color: "#444" }}>Click to upload image</p>
                                    </label>

                                    <input
                                        id={"upload-input" + uniqID}
                                        type="file"
                                        multiple={true}
                                        accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                                        onChange={handleImageChange}
                                    />
                                </>
                            ) : images.map(image=>{
                                return (
                                    <div className="drag__preview" key={image.length + Date.now()}>
                                        <img
                                            className="close-icon"
                                            src={CloseIcon}
                                            alt="CloseIcon"
                                            onClick={() => {
                                                removeImageHandler(image);
                                            }}
                                        />
                                        <img
                                            className="uploaded-image"
                                            src={image}
                                            draggable={false}
                                            alt="uploaded-img"
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                {error && <div className="validation-fail">{error}</div>}
            </div>
        </div>
    );
};

export default UploadPhoto;