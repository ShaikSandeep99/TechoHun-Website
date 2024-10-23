import React, { useState } from 'react';


function Cyberjs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle accordion
    };

    return (
        <div>
            {[1, 2, 3].map((item, index) => (
                <div key={index}>
                    <button 
                        className={`accordion ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        Section {item}
                    </button>
                    <div 
                        className="panel" 
                        style={{ display: activeIndex === index ? 'block' : 'none' }}
                    >
                        <p>Content for section {item}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cyberjs;
