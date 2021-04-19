import React, {useState, useCallback} from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';


export default function OpenConversation() {
const [text, setText] = useState('');
const setRef = useCallback(node => {
    if(node){
        node.scrollIntoView({ smooth: true });
    }
},[]);
const { sendMessage, selectedConversation} = useConversations();

function handleSubmit(e){
    e.preventDefault();

    sendMessage( 
        selectedConversation.recipients.map(r => r.id),text
    );
    setText(''); 

}

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

    return (
       
        <div className="d-flex flex-column flex-grow-1 conversationMain">
             <div id="hamburgerHide"><i className="fas fa-hamburger hamburgerHide" onClick={() =>openMenu()} style={{display:'none'}}></i></div>
            <div className="flex-grow-1 overflow-auto">
                <div className="d-flex flex-column align-items-start justify-content-end px-3">
               
                    {selectedConversation.messages.map((message, index)=> {
                        
                        const lastMessage = selectedConversation.messages.length -1 === index;
                        return(
                            
                            <div 
                                ref={ lastMessage ? setRef : null }
                                key={ index }
                                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
                            >
                                
                                <div className={`rounded px-2 py-1 ${message.fromMe ? 'forMe' : 'notForMe'}`}>
                                    {message.text}
                                </div>
                                <div className={`userReference small ${message.fromMe ? 'text-right mr-2' : 'ml-2'}`}>
                                    {message.fromMe ? 'You' : message.senderName}
                                </div>
                            </div>
                            
                          
                        )
                    })}
                   
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <InputGroup>
                        <Form.Control 
                            as="textarea" 
                            required 
                            value={text}
                            onChange={e => setText(e.target.value) }
                            style={{ height: '75px', resize: 'none'}}
                            className="textArea"
                        />
                        <InputGroup.Append>
                            <Button type="submit" className="sendMessage">
                                Send <i className="far fa-arrow-alt-circle-right"></i>
                                </Button>      
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
