import { Clipboard, TerminalSquare } from "lucide-react";

const Card = () => {
  return (
    <div className="mx-auto mb-5 max-w-80 overflow-hidden rounded-lg border border-solid">
      <div className="wrap relative z-10 flex flex-col gap-4 overflow-hidden rounded-lg border border-gray-600">
        <div className="terminal flex flex-col font-mono">
          <div className="head flex min-h-10 items-center justify-between overflow-hidden rounded-t-lg bg-[#202425] px-3">
            <p className="title flex h-10 items-center gap-2 overflow-hidden font-semibold text-ellipsis whitespace-nowrap text-[#8e8e8e]">
              <TerminalSquare className="h-4 w-4 text-[#006adc]" />
              Terminal
            </p>
            <button className="copy_toggle ml-auto flex cursor-pointer items-center justify-center rounded border border-gray-600 bg-[#202425] p-1 text-[#8e8e8e]">
              <Clipboard className="h-4 w-4" />
            </button>
          </div>
          <div className="body relative flex flex-col overflow-x-auto rounded-b-lg bg-black p-4 whitespace-nowrap text-white">
            <pre className="pre text-wrap-nowrap box-border flex items-center overflow-hidden bg-transparent text-lg">
              {"          "}
              <code>—&nbsp;</code>
              {"\n"}
              {"          "}
              <code className="text-accent text-sm">npx&nbsp;</code>
              {"\n"}
              <code
                className="cmd text-sm"
                // data-cmd=" create-react-app@latest"
                data-cmd="Desenvolvedor Full Stack"
              />

              <span className="text-accent animate-pulse font-bold">|</span>

              {"\n"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
