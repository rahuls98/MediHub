import "./style.css";
import Table from '@mui/joy/Table';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const SessionsLayoutContent = () => {
    return <div className="SessionsLayoutContent_container">
        <Table stickyHeader>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Topics</th>
                    <th>Date</th>
                    <th>Actions</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Q&A Session</td>
                    <td>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip label="topic 1" color="primary" />
                            <Chip label="topic 2" color="primary" />
                            <Chip label="topic 2" color="primary" />
                        </Stack>
                    </td>
                    <td>6</td>
                    <td>
                        <div style={{display: 'flex'}}>
                            <Button variant="outlined" color="error"><DeleteIcon sx={{ fontSize: 20 }}/></Button>
                            <Button variant="outlined"><EditIcon sx={{ fontSize: 20 }}/></Button>
                        </div>
                    </td>
                    <td>
                        <Button variant="outlined" color="success">
                            Join room
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>Q&A Session</td>
                    <td>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip label="topic 1" color="primary" />
                            <Chip label="topic 2" color="primary" />
                            <Chip label="topic 2" color="primary" />
                        </Stack>
                    </td>
                    <td>6</td>
                    <td>
                        <div style={{display: 'flex'}}>
                            <Button variant="outlined" color="error"><DeleteIcon sx={{ fontSize: 20 }}/></Button>
                            <Button variant="outlined"><EditIcon sx={{ fontSize: 20 }}/></Button>
                        </div>
                    </td>
                    <td>
                        <Button variant="outlined" color="success">
                            Join room
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>Q&A Session</td>
                    <td>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip label="topic 1" color="primary" />
                            <Chip label="topic 2" color="primary" />
                            <Chip label="topic 2" color="primary" />
                        </Stack>
                    </td>
                    <td>6</td>
                    <td>
                        <div style={{display: 'flex'}}>
                            <Button variant="outlined" color="error"><DeleteIcon sx={{ fontSize: 20 }}/></Button>
                            <Button variant="outlined"><EditIcon sx={{ fontSize: 20 }}/></Button>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    </div>
}

export default SessionsLayoutContent;