import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IFeature} from "../models/IFeature";
import {Options} from "react-select/dist/declarations/src/types";
import {FeaturesActionCreators} from "../store/reducers/features/action-creator";
import {useForm} from "../hooks/useForm";
import {AddHouseRequest} from "../api/types";
import {Helper} from "../helpers/Helper";
import {HouseActionCreators} from "../store/reducers/house/action-creator";
import Loader from "./Loader";
import InputItem from "./InputItem";
import UploadPhoto from "./UploadPhoto";
import Select from "react-select";
import Button from "./buttons/Button";
import {IHouse} from "../models/IHouse";
import {API_IMAGE_URL} from "../config";

const customStyles = {
    multiValue:(provided:any)=>{
        return {
            ...provided,
            padding:"10px",
            borderRadius:"10px",
            background:'#FFAC12'
        }
    },
    control: (provided:any) => ({
        ...provided,
        border: '2px solid $979797',
        padding:"8px",
        borderRadius:"10px"
    })
}

type selectItem = {
    value:number,
    label:string
}

type HouseStoreFormProps = {
    house?:IHouse
}

const HouseStoreForm:React.FC<HouseStoreFormProps> = ({house: currentHouse}) => {
    let dispatch = useDispatch();
    let router = useHistory();
    let {features,isLoading : isFeaturesLoading} = useTypedSelector(state=>state.featuresReducer);
    let {isLoading : isHouseLoading,error} = useTypedSelector(state=>state.houseReducer);
    let {user} = useTypedSelector(state=>state.userReducer);

    const HouseImages = currentHouse?.images.map(image=>API_IMAGE_URL+image.filename);
    console.log("current",HouseImages)


    const [images, setImages] = useState<string[]>(HouseImages ?? []);

    const [imageError, setImageError] = useState("");
    const [chosenFeatures, setChosenFeatures] = useState<IFeature[]>([]);

    let changeFeatures = (features:Options<selectItem>) =>{
        let newFeatures:IFeature[] = features.map(feature=>{
            return {id:feature.value,title:feature.label}
        })
        setChosenFeatures(newFeatures);
    }

    let changeImageHandler = (images:string[]) =>{
        setImages(images);
    }

    React.useEffect(()=>{
        dispatch(FeaturesActionCreators.fetchFeatures());
    },[dispatch])

    let featureToOptions = (features:IFeature[]) =>{
        return features ? features.map(feature => {
            return {value: feature.id, label: feature.title};
        }) : [];
    }



    const { handleSubmit, handleChange, data: house, errors } = useForm<AddHouseRequest>({
        validations: {
            name: {
                custom: {
                    isValid: (value) => value.length > 3,
                    message: 'The name needs to be at least 3 characters long.',
                },
            },
            showers_count:{
                custom:{
                    isValid:(value) => parseInt(value) >= 0,
                    message: "Showers count must be positive value"
                }
            },
            garage_count:{
                custom:{
                    isValid:(value) => parseInt(value) >= 0,
                    message: "Garage count must be positive value"
                }
            },
            bedrooms_count:{
                custom:{
                    isValid:(value) => parseInt(value) >= 0,
                    message: "Bedrooms count must be positive value"
                }
            },
            floors_count:{
                custom:{
                    isValid:(value) => parseInt(value) >= 0,
                    message: "Floors count must be positive value"
                }
            },
            price:{
                custom:{
                    isValid:(value) => parseInt(value) >= 0,
                    message: "Price must be positive value"
                }
            },
            ft_price:{
                custom:{
                    isValid:(value) => parseInt(value) >= 0,
                    message: "Price for foot must be positive value"
                }
            },
            address:{
                custom: {
                    isValid: (value) => value.length > 3,
                    message: 'The address needs to be at least 3 characters long.',
                },
            },
            description:{
                custom: {
                    isValid: (value) => value.length > 3,
                    message: 'The description needs to be at least 8 characters long.',
                },
            },
            founded_year:{
                custom:{
                    isValid:(value )=> parseInt(value) > 1800 && parseInt(value) < new Date().getFullYear(),
                    message:"The year has error"
                }

            }
        },
        initialValues:{
          ...currentHouse,
            images:[],
            features:[]
        },
        onSubmit: (e) => addHouseHandler(house)
    });

    let addHouseHandler = async (house: AddHouseRequest) => {
        if (images.length < 3) {
            setImageError("Please,upload at least 3  photos");
            return;
        }
        setImageError("");

        let imagesArray:File[] = [];

        for (const image of images) {
            let img = await Helper.dataUrlToFile(image, "image");
            imagesArray.push(img);
        }

        let newHouse: AddHouseRequest = {
            ...house,
            user_id:user.id,
            features:chosenFeatures,
            images: imagesArray
        }
        dispatch(HouseActionCreators.addHouse(newHouse,router));
    }



    return (
        <form method="post" id="create_post" onSubmit={handleSubmit} encType='multipart/form-data'>
            {isHouseLoading
                ?
                <Loader fullSize={true} />
                : <>
                    <div className="row">
                        <div className="validation-fail">{error}</div>
                        <div className="col-6">
                            <InputItem fieldName={"name"}
                                       required={true}
                                       onChange={handleChange("name")}
                                       value={house.name || ""}
                                       error={errors.name}
                                       labelText={"House title"}/>
                        </div>
                        <div className="col-6 ">
                            <InputItem fieldName={"founded_year"}
                                       onChange={handleChange("founded_year")}
                                       value={house.founded_year || ""}
                                       error={errors.founded_year}
                                       type={"number"}
                                       required={true}
                                       labelText={"Founded year"}/>
                        </div>
                    </div>

                    <div className={"row mt-3"}>
                        <label htmlFor="username">Description</label>
                        <div className="input-group">
                            { errors.description && <div className="validation-fail">{errors.description}</div>}
                            <textarea
                                className="form-control"
                                onChange={handleChange("description")}
                                name="description"
                                value={house.description || ""}
                                placeholder="So, in my house you can..."/>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <InputItem labelText={"Estimated price"}
                                       onChange={handleChange("price")}
                                       value={house.price || ""}
                                       error={errors.price}
                                       type={"number"}
                                       fieldName={"price"}
                                       required={true}/>
                        </div>
                        <div className="col-md-6">
                            <InputItem labelText={"Estimated price for foot"}
                                       onChange={handleChange("ft_price")}
                                       value={house.ft_price || ""}
                                       error={errors.ft_price}
                                       fieldName={"price"}
                                       type={"number"}
                                       required={true}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <InputItem labelText={"Address"}
                                   fieldName={"address"}
                                   onChange={handleChange("address")}
                                   value={house.address || ""}
                                   error={errors.address}
                                   required={true}
                        />
                    </div>

                    <hr className="mb-4" />

                    <h4 className="mb-3">More info</h4>

                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <InputItem labelText={"Beds count"}
                                       type={"number"}
                                       fieldName={"bedrooms_count"}
                                       onChange={handleChange("bedrooms_count")}
                                       value={house.bedrooms_count || ""}
                                       error={errors.bedrooms_count}
                            />
                        </div>
                        <div className="col-md-5 mb-3">
                            <InputItem labelText={"Showers count"}
                                       fieldName={"showers_count"}
                                       onChange={handleChange("showers_count")}
                                       value={house.showers_count || ""}
                                       type={"number"}
                                       error={errors.showers_count}
                            />
                        </div>
                        <div className="col-md-5 mb-3">
                            <InputItem labelText={"Floors count"}
                                       fieldName={"floors_count"}
                                       onChange={handleChange("floors_count")}
                                       value={house.floors_count || ""}
                                       type={"number"}
                                       error={errors.floors_count}
                            />
                        </div>
                        <div className="col-md-5 mb-3">
                            <InputItem labelText={"Garage count"}
                                       fieldName={"garage_count"}
                                       onChange={handleChange("garage_count")}
                                       value={house.garage_count || ""}
                                       error={errors.garage_count}
                                       type={"number"}
                            />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <h4 className="mb-3">Upload house photo</h4>
                            <UploadPhoto images={images} multy={true} changeImagesHandler={changeImageHandler} error={imageError}/>
                        </div>
                        <div className="col">
                            <h4 className="mb-3">Select house features</h4>
                            {isFeaturesLoading ? <Loader/> : <Select
                                isMulti
                                name="colors"
                                styles={customStyles}
                                options={featureToOptions(features)}
                                defaultValue={featureToOptions(currentHouse ? currentHouse.features:[])}
                                onChange={changeFeatures}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />}
                        </div>
                    </div>
                    <Button color={"yellow"} type={"submit"}>
                        Next
                    </Button>
                </>
            }
        </form>
    );
};

export default HouseStoreForm;