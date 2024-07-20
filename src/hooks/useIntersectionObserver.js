import { useEffect, useRef } from 'react';

const useIntersectionObserver = (setVisibleClass) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(setVisibleClass);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        elementsRef.current.forEach((el) => {
            observer.observe(el);
        });
    }, [setVisibleClass]);

    return elementsRef;
};

export default useIntersectionObserver;