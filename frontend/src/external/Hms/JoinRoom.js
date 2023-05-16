import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinRoom() {

  const [username, setUsername] = useState("")
  const [selectedRole, setSelectedRole] = useState("broadcaster")
  const hmsActions = useHMSActions()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let vaultResponse;
    try {
      vaultResponse = await fetch('http://localhost:8000/vault/hms');
    } catch (err) {
      console.log(err);
    }
    const { HMS_ROOM_ID, HMS_TOKEN_ENDPOINT } = await vaultResponse.json();
    const response = await fetch(`${HMS_TOKEN_ENDPOINT}api/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id: `${Date.now()}`,
        role: selectedRole, //broadcaster, hls-viewer
        type: "app",
        room_id: HMS_ROOM_ID,
      }),
    })
    console.log(response)
    const { token } = await response.json()
    console.log(token)
    // Joining the room
    hmsActions.join({
      userName: username,
      authToken: token,
    })
  }

  return (
    <form className="join" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select
        type="text"
        required
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        placeholder='Select Role'
      >
        <option>broadcaster</option>
        <option>hls-viewer</option>
      </select>
      <button>Join</button>
    </form>
  );
}

export default JoinRoom;