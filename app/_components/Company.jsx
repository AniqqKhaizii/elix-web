import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";
function Company() {
	const cardVariants = {
		offscreen: {
			y: 50,
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
		<div className="relative">
			<div className="sticky top-0 h-[100vh] flex flex-col items-center justify-center bg-white py-12">
				<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
				<h1 className="mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 bg-clip-text text-4xl font-bold text-transparent drop-shadow-md text-center">
					Enforcement System Solution
				</h1>
				<h2>Integrated System for Local Council for Enforcement Operations.</h2>
				<section>
					<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
						<img src="/Solution.png" height={"200%"} width={"200%"} alt="" />
					</div>
				</section>
			</div>
			<div className="sticky top-0 sm:mt-0 h-[75vh] sm:h-[50vh] flex flex-col items-center justify-center bg-partner bg-[url('/background.webp')] bg-fixed bg-cover bg-no-repeat text-white">
				<section className=" text-gray-900">
					<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							variants={cardVariants}
							className="mx-auto max-w-lg text-center"
						>
							<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
							<h2 className="mt-4 text-3xl font-semibold sm:text-4xl text-white">
								Our Strategic Partner
							</h2>
						</motion.div>

						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							variants={cardVariants}
							className="mt-8 flex flex-col gap-12 md:flex-row lg:flex-row justify-center items-center bg-white/20 backdrop-blur-md p-8 rounded-3xl"
						>
							<img
								src="https://www.israk.my/wp-content/uploads/logo_israk.png"
								alt="israk"
								width={150}
								height={150}
							/>
							<img
								src="https://www.omsecurity.kr/assets/logo.png"
								alt="oms"
								width={100}
								height={100}
							/>
							<img src="/MPHS.png" alt="mphs" width={100} height={100} />
						</motion.div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Company;
