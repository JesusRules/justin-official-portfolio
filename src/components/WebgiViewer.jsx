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
    const [canvasDimensions, setCanvasDimensions] = useState({ width: 400, height: 300 });

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
        // await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(1)) //32
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        // await viewer.addPlugin(SSRPlugin)
        // await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(BloomPlugin)
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
        // FIRST
        // position.set(-0.5251238011, -1.0550513875, 11.0900732729);
        // target.set(0.0834774777, -0.1475334433, -2.0926561362);

        
        // window.scrollTo(0, 0);

        // let needsUpdate = true;

        // const onUpdate = () => {
        //     needsUpdate = true;
        //     viewer.setDirty();
        // }

        // viewer.addEventListener("preFrame", () => {
        //     if (needsUpdate) {
        //         camera.positionTargetUpdated(true);
        //         needsUpdate = false;
        //     }
        // })

        // memoizedScrollAnimation(position, target, isMobileOrTablet, onUpdate);
    }, []);

    useEffect(() => {
        setupViewer();
        const canvas = document.getElementById('webgi-canvas'); // Replace 'myCanvas' with the ID of your canvas element
        const originalWidth = canvas.width;
        const originalHeight = canvas.height;

        console.log('Original Width:', originalWidth);
        console.log('Original Height:', originalHeight);
    }, [])

    useEffect(() => {
        // MOVEMENT
        // FIRST SCREEN
        if (scrollYGlobal < innerHeight) {
            canvasRef.current.style.display = "none";
            canvasContainerRef.current.style.display = "none";
            // gsap.to(positionRef, {
            //     x: -0.5251238011 , //First values are DESKTOP
            //     y: -1.0550513875 ,
            //     z: 11.0900732729,
            //     duration: 0.5,
            //     onUpdate: () => {
            //         viewerRef.setDirty();
            //         cameraRef.positionTargetUpdated(true);
            //     }
            // });
            // gsap.to(targetRef, {
            //     x: 0.0834774777 ,
            //     y: -0.1475334433,
            //     z:  -2.0926561362 ,
            //     duration: 0.5,
            //     onUpdate: () => {
            //         viewerRef.setDirty();
            //         cameraRef.positionTargetUpdated(true);
            //     }
            // })
        }

        // SECOND SCREEN
        canvasRef.current.style.display = "block";
        canvasContainerRef.current.style.display = "block";

        if (scrollYGlobal >= 30 && scrollYGlobal < innerHeight * 2) {
            gsap.to(positionRef, {
                x: 5.2417274218 , //First values are DESKTOP
                y: 0.9178823077 ,
                z: 15.0533755813,
                duration: 0.25,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });
            gsap.to(targetRef, {
                x: -2.6210682888 ,
                y: -0.5284058537,
                z:  0.8750121143 ,
                duration: 0.25,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            })
            gsap.to("#webgi-canvas-container", {
                filter: 'blur(6px)',
                duration: 0.25,
            })
        }

        // THIRD SCREEN
        if (scrollYGlobal >= innerHeight * 2)
            // && scrollYGlobal < innerHeight * 3) 
        {

            gsap.to(positionRef, {
                x: -4.1537089546 , //First values are DESKTOP
                y: -0.6428199459 ,
                z: 7.4630851022,
                duration: 0.25,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });
            gsap.to(targetRef, {
                x: 2.6098327676 ,
                y: -0.0352704138,
                z: -0.9973734908 ,
                duration: 0.25,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            })
            gsap.to("#webgi-canvas-container", {
                filter: 'blur(0px)',
                duration: 0.25,
            })
        }
        if (Math.round(scrollYGlobal) >= innerHeight * 3.75) {
            canvasRef.current.style.display = "none";
            canvasContainerRef.current.style.display = "none";
        }
        // OLD
         // FOURTH SCREEN (Projects)
        //  if (Math.round(scrollYGlobal) >= innerHeight * 3
        //     && Math.round(scrollYGlobal) < innerHeight * 5) {
        //         canvasRef.current.style.display = "none";
        //     gsap.to(positionRef, {
        //         x: -0.5251238011 , //First values are DESKTOP
        //         y: -1.0550513875 ,
        //         z: 11.0900732729,
        //         duration: 0.5,
        //         onUpdate: () => {
        //             viewerRef.setDirty();
        //             cameraRef.positionTargetUpdated(true);
        //         }
        //     });
        //     gsap.to(targetRef, {
        //         x: 0.0834774777 ,
        //         y: -0.1475334433,
        //         z:  -2.0926561362 ,
        //         duration: 0.5,
        //         onUpdate: () => {
        //             viewerRef.setDirty();
        //             cameraRef.positionTargetUpdated(true);
        //         }
        //     })
        // }


        // // LAST SCREEN (6)
        // if (Math.round(scrollYGlobal) >= innerHeight * 5) {
        //     gsap.to(positionRef, {
        //         x: 0.024786392 , //First values are DESKTOP
        //         y: -44.6719188643 ,
        //         z: 16.054278361,
        //         duration: 1.5,
        //         onUpdate: () => {
        //             viewerRef.setDirty();
        //             cameraRef.positionTargetUpdated(true);
        //         }
        //     });
        //     gsap.to(targetRef, {
        //         x: 0.2665220273 ,
        //         y: -8.5961483864,
        //         z: -3.2990005316 ,
        //         duration: 1.5,
        //         onUpdate: () => {
        //             viewerRef.setDirty();
        //             cameraRef.positionTargetUpdated(true);
        //         }
        //     })
        // }
    }, [scrollYGlobal])

    return (
        <div
            ref={canvasContainerRef}
            id="webgi-canvas-container"
            style={{

            }}
            >
            <canvas
                style={{
                    // width: '33.33%',
                    // height: '33.33%',
                    // margin: 'auto',
                    // transform: 'scale(3)',
                    // backgroundColor: 'red',
                }}
                id="webgi-canvas"
                ref={canvasRef}
            />
            </div>
        // <div ref={canvasContainerRef} id="webgi-canvas-container">
        //     <canvas 
        //         style={{transformOrigin: 'center center',
        //                 width: innerWidth / 2, 
        //                 height: innerHeight / 2,
        //                 transform: 'scale(2)'}} 
        //     id="webgi-canvas" ref={canvasRef} />
        // </div>
    );

}

export default WebgiViewer;