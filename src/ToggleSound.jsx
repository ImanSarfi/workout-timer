import { VscMusic } from "react-icons/vsc";
import { TbMusicOff } from "react-icons/tb";
import { memo } from "react";


const ToggleSound = function ToggleSound({allowSound , setAllowSound}) {
    return (
        <button className="btn-sound" onClick={() => setAllowSound((allow) => !allow)}>
            {allowSound ? <VscMusic /> : <TbMusicOff/>}
        </button>
    )
}

export default memo(ToggleSound);
