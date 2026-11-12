
import React, { useEffect, useState } from "react";
import "./Preloader.css";

function Preloader({ onComplete }) {
    const [visible, setVisible] = useState(true);
    const letters = "SGTSOLUTIONS".split("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onComplete?.();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!visible) return null;

    return (
        <div className="preloader">
            <div className="preloader-content">
                <div className="loader-circle">
                    <div className="loader-text">
                        {letters.map((letter, index) => (
                            <span key={index}>{letter}</span>
                        ))}
                    </div>
                </div>

                <p className="preloader-caption">
                    SGT SOLUTIONS
                </p>
                <span className="preloader-subtitle">
                    Geospatial Intelligence
                </span>
            </div>
        </div>
    );
}

export default Preloader;
