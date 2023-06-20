import React from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";

export default function Editor({value,onChange}) {
    const modules = {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
      };
      
      const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
      ];
  return (
    <ReactQuill
        value={value}
        modules={modules}
        formats={formats}
        onChange={onChange}
      ></ReactQuill>
  )
}
