import { DotSpinner } from '@uiball/loaders'
import "./loader.css";
function LoaderContact() {
    return (
        <div className='loader'>
            <DotSpinner 
 size={70}
 speed={0.9} 
 color="black"       
/>
        </div>
    )
}

export default LoaderContact
