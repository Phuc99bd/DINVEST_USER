import React from "react";

const RefLink = ({ sponsorKey })=>{
    return <div className="ref-menu">
        <div className="ref-link">
            <div className="ref-header">
                <span>
                    Referals link
                </span>
                <span>
                    <icon>a</icon>
                </span>
            </div>
            <div className="ref-input">
                <input type="text" value={sponsorKey} readOnly/>
                <span>
                    a
                </span>
            </div>
        </div>
        <div className="ref-link">
            <div className="ref-header">
                 <span>
                 Referals code
                </span>
                <span>
                </span>
            </div>
            <div className="ref-input">
                <input type="text" value={sponsorKey} readOnly/>
                <span>
                    a
                </span>
            </div>
        </div>
    </div>
}

export default RefLink;