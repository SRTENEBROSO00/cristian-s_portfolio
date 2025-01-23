import React from "react";

const SkillCard = (props) => {
    return(
        <div className="border h-96 w-80 p-4 rounded-2xl flex flex-col justify-center items-center ">
            <figure >
                <img src={props.image} alt="" className="h-32"/>
            </figure>
            <section >
                <h2 className="text-center text-4xl p-4">{props.tech}</h2>
                <p className="text-center text-xl">{props.description}</p>
            </section>
        </div>

    )
}

export default SkillCard;