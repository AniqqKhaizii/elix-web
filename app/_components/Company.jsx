import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";
function Company() {
	const cardVariants = {
		offscreen: {
			scale: 0.5,
			transition: {
				type: "linear",
				duration: 0.8,
			},
		},
		onscreen: {
			scale: 1,
			transition: {
				type: "linear",
				duration: 0.8,
			},
		},
	};
	return (
		<div className="relative overflow-hidden">
			<div className="sticky top-0 sm:h-[100vh] h-auto flex flex-col items-center justify-center bg-partner py-12">
				<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
				<h1 className="mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-5xl font-bold text-transparent drop-shadow-md text-center">
					Enforcement System Solution
				</h1>
				<h2 className="text-center text-white">
					Integrated System for Local Council for Enforcement Operations.
				</h2>
				<section>
					<motion.div
						initial={{
							y: 200,
							transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
						}}
						whileInView={{
							y: 0,
							transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
						}}
						className="col-span-1 mt-12 relative lg:w-[70vw] md:w-[90vw] w-[90vw] lg:h-[70vh] overflow-hidden shadow-xl"
					>
						<div
							className="relative w-full h-full"
							style={{ paddingTop: "56.25%" }}
						>
							<iframe
								src="https://www.youtube.com/embed/KuueSUTBcbM?autoplay=1&showinfo=0&loop=1&mute=1&list=PLmpB1Z-kgo7DK4TcVhbybMtxVg-FiJxF7&rel=0"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="absolute top-0 left-0 w-full h-full"
							></iframe>
						</div>
					</motion.div>
				</section>
			</div>
			<div className="sticky top-0 sm:mt-0 h-full sm:h-[80vh] flex flex-col items-center justify-center  text-gray-900">
				<section className="text-gray-900">
					<div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							variants={cardVariants}
							className="mx-auto max-w-lg text-center"
						>
							<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
							<h2 className="mt-4 text-3xl font-semibold sm:text-5xl text-gray-900">
								Our Strategic Partner
							</h2>
						</motion.div>
						<div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-2 mt-2">
							<motion.div
								initial="offscreen"
								whileInView="onscreen"
								variants={cardVariants}
								className="mx-auto col-span-4 mt-2 flex flex-col gap-12 md:flex-row lg:flex-row justify-center items-center p-2 rounded-xl"
							>
								<img
									src="https://malaysiasca.org/wp-content/uploads/2022/08/MSCA-Logo-Ori-100px.png"
									alt="oms"
									width={125}
									height={125}
								/>
								<img
									src="https://www.israk.my/wp-content/uploads/logo_israk.png"
									alt="israk"
									width={150}
									height={150}
								/>

								<img src="/MPHS.png" alt="mphs" width={100} height={100} />
								<img
									src="https://www.tmone.com.my/wp-content/uploads/2023/12/TM-One_Logo@2x.png"
									alt="TMOne"
									width={125}
									height={125}
								/>
								<img
									src="https://ledvision.com.my/wp-content/uploads/2017/04/logo.png"
									alt="LEDVision"
									width={150}
									height={150}
								/>
								<img
									src="https://www.datashift.my/assets/images/datashift-final-2.png"
									alt="Datashift"
									width={150}
									height={150}
								/>
								<img
									src="/Partners/CyberSolution.png"
									alt="CyberSolution"
									width={200}
									height={200}
								/>
							</motion.div>
							<hr className="col-span-4 sm:hidden w-[50%] h-[2px] mx-auto bg-gradient-to-r from-transparent via-gray-900 to-transparent rounded-full" />
							<hr className="sm:block hidden w-[120%] h-[2px] mt-0 mb-5 sm:-mt-5 mx-auto bg-gradient-to-l from-gray-900 to-transparent rounded-full" />
							<h2 className="col-span-4 sm:col-span-2 -mt-10 text-center text-2xl font-semibold">
								Regional Partner
							</h2>
							<hr className="sm:block hidden -ml-10 w-[120%] h-[2px] -mt-5 mx-auto bg-gradient-to-r from-gray-900 to-transparent rounded-full" />

							<motion.div
								initial="offscreen"
								whileInView="onscreen"
								variants={cardVariants}
								className="col-span-4 mx-auto mt-8 flex flex-col gap-12 md:flex-row lg:flex-row justify-center items-center backdrop-blur-md p-8 rounded-xl"
							>
								<img
									src="https://www.omsecurity.kr/assets/logo.png"
									alt="oms"
									width={100}
									height={100}
								/>
								<img
									src="/Secureware.png"
									alt="mphs"
									width={150}
									height={150}
								/>
							</motion.div>
							<hr className="col-span-4 w-[30%] h-[2px] mx-auto bg-gradient-to-r from-transparent via-gray-900 to-transparent rounded-full" />
							<h2 className="col-span-4 text-center text-2xl font-semibold">
								International Partner
							</h2>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Company;
