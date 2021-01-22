import Grid from 'antd/lib/card/Grid';
import React, {useState, useEffect} from 'react';
import { Tabs } from "antd";
import AddButton from "./AddButton";
import TodosList from "./TodosList";
import ListItem from "./ListItem";

const { TabPane } = Tabs;

function Todos (props) {
    
    return (
        <div>
            <div className={"p-5 m-5 border md:m-12 lg:m-20"}>
                <div className={"flex justify-center items-center"}>
                    <input type="text" className={"p-2 mr-5 border rounded w-full"}
                    placeholder={"Task..."}/>
                    <AddButton/>
                </div>
            </div>

            <TodosList/>
                                    
            <div className={"mt-10"}></div>
            
            <Tabs defaultActiveKey="1" type={"card"}>
                <TabPane tab="All" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Active" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Completed" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
            
            <div className={"mt-10"}></div>

        </div>
    );
}

export default Todos;