import React, { useEffect, useState, useRef, Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as CustomEditor from 'hajaliw-ckeditor5-custom-build/build/ckeditor'

// onChange (props)
const Editor = ({ value,onBlurSet }) => {
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  useEffect(() => {
    setIsLayoutReady(true);
  }, []);
  return (
    <div>

        <CKEditor
          editor={CustomEditor}
          data={value}
          // onChange={(event, editor) => {
          //   const data = editor.getData();
          //   onChange(data);
          // }}
          onBlur={ ( event, editor ) => {
            const data = editor.getData();
            onBlurSet(data);
        } }
        />
      
    </div>
  );
};

export default Editor;
