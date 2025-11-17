import { TrayTitleProps } from "../types/globalTypes"; 

const TrayTitle = ({ title }: TrayTitleProps) => {
  return <h2 className="tray-title">{title}</h2>;
};

export default TrayTitle;

