import React from "react";

type PageHeaderProps = {
    title:string,
    extraTitle?:string,
    children?:React.ReactNode | React.ReactElement
}

const PageHeader:React.FC<PageHeaderProps> = ({title,extraTitle,children}) =>{
    return(
        <section className="page-header">
            <div className="page-header__body">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="page-header__title house-title">
                                <h3>{title}</h3>
                                <h6 className="gray">{extraTitle}</h6>
                            </div>
                        </div>
                        <div className="col ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader;