import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
const editorConfiguration = {
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'heading',
      '|',
      'fontfamily',
      'fontsize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'strikethrough',
      'subscript',
      'superscript',
      'code',
      '-', // break point
      '|',
      'alignment',
      'link',
      'uploadImage',
      'blockQuote',
      'codeBlock',
      '|',
      'bulletedList',
      'numberedList',
      'todoList',
      'outdent',
      'indent',
    ],
    shouldNotGroupWhenFull: true,
  },
};

function ContentInformation() {
  return (
    <>
      <CKEditor
        editor={Editor as any} 
        config={editorConfiguration}
        data='<p>Hello from CKEditor&nbsp;5!</p>'
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          console.log('Blur.', editor,event);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor,event);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor,event);
        }}
      />
    </>
  );
}

export default ContentInformation;
