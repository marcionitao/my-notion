import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { conteudoPage } from './conteudoPage'

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: conteudoPage,
  })
  return (
    <EditorContent
      className='max-w-[700px] mx-auto pt-16 prose prose-violet'
      editor={editor}
    />
  )
}