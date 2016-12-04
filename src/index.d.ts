import * as React from "react";


declare class React3 extends React.Component<any, any> {

}

declare namespace React3 {}
export = React3;


declare global {
    namespace JSX {
        interface IntrinsicElements {
            scene: any;
            perspectiveCamera: any;
            mesh: any;
            boxGeometry; any;
            meshBasicMaterial: any;
            circleGeometry: any;
        }
    }
}
