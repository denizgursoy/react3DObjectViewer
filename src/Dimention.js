import React, { Fragment } from "react";
import Line from './Line'



export default function Dimention(props) {
    var items = [];

    var heightEnd = props.start.clone().setY(props.start.y + props.objectHeight);
    var widthEnd = props.start.clone().setX(props.start.x - props.objectWidth);
    var depthEnd= props.start.clone().setZ(props.start.z + props.objectDepth);

    var height = <Line key="heightLine" start={props.start} end={heightEnd} />
    var width = <Line  key="widthLine" start={props.start} end={widthEnd} />
    var depth = <Line  key="depthLine" start={props.start} end={depthEnd} />

    items.push(height);
    items.push(width);
    items.push(depth);

    return (
        <Fragment>
            {items}
        </Fragment>
    )



}