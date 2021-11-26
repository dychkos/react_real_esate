import React from "react";
import {ModalProps} from "./Modal";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {hideAllModal} from "../../store/reducers/modal/action-creator";

const ModalFactory:React.FC<ModalProps> = ({title,onClose,show,children}) =>{

    React.useEffect(() => {
        show && (document.body.style.overflow = 'hidden');
        !show && (document.body.style.overflow = 'unset');
    }, [show]);

    const modalRef = React.useRef<HTMLDivElement>(null);

    let dispatch = useDispatch();

    let hideModal = (event:React.MouseEvent) => {
        // @ts-ignore: Object is possibly 'null'.
        if(!modalRef.current.contains(event.target)){
            dispatch(hideAllModal());
        }
    }

    return(
        <div className={classNames("modal", {modal_open:show})} onClick={hideModal}>
            <div className="container-fluid">
                <div className="modal__body">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                            <div className="paper" ref={modalRef}>
                                <div className="paper__title">
                                    <h4>{title}</h4>
                                    <span className="modal__close" onClick={onClose}>&#10006;</span>
                                </div>
                                <div className="paper__body">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ModalFactory;