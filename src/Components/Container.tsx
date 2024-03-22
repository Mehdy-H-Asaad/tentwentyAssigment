import { ReactNode } from "react";
import "../Style/Container/Container.scss";
type ContainerProps = {
	children: ReactNode;
	className?: string;
};

function Container({ children, className }: ContainerProps) {
	return <div className={`container ${className}`}>{children}</div>;
}

export default Container;
