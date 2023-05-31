import "./style.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const TextEditor = props => {
    const onChange = (content, delta, source, editor) => {
        props.setEditorValue(editor.getHTML());
    };

    return <div className="TextEditor_container">
        <ReactQuill theme="snow" value={props.editorValue} onChange={onChange} />
    </div>
}

export default TextEditor;