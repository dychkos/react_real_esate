import React, {ChangeEvent, DragEventHandler, useState} from 'react';
import FolderIcon from "../assets/img/Folder.svg"
import CloseIcon from "../assets/img/CloseIcon.svg"

type DragDropProps = {
    image:string,
    error?:string,
    onImageChange:(image:string)=>void

}

const DragDrop:React.FC<DragDropProps> = ({image,onImageChange,error}) => {
    const [isUploaded, setIsUploaded] = useState(false);

    function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                onImageChange(e.target?.result as string);
                setIsUploaded(true);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className="drag">
                <div className="drag__container">
                    <div className="drag__upload">
                        <div className="image-upload">
                            {!isUploaded ? (
                                <>
                                    <label htmlFor="upload-input">
                                        <img
                                            src={FolderIcon}
                                            draggable={"false"}
                                            alt="placeholder"
                                            style={{ width: 100, height: 100 }}
                                        />
                                        <p style={{ color: "#444" }}>Click to upload image</p>
                                    </label>

                                    <input
                                        id="upload-input"
                                        type="file"
                                        accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                                        onChange={handleImageChange}
                                    />
                                </>
                            ) : (
                                <div className="drag__preview">
                                    <img
                                        className="close-icon"
                                        src={CloseIcon}
                                        alt="CloseIcon"
                                        onClick={() => {
                                            setIsUploaded(false);
                                            onImageChange("");
                                        }}
                                    />
                                    <img
                                        id="uploaded-image"
                                        src={image}
                                        draggable={false}
                                        alt="uploaded-img"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {error && <div className="validation-fail">{error}</div>}
            </div>
        </div>
    );
};

export default DragDrop;