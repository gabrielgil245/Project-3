import React from 'react';

function About (props) {
    return (
        <div className={"grid grid-cols-12"}>
            <p className={"pt-4 md:pt-12 text-lg md:text-xl col-start-2 col-span-10"}>
                This web app is intended for users to build a "todo" list, 
                enabling users to display a list of their to-do items. Users may
                mark their task as completed, filter the tasks to see only active or,
                completed tasks, or to view tasks both active and completed.
                Lastly, users may delete to-do item(s) at their discretion.
            </p>
            <p className={"py-2 md:py-6 text-lg md:text-xl col-start-2 col-span-10"}>
                When ready, click the "Todo" tab to start creating your task list!
            </p>
            <p className={"py-2 md:py-6 text-lg md:text-xl col-start-2 col-span-10"}>
                As for the Contact form, the page contains self-managed states that 
                users may view with a React Developer Tool extension. Take a moment to
                view the four states present in the Contact page!
            </p>
        </div>
    )
}

export default About;