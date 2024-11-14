"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import { FC, useEffect } from "react"
import Toolbar from "@/app/_components/toolbar"
import Underline from "@tiptap/extension-underline"
import Heading from "@tiptap/extension-heading"

const RichTextEditor = ({ onChange, resetTrigger, defaultValue }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent)
  }
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: defaultValue,
    editorProps: {
      attributes: {
        class:
          "flex flex-col py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor) {
      editor.commands.setContent("") // Clear the editor content
    }
  }, [resetTrigger, editor])

  return (
    <div className="w-full">
      <Toolbar editor={editor} content="" />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  )
}

export default RichTextEditor
