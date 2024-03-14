import GoogleCaptcha from "../Capcha";
import ToolBar from "../ToolBar";

const ListRouter = [
    {
        id: 0,
        path: 'GoogleCaptCha',
        name: 'Google CaptCha',
        component: <GoogleCaptcha />
    },
    {
        id: 1,
        path: 'ToolBar',
        name: "Tool Bar",
        component: <ToolBar />
    }
]
export default ListRouter