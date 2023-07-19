import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import javascript from 'highlight.js/lib/languages/javascript'
import { conteudoPage } from './conteudoPage'

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from 'react-icons/rx'

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
        class: 'outline-none',
      },
    },
  })
  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-violet"
        editor={editor}
      />
      {/* se o editor estiver ativo executo o BubbleMenu */}
      {editor && (
        <BubbleMenu
          className="flex overflow-hidden border divide-x rounded-lg shadow-xl divide-zinc-600 bg-zinc-100 border-zinc-600 shadow-black/20 "
          editor={editor}
        >
          <button className="flex items-center p-2 text-sm text-zinc-600 gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-400">
            Text
            <RxChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center p-2 text-sm text-zinc-600 gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-400">
            Comment
            <RxChatBubble className="w-4 h-4" />
          </button>

          <div className="flex items-center">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
              className="flex items-center p-2 text-sm text-zinc-600 gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-400 data-[active=true]:text-violet-600"
            >
              <RxFontBold className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
              className="flex items-center p-2 text-sm text-zinc-600 gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-400 data-[active=true]:text-violet-600"
            >
              <RxFontItalic className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
              className="flex items-center p-2 text-sm text-zinc-600 gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-400 data-[active=true]:text-violet-600"
            >
              <RxStrikethrough className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
              className="flex items-center p-2 text-sm text-zinc-600 gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-400 data-[active=true]:text-violet-600"
            >
              <RxCode className="w-4 h-4" />
            </button>
          </div>
        </BubbleMenu>
      )}
    </>
  )
}
