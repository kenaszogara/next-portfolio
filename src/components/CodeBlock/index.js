import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({
  node,
  inline,
  className,
  children,
  ...props
}) {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      style={dracula}
      language={match[1]}
      showLineNumbers={true}
      {...props}
    />
  ) : !inline && !match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      style={dracula}
      {...props}
    />
  ) : (
    <code>{children}</code>
  );
}
