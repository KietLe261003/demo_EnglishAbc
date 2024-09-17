import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 

function ContentInformation() {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              'undo',
              'redo',
              '|',
              'heading',
              '|',
              'fontSize',
              'fontColor',
              'fontBackgroundColor',
              '|',
              'bold',
              'italic',
              'strikethrough',
              'subscript',
              'superscript',
              'code',
              '-',
              '|',
              'alignment',
              'link',
              'imageUpload',
              'blockQuote',
              'codeBlock',
              '|',
              'bulletedList',
              'numberedList',
              'todoList',
              'outdent',
              'indent',
            ],
          },
          image: {
            toolbar: [
              'imageTextAlternative',
              'imageStyle:full',
              'imageStyle:side',
            ],
          },
          initialData: '<p>Hello from CKEditor 5 in React!</p>',
        }}
        onChange={(event, editor) => {
          console.log('Blur.', editor, event);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor, event);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor, event);
        }}
      />
    </>
  );
}

export default ContentInformation;
