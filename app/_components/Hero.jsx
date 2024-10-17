import React from "react";

import { Button } from "@/components/ui/button";
import * as motion from "framer-motion/client";
function Hero() {
	return (
		<section className="bg-hero text-white lg:py-0 py-20 lg:mt-0 mt-32 shadow-2xl lg:h-[85vh] ">
			<div className="lg:mx-40 max-w-screen-xl px-4 lg:flex lg:h-[85vh] lg:place-items-center">
				<div className="max-w-auto sm:max-w-auto text-left">
					<motion.h1
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="bg-gradient-to-r from-[#0052A2] via-[#02386E] to-[#00264D] bg-clip-text text-md font-bold text-transparent sm:text-lg drop-shadow-lg"
					>
						ELIX SOLUTION SDN BHD
					</motion.h1>
					<motion.hr
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="mt-2 w-16 h-1 bg-blue-600 rounded-full"
					/>
					<motion.p
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="mt-4 max-w-4xl sm:text-7xl/tight text-4xl/tight font-extrabold text-gray-900 text-left drop-shadow-xl lg:bg-transparent lg:p-0 p-0 rounded-3xl"
					>
						Smart Solutions for Smarter Operations
					</motion.p>
					<motion.p
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className=" mt-4 max-w-2xl sm:text-xl/tight font-medium text-zinc-800 text-left drop-shadow-lg lg:bg-transparent lg:p-0 rounded-3xl"
					>
						We specializes in delivering innovative IT solutions and services
						for various industries, including government
					</motion.p>
					<Button className="mt-8 bg-transparent border border-gray-900 rounded-full shadow-lg text-md text-gray-900 hover:bg-transparent hover:scale-105 transition-all ease-in-out">
						More About Us
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
