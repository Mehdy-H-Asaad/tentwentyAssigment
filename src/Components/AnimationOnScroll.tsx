import { motion, useInView, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type AnimationProps = {
	children: ReactNode;
};

export function AnimationOnScroll({ children }: AnimationProps) {
	const animationRef = useRef(null);
	const inView = useInView(animationRef, { once: true });
	const animationControls = useAnimation();

	useEffect(() => {
		if (inView) animationControls.start("isVisible");
	}, [inView]);

	return (
		<div
			ref={animationRef}
			style={{ position: "relative", overflow: "hidden" }}
		>
			<motion.div
				variants={{
					isHidden: { opacity: 0, y: 75 },
					isVisible: { opacity: 1, y: 0 },
				}}
				initial="isHidden"
				animate={animationControls}
				transition={{ duration: 1.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
		</div>
	);
}
