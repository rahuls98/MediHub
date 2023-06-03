import Stream from './Stream'
import ChatNdParticipants from './ChatNdParticipants'
import Controls from './Controls'

const Room = props => {

  return (
    <div className='room'>
        <div className='room__streamSpace'>
            <Stream />
            <Controls setLayout={props.setLayout} />
        </div>
        <ChatNdParticipants />
    </div>
  )
}

export default Room