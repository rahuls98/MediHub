import { useState } from "react"
import Message from "./Message"
import { selectHMSMessages, useHMSActions, useHMSStore } from "@100mslive/react-sdk"
import { selectPeers } from "@100mslive/react-sdk"
import sessionApis from "../../apis/session"

function ChatNdParticipants() {

  const [selectedOption, setSelectedOption] = useState('chat')
  const [message, setMessage] = useState('')
  const messages = useHMSStore(selectHMSMessages)
  const hmsActions = useHMSActions()
  const peers = useHMSStore(selectPeers)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const redactResult = sessionApis.redactMessage({content:message});
    if (redactResult.count === 0) {
      hmsActions.sendBroadcastMessage(message)
      setMessage('')
    } else {
      alert("Content cannot contain any personal information/vulgarity!");
    }
  }

  return (
    <div className='rightBox'>
      <div className='rightBox__head'>
        <span 
          onClick={() => setSelectedOption('chat')}
          className={selectedOption === 'chat' ? 'selected' : ''}
        >
          Chat
        </span>
        <span 
          className={selectedOption === 'participants' ? 'selected' : ''}
          onClick={() => setSelectedOption('participants')}
        >
          Participants
        </span>
      </div>
      <div className="rightBox__optionView">
        {selectedOption === 'chat' && 
          <>
            <div className="rightBox__chats">
              {/* Messages */}
              {messages.map((msg) => (
                <Message key={msg.id} message={msg} />
              ))}
            </div>
            <div style={{height:'10px'}}></div>
            <form name='send-messge' onSubmit={handleSubmit}>
              <input 
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Write your message"
              />
            </form>
          </>
        }
        {selectedOption === 'participants' && 
          <div className="rightBox__participants">
            {/* Participants */}
            {peers.map((peer) => (
              <div className='rightBox__participant'>
                {peer.name}
                <p>{peer.roleName}</p>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default ChatNdParticipants