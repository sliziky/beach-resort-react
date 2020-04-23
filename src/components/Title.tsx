import React from 'react'

interface ITitle {
    title : string;
}

export default function Title({title} : ITitle) {
    return (
        <div className="section-title">
            <h4>{title}</h4>
            <div/>
        </div>
    )
}
