import React from 'react';
import OpenConversation from './OpenConversation';
import Sidebar from './Sidebar';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Dashboard({ id }) {
    const { selectedConversation } = useConversations();

    function openMenu(){
        let sideBarContainer=document.getElementById("sideBarContainer");
    
        if(sideBarContainer.style.display==="none"){
            let sideBarContainer=document.getElementById("sideBarContainer");
            sideBarContainer.style.display = "flex";
        }else{
            let sideBarContainer=document.getElementById("sideBarContainer");
            sideBarContainer.style.display = "none";
        }
    }

    function sidebarShowHide(){
        let variableWidth = document.getElementById('root').clientWidth;
        if(variableWidth>770){
            let sideBarContainer=document.getElementById("sideBarContainer");
            sideBarContainer.style.display = "flex";
        }
    }
    window.addEventListener('resize',sidebarShowHide);

    return (
        <div className="d-flex" style={{ height: '100vh'}}>
            <div id="hamburgerHide">
                <i className="fas fa-hamburger hamburgerHide" onClick={() =>openMenu()} style={{display:'none'}}>
                </i>
            </div>
            <Sidebar id = { id } />
            { selectedConversation &&  <OpenConversation /> }
        </div>
    )
}
