import React, {useState} from 'react';

function Contact (props) {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const onChangeLastName = (event) => {
        setLastName(event.target.value);
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangeComments = (event) => {
        setComments(event.target.value);
    }
    return (
        <div>
            <form className={"border p-3 m-4 md:m-12 lg:m-16 xl:m-20"}>
                <div className={"grid grid-cols-12 gap-3"}>
                    <span className={"font-bold col-span-12"}>First Name</span>
                    <input type="text" 
                    className={"col-span-12 p-2 border rounded w-full"}
                    placeholder={"First Name"}
                    onChange={onChangeFirstName}/>
                    <span className={"font-bold col-span-12"}>Last Name</span>
                    <input type="text" 
                    className={"col-span-12 p-2 border rounded w-full"}
                    placeholder={"Last Name"}
                    onChange={onChangeLastName}/>
                    <span className={"font-bold col-span-12"}>Email</span>
                    <input type="email" 
                    className={"col-span-12 p-2 mr-5 border rounded w-full"}
                    placeholder={"Email"}
                    onChange={onChangeEmail}/>
                    <span className={"font-bold col-span-12"}>Comments</span>
                    <textarea rows='4' 
                    className={"col-span-12 p-2 mr-5 border rounded w-full"}
                    placeholder={"What would you like to say?"}
                    onChange={onChangeComments}/>
                    <button type="submit" className={"col-span-4 md:col-span-2 xl:col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;