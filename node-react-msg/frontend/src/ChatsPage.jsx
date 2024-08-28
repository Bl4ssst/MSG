import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {         
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='bffca864-c070-45b7-8296-dfde36578df3'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }} 
            />
        </div>
    );
};

export default ChatsPage;