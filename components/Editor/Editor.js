import React, { useEffect, useState, useRef, Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as CustomEditor from 'hajaliw-ckeditor5-custom-build/build/ckeditor'

const Editor = ({ value, onChange }) => {
  const ref = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  useEffect(() => {
    const el2 = ref.current;
    setIsLayoutReady(true);
  }, []);
  return (
    <div>

        <CKEditor
          editor={CustomEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      
    </div>
  );
};

export default Editor;
