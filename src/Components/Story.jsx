import StoryElement from './StoryElement.jsx';
import './style.css';
const Story = ({sk})=>{
    console.log(sk)

    return(
<>
<div className="storyBox">
<StoryElement/>
<StoryElement/>
<StoryElement/>
<StoryElement/>
<StoryElement/>
<StoryElement/>
<StoryElement/>
</div>
</>
    )
}

export default Story;