import React, { Component } from 'react';
import './editorstyle.css';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/snippets/javascript";
// Import a Mode (language)
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";

// Import a Theme (okadia, github, xcode etc)
require('brace/theme/monokai');


class Implementalgos extends Component {
    state = { 
        language:"c_cpp",


     }
    constructor(props) {
        super(props);
        this.refName = React.createRef();
      }

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
    const selectedText = this.refName.current.editor.getValue()
    console.log(selectedText);


    fetch('/execute' , {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        
            "script" : selectedText,
            "language": "cpp17",
            "versionIndex": "0",
            "clientId": "9c2f22709b6836da6a6dc0adb4684c9b",
            "clientSecret":"850acdb2fed73d6920cc3de9f2c99e25967c813e230f8d0870fc49b5270da9cc"
        
        
    }
    ).then((result) => {
        console.log(result)
      })


    this.setState({
        language:"c_cpp"
    })



}





    render() { 
        return ( 
            <React.Fragment>

<div id="editor">
<AceEditor 
ref={this.refName}
mode={this.state.language}
theme="monokai" 
className="editor"
width='100%'
enableSnippets={true}
focus={true}
enableLiveAutocompletion={true}
value="
console.log('Hello world');"
enableBasicAutocompletion={true}

setOptions={{
    
    focus:true,
    fontSize:15
  }}

/>

    
</div>

<button onClick={this.initeditor}>click</button>






            </React.Fragment>
         );
    }
}
 
export default Implementalgos;