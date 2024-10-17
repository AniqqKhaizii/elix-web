import React from "react";
import * as motion from "framer-motion/client";
function Spkb() {
	return (
		<section className="flex flex-col justify-center items-center bg-gradient-to-b from-[#d3e7f0] to-[#ffffff]">
			<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-12 lg:px-8">
				<motion.div
					initial={{
						y: 200,
						transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
					}}
					whileInView={{
						y: 0,
						transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
					}}
					className="flex flex-col max-w-4xl justify-center items-center"
				>
					<hr className="w-32 h-1 mb-4 bg-blue-600 rounded-full" />
					<h2 className="text-4xl font-bold sm:text-4xl">
						Sistem Penguatkuasaan Bersepadu (SPKB)
					</h2>
				</motion.div>

				<motion.div
					initial={{
						y: 200,
						transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
					}}
					whileInView={{
						y: 0,
						transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
					}}
					className="mt-6"
				>
					<div className="relative h-80 overflow-hidden sm:h-80 lg:h-[50vh] shadow-xl">
						<video
							autoPlay
							loop
							muted
							playsInline
							className="absolute inset-0 h-full w-full object-cover"
						>
							<source src="/SPKB FINAL.mp4" type="video/mp4" />
						</video>
					</div>
				</motion.div>
			</div>
			<section>
				<div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
						<motion.div
							initial={{
								x: 200,
								transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
							}}
							whileInView={{
								x: 0,
								transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
							}}
							className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
						>
							<img
								alt=""
								src="/mockup.png"
								className="absolute inset-0 h-full w-full object-cover"
							/>
						</motion.div>

						<motion.div
							initial={{
								x: -200,
								transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
							}}
							whileInView={{
								x: 0,
								transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
							}}
							className="lg:py-24 py-12 text-justify"
						>
							<p className="mt-2 text-gray-600 sm:mt-4">
								Our Integrated Enforcement System (IES) / Sistem Penguatkuasaan
								Bersepadu (SPKB) solution is designed and customized, where
								necessary, for Malaysian municipalities. It is currently being
								used by some municipalities as a comprehensive solution for
								their enforcement and compound management systems.
							</p>
							<p className="mt-2 text-gray-600 sm:mt-4">
								This system facilitates enforcement operations for local
								authorities and streamlines the process of compound issuance
								until the prosecution process. This is because the system is
								developed in accordance with the acts, enactments, and laws
								under the jurisdiction of the relevant local authorities. The
								system is also updated from time to time to meet the criteria
								and current technological developments.
							</p>
						</motion.div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Spkb;
