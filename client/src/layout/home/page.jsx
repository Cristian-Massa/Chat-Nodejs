import Menu from "../../component/menu/menu";
import Chat from "../../component/chat/chat";
import { UseRedirect } from "../../hooks/useRedirect";
const Home = () =>{
    UseRedirect('/login')

    return(
        <div>
            <Menu />
            <Chat />
        </div>
    )
};

export default Home