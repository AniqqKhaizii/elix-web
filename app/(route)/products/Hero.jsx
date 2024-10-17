import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { FaCertificate } from "react-icons/fa6";
function Hero() {
	return (
		<section className="relative h-[60vh] bg-[url('/abouthero.jpg')] bg-cover bg-center bg-no-repeat bg-fixed z-1">
			<div className="absolute inset-0 bg-gray-900/75  sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l z-2"></div>

			<div className="relative mx-auto max-w-screen-xl py-32 sm:px-6 lg:flex lg:h-[70vh] lg:items-center lg:px-8">
				<div className="mx-auto max-w-5xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h1 className="text-3xl font-regular text-white sm:text-4xl">
						The Future of Enforcement Technology
					</h1>

					<p className="mx-auto mt-4 max-w-6xl font-light text-white sm:text-lg/relaxed">
						Welcome to Elix Solution, Malaysia's trusted name in enforcement
						technology. Explore our advanced systems designed for municipal
						enforcement, asset management, and regulatory compliance. From
						streamlined evidence tracking to automated enforcement solutions, we
						provide seamless, integrated platforms that enhance operational
						efficiency.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Hero;
