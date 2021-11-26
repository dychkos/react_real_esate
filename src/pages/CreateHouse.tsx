import React from 'react';
import PageHeader from "../components/PageHeader";
import InputItem from "../components/InputItem";
import Button from "../components/buttons/Button";
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

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

const CreateHouse = () => {
    return (
        <div>
            <PageHeader title={"Add your house"}/>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <h4 className="mb-3">House info</h4>
                        <form method="post" id="create_post" encType='multipart/form-data'>
                            <div className="row">
                                <div className="col-6">
                                  <InputItem fieldName={"house_title"} required={true} labelText={"House title"}/>
                                </div>
                                <div className="col-6 ">
                                    <InputItem fieldName={"founded_year"} required={true} labelText={"Founded year"}/>
                                </div>
                            </div>

                            <div className={"row mt-3"}>
                                <label htmlFor="username">Description</label>
                                <div className="input-group">
                                <textarea  className="form-control"
                                           name="description"
                                            placeholder="So, in my house you can..."/>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <InputItem labelText={"Estimated price"} fieldName={"price"} required={true}/>
                                </div>
                                <div className="col-md-6">
                                    <InputItem labelText={"Estimated price for foot"} fieldName={"price"} required={true}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <InputItem labelText={"Address"} fieldName={"address"} required={true}/>
                            </div>

                            <hr className="mb-4" />

                            <h4 className="mb-3">More info</h4>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <InputItem labelText={"Beds count"} fieldName={"bedrooms_count"} />
                                </div>
                                <div className="col-md-5 mb-3">
                                     <InputItem labelText={"Showers count"} fieldName={"showers_count"} />
                                </div>
                                <div className="col-md-5 mb-3">
                                      <InputItem labelText={"Floors count"} fieldName={"floors_count"} />
                                </div>
                                <div className="col-md-5 mb-3">
                                     <InputItem labelText={"Garage count"} fieldName={"garage_count"} />
                                </div>
                            </div>

                            <div className="col mb-4">
                                <h4 className="mb-3">Select house features</h4>
                                <Select
                                    isMulti
                                    name="colors"
                                    styles={customStyles}
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />

                            </div>

                            <Button color={"yellow"} type={"submit"}>
                                Next
                            </Button>
                        </form>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default CreateHouse;