"use client";

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import s from "./Portal.module.scss";

const Portal = ({ open, children }) => {
    const [portalRoot, setPortalRoot] = useState(null);

    useEffect(() => {
        setPortalRoot(document.getElementById('portal'));
    }, []);

    if (!portalRoot) return null;

    return createPortal(
        <>
            {
                open &&
                <div className={s.wrapper}>
                    {children}
                </div>
            }
        </>,
        portalRoot
    );
};

export default Portal;