import { useEffect, useCallback } from 'react';

export default function useInView(ref = {}, { root = 'body', rootMargin = '0px', threshold = 1.0 }, entryCallback, exitCallback) {

    const intersectionCallback = useCallback((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entryCallback(entry);
            } else {
                exitCallback(entry);
            }
        });
    }, [entryCallback, exitCallback]);

    const setObserverCallback = useCallback(() => {
        const options = {
            root: document.querySelector(root),
            rootMargin: rootMargin,
            threshold: threshold
        }

        let observer = new IntersectionObserver(intersectionCallback, options);
        let target = ref.current;
        observer.observe(target);

    }, [intersectionCallback, root, ref, rootMargin, threshold]);

    useEffect(() => {
        if (ref.current) {
            setObserverCallback();
        }
    }, [ref, setObserverCallback]);

}
