import React, { Component } from 'react';
import './editorstyle.css';
import brace from 'brace';
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
require('brace/theme/monokai');


class Implementalgos extends Component {
    state = {  }


componentDidMount(){
//     <Helmet>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/ace.js"
//         type="text/javascript">
//     </script>
// </Helmet>

// var editor = ace.edit("editor",{minLines: 2});
//     editor.setTheme("ace/theme/monokai");
// editor.resize()

// editor.getSession().setMode("ace/mode/javascript");
}

initeditor=()=>{
    

}





    render() { 
        return ( 
            <React.Fragment>

<div id="editor">
<AceEditor 
mode="javascript"
theme="monokai" 
placeholder="Hello world"
setOptions={{
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true
  }}

/>
function foo(items) 
    "Hello world"
    
</div>








            </React.Fragment>
         );
    }
}
 
export default Implementalgos;