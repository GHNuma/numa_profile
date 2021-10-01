import React from 'react';

function CareerModel({isOpen,setIsOpen,position,duration,description}) {
    return (
        <div className={isOpen ? "modal" : "modal hide" } onClick={() => setIsOpen(false)}>
                    <div className="modal-body">
                        <div className="modal-contain">
                        <p className="position">{position + " "}</p>
                        <p className="duration" >{duration}</p>
                        <p className="description">{description}</p>
                        </div>
                    </div>
                </div>
    );
}

export default CareerModel;