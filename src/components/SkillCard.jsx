import React from "react";

const SkillCard = (props) => {
    return(
        <div className=" m-4 bg-customBlack h-72 w-60 p-4 rounded-2xl flex flex-col justify-center items-center font-light">
            <figure >
                <img src={props.image} alt="" className="h-18"/>
            </figure>
            <section >
                <h2 className="text-center font-bold text-3xl p-4">{props.tech}</h2>
                <p className="text-center text-1xl">{props.description}</p>
            </section>
        </div>

    )
}

export default SkillCard;