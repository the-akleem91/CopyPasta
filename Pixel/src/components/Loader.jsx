import { DotSpinner } from '@uiball/loaders'
import "./loader.css";

function Loader({color = "white"}) {
return (<div className='loader'>
<DotSpinner 
 size={70}
 speed={0.9} 
 color={color}       
/>
</div>
    )
}

export default Loader
