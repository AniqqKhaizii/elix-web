import React from "react";
import * as motion from "framer-motion/client";
function Products() {
	return (
		<section className="bg-gray-100">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
				<motion.header
					initial={{ y: 200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
					className="text-center"
				>
					<h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
						Our Products
					</h2>

					<p className="mx-auto mt-4 max-w-3xl text-gray-500">
						These are the products that we offered and be used along with the
						system to accomplish full system operation. These products will be
						included into a packages all in with the systems. Thus, they will
						not be for sales but for rental.
					</p>
				</motion.header>

				<ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
					<motion.li
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
						className="bg-white border border-gray-300 shadow-md"
					>
						<a href="#" className="group relative block">
							<img
								src="https://honeywell.scene7.com/is/image/Honeywell65/sps-ppr-eda57-additional-angle-left-13"
								alt=""
								className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
							/>
							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-md font-medium text-white">
										Honeywell EDA57
									</h3>
								</div>
							</div>
						</a>
					</motion.li>
					<motion.li
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.2,
							duration: 0.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="bg-white border border-gray-300 shadow-md"
					>
						<a href="#" className="group relative block">
							<img
								src="/Products/PM90ID.png"
								alt=""
								className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
							/>
							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-md font-medium text-white">PM90 ID</h3>
								</div>
							</div>
						</a>
					</motion.li>
					<motion.li
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.4,
							duration: 0.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="bg-white border border-gray-300 shadow-md"
					>
						<a href="#" className="group relative block">
							<img
								src="https://woosimsystems.com/staging/9580/wp-content/uploads/2021/06/WSP-i450..png"
								alt=""
								className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
							/>

							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-md font-medium text-white">
										Woosim WSP-i450
									</h3>
								</div>
							</div>
						</a>
					</motion.li>
					<motion.li
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.6,
							duration: 0.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="bg-white border border-gray-300 shadow-md"
					>
						<a href="#" className="group relative block">
							<img
								src="https://woosimsystems.com/staging/9580/wp-content/uploads/2021/06/Porti-W40.png"
								alt=""
								className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
							/>

							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-md font-medium text-white">
										Woosim Porti-W40
									</h3>
								</div>
							</div>
						</a>
					</motion.li>
					<motion.li
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.8,
							duration: 0.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="bg-white border border-gray-300 shadow-md"
					>
						<a href="#" className="group relative block">
							<img
								src="https://www.motorolasolutions.com/content/dam/msi/Products/two-way-radios/vb-400-front.png"
								alt=""
								className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
							/>

							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-md font-medium text-white">
										Motorola VB-400 Body Camera
									</h3>
								</div>
							</div>
						</a>
					</motion.li>

					<motion.li
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 1, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
						className="bg-white border border-gray-300 shadow-md"
					>
						<a href="#" className="group relative block">
							<img
								src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/5/28/f25a3aeb-4f5d-4561-b3e7-24b8c2585d06.png"
								alt=""
								className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
							/>
							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-md font-medium text-white">
										DJI Mavic 3 Enterprise
									</h3>
								</div>
							</div>
						</a>
					</motion.li>
				</ul>

				<div className="bg-white mt-10 relative flex flex-row overflow-x-hidden shadow-md">
					<div className="sm:mx-auto py-10 whitespace-nowrap grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-items-center">
						<img
							src="https://pointmobile.com/assets/images/image--footer_logo.png"
							alt="Pointmobile"
							className="sm:mx-auto h-auto w-auto"
						/>
						<img
							src="https://www.honeywell.com/content/dam/honeywellbt/en/images/logos/HON%20logo_200x37%202.png"
							alt="Honeywell"
							className="sm:mx-auto h-auto w-auto"
						/>
						<img
							src="https://woosimsystems.com/wp-content/uploads/2021/05/Woosim-logo.gif"
							alt="Woosim"
							className="sm:mx-auto  h-auto w-auto"
						/>
						<img
							src="https://logowik.com/content/uploads/images/motorola-new7974.jpg"
							alt="Motorola"
							className="sm:mx-auto h-auto sm:w-auto w-[50%]"
						/>
						<img
							src="https://www-cdn.djiits.com/dps/ff086756c6f7151c92080074044f7ac3.svg"
							alt="DJI"
							className="sm:mx-auto h-auto w-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Products;
