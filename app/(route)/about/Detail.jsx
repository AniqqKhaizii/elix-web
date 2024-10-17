"use client";
import React, { useEffect } from "react";
import * as motion from "framer-motion/client";
function Detail() {
	// useEffect(() => {
	// 	fjGallery(document.querySelectorAll(".gallery"), {
	// 		itemSelector: ".gallery__item",
	// 		rowHeight: 180,
	// 		lastRow: "start",
	// 		gutter: 2,
	// 		rowHeightTolerance: 0.1,
	// 		calculateItemsHeight: false,
	// 	});
	// }, []);
	return (
		<section>
			<div className="mx-auto px-2 py-12 sm:px-6 sm:py-12 lg:px-2 lg:py-16 bg-gradient-to-b from-[#ffffff] to-[#d3e7f0] ">
				<div className="flex flex-col items-center justify-center py-12">
					<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
					<h1 className="mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 bg-clip-text text-4xl font-bold text-transparent drop-shadow-md text-center">
						About Our Company
					</h1>
					<h2>Elix Solution Sdn. Bhd.</h2>
					<section>
						<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
							<div className="grid grid-cols-1 lg:h-[65vh] lg:grid-cols-2">
								<motion.div
									initial={{
										x: -100,
										transition: { duration: 0.8, type: "linear" },
									}}
									whileInView={{
										x: 0,
										transition: { duration: 0.8, type: "linear" },
									}}
									className="relative z-10 lg:py-16"
								>
									<div className="relative h-64 sm:h-80 lg:h-full shadow-2xl">
										<img
											alt=""
											src={"/about.jpg"}
											className="absolute inset-0 h-full w-full object-cover"
										/>
									</div>
								</motion.div>

								<motion.div
									initial={{
										x: 100,
										transition: { duration: 0.8, type: "linear" },
									}}
									whileInView={{
										x: 0,
										transition: { duration: 0.8, type: "linear" },
									}}
									className="relative flex items-center bg-gray-100 shadow-2xl"
								>
									<span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

									<div className="p-8 sm:p-16 lg:p-24">
										<h2 className="text-2xl font-bold sm:text-3xl">
											Elix Solution Sdn. Bhd.
										</h2>

										<p className="mt-4 text-gray-600 text-justify font-medium">
											Established in April 2008. Elix Solution provides a
											web-based system, mobile application system, cloud
											computing & hardware solutions for municipality (Pihak
											Berkuasa Tempatan). A registered member in Malaysia Smart
											Cities Alliance (MSCA) programs under Malaysia
											Industry-Goverment Group for High Technology (MiGHT) &
											Ministry of Science & Technology (MOSTI).
										</p>

										<a
											href="/contact"
											className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm shadow-lg font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
										>
											Get in Touch
										</a>
									</div>
								</motion.div>
							</div>
						</div>
					</section>
				</div>
				<div className="grid grid-cols-1 gap-y-12 lg:grid-cols-1 lg:items-center gap-5 mx-auto max-w-screen-2xl">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
						<motion.div
							initial={{ x: -200 }}
							animate={{ x: 0 }}
							transition={{ delay: 0, duration: 0.8, type: "linear" }}
							className="flex flex-col justify-center items-center rounded-xl border border-gray-200 p-12 bg-gray-50 shadow-xl"
						>
							<span className="inline-block rounded-lg bg-gray-50 p-3">
								<svg
									className="size-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
									<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									></path>
								</svg>
							</span>

							<h2 className="mt-2 text-lg font-bold">VISION</h2>

							<p className="sm:mt-1 sm:block sm:text-sm text-center sm:text-gray-700">
								To be a respected and recognized company that achieves a balance
								between expansion and responsibility. We are dedicated to
								offering long-term returns to shareholders, supporting our
								employees' growth, and enhancing their quality of life through
								competitive rewards and personal development opportunities.
							</p>
						</motion.div>

						<motion.div
							initial={{ x: 200 }}
							animate={{ x: 0 }}
							transition={{ delay: 0, duration: 0.8, type: "linear" }}
							className="flex flex-col justify-center items-center rounded-xl border border-gray-200 p-12 bg-gray-50 shadow-xl"
						>
							<span className="inline-block rounded-lg bg-gray-50 p-3">
								<svg
									className="size-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
									<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									></path>
								</svg>
							</span>

							<h2 className="mt-2 text-lg font-bold">MISSION</h2>

							<p className="sm:mt-1 sm:block sm:text-sm text-center sm:text-gray-700">
								ELIX aims to be the leading provider of ICT and related
								services, which deliver long term commercial benefits, based
								upon our client’s key business requirements. The strategies
								evolved should be economical, flexibility, scalability, and most
								importantly allows the organizations to respond rapidly to both
								market and clients’ need.
							</p>
						</motion.div>
					</div>
					{/* <LightGallery
						plugins={[lgZoom, lgVideo]}
						mode="lg-fade"
						pager={false}
						thumbnail={true}
						elementClassNames={"gallery"}
					>
						<a className="gallery__item" data-src="/Activity/Gallery-1.jpeg">
							<img src="/Activity/Gallery-1.jpeg" />
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-2.jpeg">
							<img
								src="/Activity/Gallery-2.jpeg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-3.jpeg">
							<img
								src="/Activity/Gallery-3.jpeg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-4.svg">
							<img
								src="/Activity/Gallery-4.svg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-5.svg">
							<img
								src="/Activity/Gallery-5.svg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-6.svg">
							<img
								src="/Activity/Gallery-6.svg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-7.svg">
							<img
								src="/Activity/Gallery-7.svg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-8.svg">
							<img
								src="/Activity/Gallery-8.svg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-9.svg">
							<img
								src="/Activity/Gallery-9.svg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
						<a className="gallery__item" data-src="/Activity/Gallery-10.svg">
							<img
								src="/Activity/Gallery-10.svg"
								className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</a>
					</LightGallery> */}
				</div>
			</div>
		</section>
	);
}

export default Detail;
