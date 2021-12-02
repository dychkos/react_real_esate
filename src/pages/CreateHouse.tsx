import React from 'react';
import PageHeader from "../components/PageHeader";
import HouseStoreForm from "../components/HouseStoreForm";

const CreateHouse = () => {

    return (
        <div>
            <PageHeader title={"Add your house"}/>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <h4 className="mb-3">House info</h4>
                        <HouseStoreForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateHouse;