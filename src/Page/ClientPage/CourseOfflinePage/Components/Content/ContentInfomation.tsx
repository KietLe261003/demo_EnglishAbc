import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ContentInformation() {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: [],
          initialData: '<div class="course-intro"><h1>Giới thiệu Khóa học XYZ</h1><p>Khóa học XYZ cung cấp kiến thức cơ bản và nâng cao về [chủ đề khóa học], giúp bạn trang bị các kỹ năng cần thiết để [mục tiêu của khóa học].</p><p>Tham gia khóa học, bạn sẽ được học từ các chuyên gia trong ngành, với chương trình đào tạo toàn diện và các tài liệu thực hành phong phú.</p><p>Đăng ký ngay để bắt đầu hành trình học tập của bạn và phát triển bản thân cùng chúng tôi!</p></div>',
        }}
        onReady={(editor) => {
          editor.enableReadOnlyMode('customReadOnly');
        }}
        onChange={(event, editor) => {
          console.log('Change.', editor, event);
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
