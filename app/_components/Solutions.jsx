import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";
const Solutions = () => {
	const cardVariants = {
		offscreen: {
			y: 100,
			transition: {
				type: "linear",
				duration: 0.8,
			},
		},
		onscreen: {
			y: 0,
			transition: {
				type: "linear",
				duration: 0.8,
			},
		},
	};
	return (
		<section className="bg-gradient-to-b from-[#ffffff] to-[#d3e7f0] text-gray-900">
			<div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					variants={cardVariants}
					className="mx-auto max-w-lg text-center"
				>
					<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
					<h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
						Our Solutions
					</h2>
				</motion.div>

				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					variants={cardVariants}
					className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-zinc-900"
				>
					<a
						className="flex flex-col justify-around bg-white border-blue-200 gap-3 items-center rounded-xl border p-12 shadow-xl transition-all ease-in-out hover:scale-105  hover:shadow-gray-500/10"
						href="/solutions"
					>
						<Image
							src={"/Solution1.webp"}
							alt="SPKB"
							width={150}
							height={100}
							className="drop-shadow-2xl"
						/>

						<h2 className="text-2xl font-semibold text-center">
							Enforcement System Development for Local Councils
						</h2>

						<p className="mt-1 text-md font-light text-center">
							Digital Solution for Local Councils Enforcement activities that
							covered all laws, act and section under State & Federal government
							from issuing compound, notice and prosecution.
						</p>
					</a>

					<a
						className="flex flex-col justify-around bg-white border-blue-100 gap-3 items-center rounded-xl border p-12 shadow-xl transition-all ease-in-out hover:scale-105  hover:shadow-gray-500/10"
						href="/solutions"
					>
						<Image
							src={"/Solution2.webp"}
							alt="SPKB"
							width={150}
							height={100}
							className="drop-shadow-2xl"
						/>
						<h2 className="text-2xl font-semibold text-center">
							Technology & Equipment Service Provider
						</h2>

						<p className="mt-1 text-md font-light text-center">
							We offers specialized services related to the installation,
							maintenance, and support of various technological systems and
							equipment.
						</p>
					</a>
					<a
						className="flex flex-col justify-around bg-white border-blue-100 gap-3 items-center rounded-xl border p-12 shadow-xl transition-all ease-in-out hover:scale-105  hover:shadow-gray-500/10"
						href="/solutions"
					>
						<Image
							src={"/Solution3.webp"}
							alt="SPKB"
							width={150}
							height={100}
							className="drop-shadow-2xl"
						/>
						<h2 className="text-2xl font-semibold text-center">
							Analytic Tools & Applications
						</h2>

						<p className="mt-1 text-md font-light text-center">
							Software solutions and platforms designed to process, analyze, and
							interpret data to support decision-making and strategic planning.
							These tools help organizations make data-driven decisions by
							identifying trends, predicting outcomes, and uncovering insights.
						</p>
					</a>
					<a
						className="flex flex-col justify-around bg-white border-blue-100 gap-3 items-center rounded-xl border p-12 shadow-xl transition-all ease-in-out hover:scale-105  hover:shadow-gray-500/10"
						href="/solutions"
					>
						<Image
							src={"/Solution4.webp"}
							alt="SPKB"
							width={150}
							height={100}
							className="drop-shadow-2xl"
						/>
						<h2 className="text-2xl font-semibold text-center">
							System Consultation & Management
						</h2>

						<p className="mt-1 text-md font-light text-center">
							Help organizations optimize their IT infrastructure, streamline
							operations, and ensure that their technology systems align with
							business goals.
						</p>
					</a>
				</motion.div>

				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					variants={cardVariants}
					className="mt-12 text-center"
				>
					<a
						href="/solutions"
						className="inline-block rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
					>
						More About Solutions
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default Solutions;
