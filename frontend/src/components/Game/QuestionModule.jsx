
import DialGame from './ModuleTypes/DialGame';
import PadlockGame from './ModuleTypes/PadlockGame';
import SwitchGame from './ModuleTypes/SwitchGame';
import WireGame from './ModuleTypes/WireGame';
import Timer from './ModuleTypes/Timer'

var moduleType = (<div>null</div>)

function QuestionModule( props ) {
    if (props.type === 0) {
        moduleType = DialGame(props);
    } else if (props.type === 1) {
        moduleType = SwitchGame(props);
    } else if (props.type === 2){
        moduleType = WireGame(props);
    } else if (props.type === 3) {
        moduleType = Timer(props);
    }
    
    return (<div className="w-full h-full"> { moduleType } </div>);
}

export default QuestionModule;