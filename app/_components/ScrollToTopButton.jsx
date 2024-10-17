"use client";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useEffect } from "react";

const ScrollToTopContainerVariants = {
	hide: { opacity: 0, y: 100 },
	show: { opacity: 1, y: 0 },
};

function ScrollToTopButton() {
	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		return scrollYProgress.on("change", (latestValue) => {
			if (latestValue > 0.2) {
				controls.start("show");
			} else {
				controls.start("hide");
			}
		});
	}, [scrollYProgress, controls]);

	return (
		<motion.button
			className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
			variants={ScrollToTopContainerVariants}
			initial="hide"
			animate={controls}
			onClick={scrollToTop}
		>
			<FaArrowUp />
		</motion.button>
	);
}

export default ScrollToTopButton;
