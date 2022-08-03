import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const options = {
    damping: 0.05,
};

const SmoothScroll = () => {
    useEffect(() => {
        Scrollbar.init(document.getElementById('scrollbar'), options);

        return () => {
            if (Scrollbar)
                Scrollbar.destroy(document.getElementById('scrollbar'));
        };
    }, []);
    return <div id="scrollbar"></div>;
};

export default SmoothScroll;
