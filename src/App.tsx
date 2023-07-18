import Editor from './components/Editor';

export default function App() {

  return (
    <div className={`min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100`}>
      <div className={`bg-white w-[1100px] mx-auto rounded-xl min-h-[600px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]`}>
        <aside className={`bg-zinc-50 border-r border-r-zinc-100 p-4`}>
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full group-hover:bg-red-400 bg-zinc-300" />
            <button className="w-3 h-3 rounded-full group-hover:bg-yellow-400 bg-zinc-300" />
            <button className="w-3 h-3 rounded-full group-hover:bg-green-400 bg-zinc-300" />
          </div>
        </aside>
        <main className={`p-4`}>
          <Editor />
        </main>
      </div>
    </div >
  )
}
