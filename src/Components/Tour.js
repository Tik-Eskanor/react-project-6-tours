import React from "react"

export default function Tour({props, removeTour})
{
    let [readMore, setReadMore] = React.useState(false)

    return (
        <article>
            <img src={props.image} />
            <div className="tour-info">
                <h4>{props.name}</h4>
                <h4><span>${props.price}</span></h4>
            </div>
            <p>{readMore ? props.info : props.info.substring(0,200)}
            <button className="read-more" onClick={()=> setReadMore(!readMore)}>
               { readMore ? "show less" : "read more"}
            </button>

            </p>
            <div>
               <center><button className="not-interested" onClick={() => removeTour(props.id)}>Not interested</button></center> 
            </div>
        </article>
    )
}