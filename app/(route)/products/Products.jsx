import React from "react";
import * as motion from "framer-motion/client";
function Products() {
	return (
		<section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
				<motion.header
					initial={{ y: 200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
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

				<ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
					<motion.li
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
					>
						<a href="#" className="group relative block">
							<img
								src="https://www.motorolasolutions.com/content/dam/msi/Products/two-way-radios/vb-400-front.png"
								alt=""
								className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
							/>

							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-xl font-medium text-white">
										Motorola Body Worn Camera
									</h3>
								</div>
							</div>
						</a>
					</motion.li>

					<motion.li
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
					>
						<a href="#" className="group relative block">
							<img
								src="https://woosimsystems.com/staging/9580/wp-content/uploads/2021/06/WSP-i450..png"
								alt=""
								className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
							/>

							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-xl font-medium text-white">
										Woosim WSP-i450
									</h3>
								</div>
							</div>
						</a>
					</motion.li>

					<motion.li
						initial={{ x: 200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
						className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
					>
						<a href="#" className="group relative block">
							<img
								src="https://honeywell.scene7.com/is/image/Honeywell65/sps-ppr-eda57-additional-angle-left-13"
								alt=""
								className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
							/>
							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-xl font-medium text-white">
										Honeywell EDA57
									</h3>
								</div>
							</div>
						</a>
					</motion.li>
					<motion.li
						initial={{ x: 200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
						className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1"
					>
						<a href="#" className="group relative block">
							<img
								src="https://www.lacameraembarquee.fr/71387-large_default/dji-mavic-3e-enterprise-c2.jpg"
								alt=""
								className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
							/>
							<div className="absolute inset-0 flex flex-col items-start justify-end p-6">
								<div className="bg-black/50 px-6 py-3">
									<h3 className="text-xl font-medium text-white">
										DJI Mavic 3 Enterprise
									</h3>
								</div>
							</div>
						</a>
					</motion.li>
				</ul>
			</div>
		</section>
	);
}

export default Products;
