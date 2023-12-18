import { useState } from "react";

const StringArea = ({ text }) => {
  const [expand, setExpand] = useState(false);

  let shortText = text;

  // bu alan kapalıysa ve yazı 300 harften uzunsa yazıyı kes ve
  // sonuna ...daha fazla koy

  if (!expand && text.length > 300) {
    shortText = text.slice(0, 200) + "...daha fazla";
  }

  return (
    <div onClick={() => setExpand(!expand)}>
      {shortText.split("\n").map((line, i) => (
        <span key={i}>
          {line} <br />
        </span>
      ))}
    </div>
  );
};

export default StringArea;
