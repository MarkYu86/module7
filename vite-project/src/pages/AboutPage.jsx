import MUIDialog from "../components/MUIDialog";
import MUIForm from "../components/MUIForm";
import SxExample from "../components/SxExample.jsx";

export default function AboutPage() { // Save in pages/AboutPage.jsx
    return (
    <div className="About">
    <h1>About</h1>
    <MUIDialog text="My first MUI Dialog" />
    <MUIForm/>
    <SxExample/>
    </div>
    )
    }