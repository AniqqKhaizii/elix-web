import React from "react";
import * as motion from "framer-motion/client";
function Spkb() {
	return (
		<section className="flex flex-col justify-center items-center bg-gradient-to-b from-[#d3e7f0] to-[#ffffff]">
			<div className="mx-auto max-w-screen-4xl px-4 sm:px-6 pt-24 lg:px-8">
				<div className="flex flex-col justify-center items-end">
					<h2 className="text-4xl font-bold sm:text-5xl max-w-5xl text-center sm:text-left">
						Sistem Penguatkuasaan Bersepadu (SPKB)
					</h2>
					<hr className="col-span-4 mt-2 w-[50%] h-[2px] mx-auto bg-gradient-to-r from-transparent via-gray-900 to-transparent " />
					<a
						href="https://www.mysti.gov.my/product/sistem-penguatkuasaan-bersepadu-spkb"
						target="_blank"
						className="flex flex-row gap-10 justify-end items-center p-4 rounded-lg"
					>
						<img
							width={"10%"}
							src="https://cdn.prod.website-files.com/62a82797d4fdf5d59d5470d1/63102ca55e2fe036a68d5111_Group%20163.svg"
							alt=""
						/>
						<div className="flex flex-col">
							<span className="font-bold text-sm">MySTI Certified</span>
							<span className="font-bold text-sm text-white bg-blue-900 rounded-lg p-2">
								STI202400299
							</span>
						</div>
					</a>
				</div>
			</div>
			<section>
				<div className="mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 md:py-12 lg:px-8 lg:py-16">
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
							className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-second lg:h-full"
						>
							<section>
								<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
									<ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
										<li>
											<div className="group relative block">
												<img
													src="/spkb_icon.png"
													alt=""
													className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
												/>
											</div>
										</li>

										<li>
											<div className="group relative block">
												<img
													src="/SPKB1.jpg"
													alt=""
													className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
												/>
											</div>
										</li>

										<li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
											<div className="group relative block">
												<img
													src="https://cdn.prod.website-files.com/62a986046801ae7aeb3e5205/65ddf339387b3f985e9e71a8_cover.299-p-800.jpeg"
													alt=""
													className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
												/>
											</div>
										</li>
									</ul>
								</div>
							</section>
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
							className="lg:py-16 py-6 text-justify"
						>
							<p className="mt-2 text-gray-600 sm:mt-4 mx-6 text-lg">
								Our Integrated Enforcement System (IES) / Sistem Penguatkuasaan
								Bersepadu (SPKB) solution is designed and customized, where
								necessary, for Malaysian municipalities. It is currently being
								used by some municipalities as a comprehensive solution for
								their enforcement and compound management systems.
							</p>
							<p className="mt-2 text-gray-600 sm:mt-4 mx-6 text-lg">
								This system facilitates enforcement operations for local
								authorities and streamlines the process of compound issuance
								until the prosecution process. This is because the system is
								developed in accordance with the acts, enactments, and laws
								under the jurisdiction of the relevant local authorities. The
								system is also updated from time to time to meet the criteria
								and current technological developments.
							</p>
						</motion.div>

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
							className="lg:py-16 py-6 text-justify"
						>
							<p className="mt-2 text-gray-600 sm:mt-4 mx-6 text-lg">
								SPKB is a comprehensive enforcement operations for enforcer use
								to execute all act / UUK for municipality enforcer activities
								from task force operation, notices, compounds, reminder,
								investigation to prosecution. Integrated data between internal
								system such as license system, assessment system, town planning
								system, finance system & integrated command center.
							</p>
							<ol className="mt-2 text-gray-600 sm:mt-4 mx-6 text-lg list-disc list-inside">
								<li>Data sharing among internal system for investigation</li>
								<li>Real-time data sharing & analytics</li>
								<li>Enhance security</li>
								<li>Educate public about law</li>
								<li>Effective response time to public complaints</li>
								<li>Increase collection revenue from compound</li>
							</ol>
						</motion.div>
					</div>
				</div>
			</section>
			<section className="bg-transparent">
				<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
					<h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
						Our Clients that implementing SPKB
					</h2>

					<div className="mx-auto max-w-screen-sm mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
						<blockquote className="rounded-lg p-6 sm:p-8">
							<div className="flex flex-col items-center gap-4">
								<img
									alt=""
									src="/MPHS.png"
									className="size-32 object-contain drop-shadow-lg"
								/>

								<div>
									<p className="mt-0.5 text-2xl font-medium text-gray-900">
										MPHS
									</p>
								</div>
							</div>
						</blockquote>
						<blockquote className="rounded-lg p-6 sm:p-8">
							<div className="flex flex-col items-center gap-4">
								<img
									alt=""
									src="/MPKS.png"
									className="size-32 object-contain drop-shadow-lg"
								/>

								<div>
									<p className="mt-0.5 text-2xl font-medium text-gray-900">
										MPKS
									</p>
								</div>
							</div>
						</blockquote>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Spkb;
