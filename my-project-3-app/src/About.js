import React from 'react';

function About (props) {
    return (
        <div className={"grid grid-cols-12 -3"}>
            <span className={"col-start-1"}></span>
            <p className={"pt-6 text-lg col-span-10"}>
                This web app is intended for users to build a "todo" list, 
                enabling users to display a list of their to-do items. Users may
                mark their tasks with one of three statuses, 
                which will filter between three status boxes.
                Lastly, users may delete to-do item(s) at their discretion.
            </p>
            <span className={"col-start-1"}></span>
            <p className={"py-6 text-lg col-span-10"}>
                When ready, click the "Todo" tab to start creating your task list!
            </p>
        </div>
    )
}

export default About;