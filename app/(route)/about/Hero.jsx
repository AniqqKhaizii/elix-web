import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { FaCertificate } from "react-icons/fa6";
function Hero() {
	return (
		<section className="relative h-[60vh] bg-[url('/abouthero.jpg')] bg-cover bg-center bg-no-repeat z-1">
			<div className="absolute inset-0 bg-gray-900/75  sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l z-2"></div>

			<div className="relative mx-auto max-w-screen-xl py-32 sm:px-6 lg:flex lg:h-[70vh] lg:items-center lg:px-8">
				<div className="mx-auto max-w-5xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h1 className="text-3xl font-regular text-white sm:text-4xl">
						Technology is best when it brings people together
					</h1>

					<p className="mx-auto mt-4 max-w-6xl font-light text-white sm:text-lg/relaxed">
						Established in April 2008. Elix Solution provides a web-based
						system, mobile application system, cloud computing & hardware
						solutions for municipality (Pihak Berkuasa Tempatan). A registered
						member in Malaysia Smart Cities Alliance (MSCA) programs under
						Malaysia Industry-Goverment Group for High Technology (MiGHT) &
						Ministry of Science & Technology (MOSTI).
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
						<a
							href="#"
							className="flex flex-row justify-center items-center gap-2 w-full rounded bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
						>
							<span className="text-2xl">
								<AiOutlineProfile />
							</span>
							Company Profile
						</a>

						<a
							href="#"
							className="flex flex-row justify-center items-center gap-2 w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
						>
							<span className="text-2xl">
								<FaCertificate />
							</span>
							ISO 9001 Certificate
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
