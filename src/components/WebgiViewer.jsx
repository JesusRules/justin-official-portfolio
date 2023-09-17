import React, {
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    useEffect
} from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    CanvasSnipperPlugin,
    addBasePlugins,
    mobileAndTabletCheck

    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "./lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = ({ scrollYGlobal }) => { 
    const canvasRef = useRef(null);
    const canvasContainerRef = useRef(null);
    const [previewMode, setPreviewMode] = useState(false);
    const [isMobile, setIsMobile] = useState(null);
    
    const [viewerRef, setViewerRef] = useState(null);
    const [targetRef, setTargetRef] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [positionRef, setPositionRef] = useState(null);
    const [movedOnce, setMovedOnce] = useState(false);

    const memoizedScrollAnimation = useCallback(
        (position, target, isMobile, onUpdate) => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target, isMobile, onUpdate);
            }
        }, []
    )

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });

        setViewerRef(viewer);
        const isMobileOrTablet = mobileAndTabletCheck();
        setIsMobile(isMobileOrTablet);

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        // // Add a popup(in HTML) with download progress when any asset is downloading.
        // await viewer.addPlugin(AssetManagerBasicPopupPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        setCameraRef(camera);
        setPositionRef(position);
        setTargetRef(target);

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)
        // and many more...

        // or use this to add all main ones at once.
        // await addBasePlugins(viewer)

        // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
        await viewer.addPlugin(CanvasSnipperPlugin)

        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()

        // Import and add a GLB file.
        // await viewer.load("scene-black.glb")
        await manager.addFromPath("/models/scene-jesus-crucifix.glb");

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        if (isMobileOrTablet) { //initial
            // position.set(-16.7, 1.17, 11.7);
            // target.set(0, 1.37, 0);
            // props.contentRef.current.className = "mobile-or-tablet";
        }
        // SECOND
        // position.set(5.2417274218, 0.9178823077, 15.0533755813);
        // target.set(-2.6210682888, -0.5284058537, 0.8750121143);
        // FIRST
        position.set(-0.5251238011, -1.0550513875, 11.0900732729);
        target.set(0.0834774777, -0.1475334433, -2.0926561362);

        window.scrollTo(0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener("preFrame", () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        })

        memoizedScrollAnimation(position, target, isMobileOrTablet, onUpdate);
    }, []);

    useEffect(() => {
        setupViewer();
    }, [])

    useEffect(() => {
        // MOVEMENT
        // FIRST SCREEN
        if (scrollYGlobal < innerHeight) {
            gsap.to(positionRef, {
                x: -0.5251238011 , //First values are DESKTOP
                y: -1.0550513875 ,
                z: 11.0900732729,
                duration: 0.5,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });
            gsap.to(targetRef, {
                x: 0.0834774777 ,
                y: -0.1475334433,
                z:  -2.0926561362 ,
                duration: 0.5,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            })
        }
        // SECOND SCREEN
        if (scrollYGlobal >= 30) {
            gsap.to(positionRef, {
                x: 5.2417274218 , //First values are DESKTOP
                y: 0.9178823077 ,
                z: 15.0533755813,
                duration: 0.5,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });
            gsap.to(targetRef, {
                x: -2.6210682888 ,
                y: -0.5284058537,
                z:  0.8750121143 ,
                duration: 0.5,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            })
            gsap.to("#webgi-canvas-container", {
                filter: 'blur(6px)',
                duration: 0.5,
            })
        }

        // THIRD SCREEN
        if (scrollYGlobal >= innerHeight * 2) {
            if (movedOnce) return;
            // setMovedOnce(true);
            // SOUND SECTION
            gsap.to(positionRef, {
                x: -4.1537089546 , //First values are DESKTOP
                y: -0.6428199459 ,
                z: 7.4630851022,
                duration: 0.5,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });
            gsap.to(targetRef, {
                x: 2.6098327676 ,
                y: -0.0352704138,
                z: -0.9973734908 ,
                duration: 0.5,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            })
            gsap.to("#webgi-canvas-container", {
                filter: 'blur(0px)',
                duration: 0.5,
            })
        }

    }, [scrollYGlobal])

    return (
        <div ref={canvasContainerRef} id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
    );

}

export default WebgiViewer;