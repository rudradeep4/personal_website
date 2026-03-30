import Main from "./main";
import Education from "./education";
import Publications from "./publications";

export default function Content({ content, accent }) {
  const textColor = "#1A1A1A";
  
  if (content === "") {
    return <Main textColor={textColor} accent={accent} />;
  }
  if (content === "education") {
    return <Education textColor={textColor} accent={accent} />;
  }
  if (content === "publications") {
    return <Publications textColor={textColor} accent={accent} />;
  }
}
