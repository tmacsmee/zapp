
import DialGame from './ModuleTypes/DialGame';
import PadlockGame from './ModuleTypes/PadlockGame';
import SwitchGame from './ModuleTypes/SwitchGame';
import WireGame from './ModuleTypes/WireGame';

var moduleType = (<div>null</div>)

function QuestionModule( props ) {
    if (props.type === "0") {
        moduleType = DialGame;
    } else if (props.type === "1") {
        moduleType = PadlockGame;
    } else if (props.type === "2") {
        moduleType = SwitchGame;
    } else if (props.type === "3"){
        moduleType = WireGame
    }
    
    return (
        <div>
            {moduleType}
        </div>
    );
}

export default QuestionModule;