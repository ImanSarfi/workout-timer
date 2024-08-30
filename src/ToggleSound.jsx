import { VscMusic } from "react-icons/vsc";
import { TbMusicOff } from "react-icons/tb";



function ToggleSound({allowSound , setAllowSound}) {
    return (
        <button className="btn-voice" onClick={() => setAllowSound((allow) => !allow)}>
            {allowSound ? <VscMusic /> : <TbMusicOff/>}
        </button>
    )
}

export default ToggleSound
