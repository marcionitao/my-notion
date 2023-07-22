import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react'
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
      {/* se o editor estiver ativo executo o floatingMenu */}
      {editor && (
        <FloatingMenu
          shouldShow={({ state }) => {
            // localizar o cursor no inicio do texto
            const { $from } = state.selection
            const currentLineText = $from.nodeBefore?.textContent
            return currentLineText === '/'
          }}
          className="flex flex-col gap-1 px-1 py-2 overflow-hidden border rounded-lg shadow-xl bg-zinc-100 border-zinc-600 shadow-black/20 "
          editor={editor}
        >
          {/* botão para adicionar texto simples */}
          <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-400">
            <img
              src="http://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-10 border rounded border-zinc-600"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-500">
                Just start writing with plan text.
              </span>
            </div>
          </button>

          {/* botão para adicionar texto h1 */}
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-400"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading"
              className="w-10 border rounded border-zinc-600"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-500">
                Big section heading.
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}
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
