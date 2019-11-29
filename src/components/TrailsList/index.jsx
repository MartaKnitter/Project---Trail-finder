import Trail from "../Trail";
import React from "react";

const TrailsList = ({items}) => (
    <div className="flex flex-wrap">{
        items.map(item => <Trail key={item.id} trail={item}/>)
    }
    </div>);

export default TrailsList