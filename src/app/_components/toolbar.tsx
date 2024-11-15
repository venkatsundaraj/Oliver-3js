"use client"

import React from "react"
import { type Editor } from "@tiptap/react"
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Link,
  Heading4,
} from "lucide-react"

type Props = {
  editor: Editor | null
  content: string
}

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("Enter the URL", previousUrl)

    if (url === null) {
      // If canceled, don't apply any changes
      return
    }

    if (url === "") {
      // Empty string will remove the link
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
    } else {
      // Apply the link with the URL provided
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run()
    }
  }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700"
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBold().run()
          }}
          className={
            editor.isActive("bold")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleItalic().run()
          }}
          className={
            editor.isActive("italic")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleUnderline().run()
          }}
          className={
            editor.isActive("underline")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleStrike().run()
          }}
          className={
            editor.isActive("strike")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={setLink}
          className={
            editor.isActive("link")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Link className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }}
          className={
            editor.isActive("heading", { level: 3 })
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Heading4 className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBulletList().run()
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleOrderedList().run()
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBlockquote().run()
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Quote className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().setCode().run()
          }}
          className={
            editor.isActive("code")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2"
          }
        >
          <Code className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().undo().run()
          }}
          className={
            editor.isActive("undo")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2 hover:bg-sky-700 hover:text-white  hover:rounded-lg"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().redo().run()
          }}
          className={
            editor.isActive("redo")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-primary-foreground p-2 hover:bg-sky-700 hover:text-white  hover:rounded-lg"
          }
        >
          <Redo className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default Toolbar
