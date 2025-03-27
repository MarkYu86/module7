import BasicGrid from "../components/BasicGrid"
import CustomCard from "../components/CustomCards"
// Simple page components for completing the routes
// ++ Render some existing components on these pages to add content
export default function Homepage() { // Save in pages/Homepage.jsx
    return (
    <div className="Homepage">
    <h1>Home</h1>
    <CustomCard title="Mark's Card" buttonText="Buy Now!"/>
    <BasicGrid/>
    </div>
    )
    }