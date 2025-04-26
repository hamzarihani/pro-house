import { useEffect, useState } from "react";

function SvgIcon({ src }: { src: string }) {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => setSvgContent(text))
      .catch((error) => console.error("Error loading SVG:", error));
  }, [src]);

  return (
    <div className="svg-icon" dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
}
export default SvgIcon;
