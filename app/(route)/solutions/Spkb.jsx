import React from "react";
import * as motion from "framer-motion/client";
function Spkb() {
	return (
		<section className="flex flex-col justify-center items-center bg-gradient-to-b from-[#d3e7f0] to-[#ffffff]">
			<div className="mx-auto max-w-screen-4xl px-4 sm:px-6 pb-0 pt-6 lg:px-8">
				<motion.div
					initial={{
						y: 200,
						transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
					}}
					whileInView={{
						y: 0,
						transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
					}}
					className="mx-auto flex flex-col max-w-6xl justify-center items-center py-12"
				>
					<hr className="mx-auto w-32 h-1 mb-4 bg-blue-600 rounded-full" />
				</motion.div>
				<div className="grid grid-cols-2 gap-20">
					<motion.div
						initial={{
							y: 200,
							transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
						}}
						whileInView={{
							y: 0,
							transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
						}}
						className="mt-6 relative h-[225px] overflow-hidden sm:h-[250px] lg:h-[380px] shadow-xl"
					>
						<iframe
							height={"100%"}
							width={"100%"}
							src="https://www.youtube.com/embed/KuueSUTBcbM?autoplay=1&showinfo=0&loop=1&mute=1&list=PLmpB1Z-kgo7DK4TcVhbybMtxVg-FiJxF7&rel=0"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</motion.div>
					<div className="flex flex-col gap-12 mt-20">
						<a
							href="https://www.mysti.gov.my/product/sistem-penguatkuasaan-bersepadu-spkb"
							target="_blank"
							className="flex flex-row gap-10 justify-start items-center p-4 rounded-lg"
						>
							<img
								width={"15%"}
								src="https://cdn.prod.website-files.com/62a82797d4fdf5d59d5470d1/63102ca55e2fe036a68d5111_Group%20163.svg"
								alt=""
							/>
							<div className="flex flex-col">
								<span className="font-bold ">MySTI Certified</span>
								<span className="font-bold text-white bg-blue-900 rounded-lg p-2">
									STI202400299
								</span>
							</div>
						</a>

						<h2 className="ml-5 text-4xl font-bold sm:text-4xl max-w-lg">
							Sistem Penguatkuasaan Bersepadu (SPKB)
						</h2>
					</div>
				</div>
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
							<p className="mt-2 text-gray-600 sm:mt-4 mx-6">
								Our Integrated Enforcement System (IES) / Sistem Penguatkuasaan
								Bersepadu (SPKB) solution is designed and customized, where
								necessary, for Malaysian municipalities. It is currently being
								used by some municipalities as a comprehensive solution for
								their enforcement and compound management systems.
							</p>
							<p className="mt-2 text-gray-600 sm:mt-4 mx-6">
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
