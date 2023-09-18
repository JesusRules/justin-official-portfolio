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
    
    const [load, setLoad] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
        ShowCrucifixScreens();
        return () => {
          window.removeEventListener('resize', checkIsMobile);
        };
      }, []);

      useEffect(() => {
        setupViewer();
        canvasRef.current.style.display = "none";
        canvasContainerRef.current.style.display = "none";
        // setTimeout(() => {
        //     setLoad(true);
        // }, 500)
    }, [])


    useEffect(() => {
        ShowCrucifixScreens();
    }, [scrollYGlobal])


      const checkIsMobile = () => {
        if (window.innerWidth >= 700) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
      }

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
        // const isMobileOrTablet = mobileAndTabletCheck();
        // setIsMobile(isMobileOrTablet);

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

        if (!isMobile) { //initial - NO use
            position.set(5.2417274218, 0.9178823077, 15.0533755813);
            target.set(-2.6210682888, -0.5284058537, 0.8750121143);
        } else {
            position.set(6.8070028002, 0.9898715098, 14.1779883979);
            target.set(-1.0557929105, -0.4564166516, -0.0003750692);
        }

        // setTimeout(() => {
        //     canvasRef.current.style.display = "none";
        //     canvasContainerRef.current.style.display = "none";
        // }, 200)

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

    const ShowCrucifixScreens = () => {
        // if (load === false) return;

        // FIRST SCREEN
        if (scrollYGlobal < innerHeight / 2) {
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

        if (scrollYGlobal >= 0 && scrollYGlobal < innerHeight * 2) {
            gsap.to(positionRef, {
                x: !isMobile ? 5.2417274218 : 6.8070028002, //First values are DESKTOP
                y: !isMobile ? 0.9178823077 : 0.9898715098,
                z: !isMobile ? 15.0533755813 : 14.1779883979,
                duration: 0.25,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });
            gsap.to(targetRef, {
                x: !isMobile ? -2.6210682888 : -1.0557929105,
                y: !isMobile ? -0.5284058537 : -0.4564166516,
                z: !isMobile ? 0.8750121143 : -0.0003750692,
                duration: 0.25,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            })
            gsap.to("#webgi-canvas-container", {
                filter: 'blur(7px)',
                duration: 0.25,
            })
        }
        // THIRD SCREEN
        if (scrollYGlobal >= innerHeight * 2)
            // && scrollYGlobal < innerHeight * 3) 
        {
            gsap.to(positionRef, {
                x: !isMobile ? -4.1537089546 : -4.7237797477, //First values are DESKTOP
                y: !isMobile ? -0.6428199459 : -0.6071419895,
                z: !isMobile ? 7.4630851022 : 7.0099156403,
                duration: 0.5,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });
            gsap.to(targetRef, {
                x: !isMobile ? 2.6098327676 : 2.0397619746,
                y: !isMobile ? -0.0352704138 : 0.0004075426,
                z: !isMobile ? -0.9973734908 : -1.4505429526,
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
    }

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