import { lazy, memo, Suspense, useCallback, useEffect, useRef, useState } from 'react';

import * as el from './ViewerContainer.styles';

const LazyWebViewer = lazy(() => import('../WebViewer/WebViewer'));

export const HEIGHT_CONSTANT = 0.65;

function ViewerContainer() {
    const containerRef = useRef(null) as any;
    const [container, setContainer] = useState({ width: 0, height: 0 });

    const setContainerSize = useCallback(
        (ref) => {
            const parent = ref.parentElement;
            setTimeout(() =>
                setContainer({
                    width: parent.clientWidth,
                    height: parent.clientWidth * HEIGHT_CONSTANT,
                })
            );
        },
        []
    );

    useEffect(() => {
        if (containerRef?.current) {
            setContainerSize(containerRef.current);
        }
    }, [containerRef?.current, setContainerSize]);

    return (
        <el.ViewerContainer ref={containerRef} width={container.width}>
            <Suspense fallback={<div />}>
                <LazyWebViewer container={container} />
            </Suspense>
        </el.ViewerContainer>
    );
}
export default memo(ViewerContainer);