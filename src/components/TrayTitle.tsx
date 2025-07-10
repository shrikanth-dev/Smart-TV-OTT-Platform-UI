import { TrayTitleProps } from "../types/globalTypes"; // Using type instead of interface

const TrayTitle = ({ title }: TrayTitleProps) => {
  return <h2 className="tray-title">{title}</h2>;
};

export default TrayTitle;

