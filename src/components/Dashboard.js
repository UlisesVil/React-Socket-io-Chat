import React from 'react';
import OpenConversation from './OpenConversation';
import Sidebar from './Sidebar';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Dashboard({ id }) {
    const { selectedConversation } = useConversations();

    function openMenu(){
        let sideBarContainer=document.getElementById("sideBarContainer");
        console.log(sideBarContainer);
    
        if(sideBarContainer.style.display==="none"){
            let sideBarContainer=document.getElementById("sideBarContainer");
            sideBarContainer.style.display = "flex";
            console.log(sideBarContainer);
            
          
        }else{
            let sideBarContainer=document.getElementById("sideBarContainer");
            sideBarContainer.style.display = "none";
            console.log(sideBarContainer);
        }
       
    }

    function eraseLocalStorage(){
        localStorage.clear();
    }


    return (
        <div className="d-flex" style={{ height: '100vh'}}>
            <div id="hamburgerHide"><i className="fas fa-hamburger hamburgerHide" onClick={() =>openMenu()} style={{display:'none'}}></i></div>
            <div onClick={() => eraseLocalStorage()} className="rounded-1 modalButton" style={{ position: 'fixed'}}>
                Borrame
            </div>
            <Sidebar id = { id } />
            { selectedConversation &&  <OpenConversation /> }
        
        </div>

   
    )
}
