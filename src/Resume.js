import React from 'react';
import data from './data.json';
import icon from './super.svg';


let Resume=(props)=>{
    let info = Object.values(props.location.index.value);
    console.log(info);
    let person = data.profiles[info];
    // console.log(person)

    return(
        <div className="parent">
           <div className="child">
        
            <img src={icon} alt="profile"></img>
            <h1>{person.basics.name}</h1>
            <h3>{person.basics.email}</h3>
            <h2>{person.basics.mobile}</h2>
        
           </div>
           <div className="child2">
               <h2>Education Qualification:</h2><hr></hr>
               <h3 className="bhoom">
                   {person.education.map((i,j)=>(
                        <div>
                        <h4>{i.degree}</h4>
                        <ul>
                            <li>{i.percentage}</li>
                            <li>{i.institute}</li>
                        </ul>
                        </div>
                    ))}
                </h3>

                <h3>Skills</h3><hr></hr>
                {person.skills.map((x,y)=>(
                    <div key={y} className="skill">
                        <h4>{x.type}</h4>
                            {x.values.map((k,l)=>(
                                <div>
                                    <li>{k}</li>
                                </div>
                            ))}
                    </div>

                ))}
            </div>
        </div>
    )
}
export default Resume;