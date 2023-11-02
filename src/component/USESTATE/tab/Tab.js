import React, { useState } from "react";
import "./tab.css";
const Tab = () => {
    const [tab, setTab] = useState(1);
    const changeTab = (index) => {
        setTab(index);
    };
    return (
        <div className="tab">
            <div className="tab-list">
                <div className={`tab-item ${tab === 1 && "active"}`} onClick={() => changeTab(1)}>
                    Popular
                </div>
                <div className={`tab-item ${tab === 2 && "active"}`} onClick={() => changeTab(2)}>
                    Hot
                </div>
                <div className={`tab-item ${tab === 3 && "active"}`} onClick={() => changeTab(3)}>
                    Lastest
                </div>
            </div>
            <div className="tab-wrapper">
                <div className={`tab-content ${tab === 1 && "active"}`}>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus
                        maiores doloremque voluptatum illum nemo repellat,
                    </h3>
                </div>
                <div className={`tab-content ${tab === 2 && "active"}`}>
                    <h3>Quaerat possimus maiores doloremque voluptatum illum nemo repellat</h3>
                </div>
                <div className={`tab-content ${tab === 3 && "active"}`}>
                    <h3>voluptatum illum nemo repellat</h3>
                </div>
            </div>
        </div>
    );
};

export default Tab;
