"use client";

import React, { useState, useEffect } from "react";
import {
	motion,
	AnimatePresence,
	useAnimationControls,
	useScroll,
} from "framer-motion";
import { MessageCircle } from "lucide-react"; // For a stylish icon

const Chatbot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		return scrollYProgress.on("change", (latestValue) => {
			if (latestValue > 0.2) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		});
	}, [scrollYProgress]);

	return (
		<div
			className={`fixed ${
				isScrolled ? "bottom-16" : "bottom-5"
			}  right-5 z-[999999]`}
		>
			{/* Toggle Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
			>
				<MessageCircle className="w-4 h-4" />
			</button>

			{/* Chatbot Window */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
						className={`fixed ${
							isScrolled ? "bottom-20 mt-5" : "bottom-5"
						}  right-5 w-96 h-[60vh] bg-white border border-gray-300 rounded-lg shadow-lg`}
					>
						<iframe
							src="https://www.chatbase.co/chatbot-iframe/pnjEfhmlgv02--4lU-GsX"
							className="w-full h-full border-none rounded-lg"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Chatbot;
