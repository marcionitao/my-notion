import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import javascript from 'highlight.js/lib/languages/javascript'
import { conteudoPage } from './conteudoPage'

import 'highlight.js/styles/atom-one-dark.css'

lowlight.registerLanguage('javascript', javascript)

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: conteudoPage,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })
  return (
    <EditorContent
      className='max-w-[700px] mx-auto pt-16 prose prose-violet'
      editor={editor}
    />
  )
}