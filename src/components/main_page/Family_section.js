import React, { useEffect, useRef } from 'react';

const Family_section = () => {
    const rollerRef = useRef(null);

    useEffect(() => {
        const familySection = document.getElementById('family_section');
        const roller = rollerRef.current;

        if (familySection && roller) {
        const rollerWidth = 10000;
        const numClones = Math.floor(rollerWidth / roller.offsetWidth);

        roller.id = 'roller1';
        familySection.appendChild(roller);
        document.getElementById('roller1').style.left = '0px';
        roller.classList.add('original');

        for (let i = 1; i < numClones; i++) {
            const rollerClone = roller.cloneNode(true);
            rollerClone.id = 'roller' + (i + 1);
            familySection.appendChild(rollerClone);
            rollerClone.style.left = i * roller.offsetWidth + 'px';
            document.getElementById('roller' + i).classList.add('clone');
        }
        }
    }, []);

    return (
        <section id="family_section">
        <div ref={rollerRef} className="family_rolling">
            <ul className="image_wrap">
                
            </ul>
        </div>
        </section>
    );
};

export default Family_section;