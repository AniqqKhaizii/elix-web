"use client";
import React, { Component } from "react";
import * as motion from "framer-motion/client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Activities = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: "snap",
		centered: true,
		slides: { perView: 3, spacing: 15 },
		breakpoints: {
			"(min-width: 400px)": {
				loop: false,
				vertical: true,
			},
			"(min-width: 1024px)": {
				slides: { perView: 3, spacing: 20 },
			},
		},
	});

	const activities = [
		{
			videoSrc: "/Activity/Activity1.png",
			name: "Latihan Pemantapan Pengguna SPKB",
			description:
				"Pihak Elix Solution Sdn. Bhd. menyelenggarakan latihan pemantapan penggunaan Sistem Penguatkuasaan Bersepadu (SPKB) di Majlis Perbandaran Kuala Selangor (MPKS).",
			className:
				"sm:w-full w-2/3 sm:h-[40vh] h-[35vh] object-cover rounded-lg shadow-md",
		},
		{
			videoSrc: "/Activity/Activity2.png",
			name: "Kursus Pengukuhan Penguatkuasaan",
			description:
				"Pihak Elix Solution Sdn. Bhd. menyelenggarakan kursus pengukuhan penguatkuasaan bagi Tindakan Penguatkuasaan & Pendakwaan Majlis Perbandaran Hulu Selangor (MPHS).",
			className:
				"sm:w-full w-2/3 sm:h-[40vh] h-[35vh] object-cover rounded-lg shadow-md",
		},
		{
			videoSrc: "/Activity/Activity3.jpg",
			name: "Demonstrasi Penggunaan Drone DJI Enterprise",
			description:
				"Pihak Elix Solution Sdn. Bhd. menganjurkan sesi demonstrasi penggunaan Drone DJI Enterprise bagi tujuan Penguatkuasaan kepada Pejabat Tanah & Galian Selangor yang disokong oleh dengan rakan strategik Aonic.",
			className:
				"sm:w-full w-2/3 sm:h-[40vh] h-[35vh] object-cover rounded-lg shadow-md",
		},
	];
	return (
		<section>
			<div className="mx-auto px-2 py-12 sm:px-6 sm:py-24 lg:px-2 lg:py-16 bg-gradient-to-t from-[#EFEFEF] to-[#d3e7f0]">
				<div className="flex flex-col items-center justify-center py-24">
					<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
					<h1 className="mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 bg-clip-text text-4xl font-bold text-transparent drop-shadow-md text-center">
						Our Activities & Updates
					</h1>
					<section>
						<div className="sm:mx-auto max-w-screen-xl py-8 bg-transparent sm:px-2 mx-2">
							<div ref={sliderRef} className="keen-slider">
								{activities.map((activity, index) => (
									<div
										key={index}
										className="keen-slider__slide flex flex-col items-center justify-center gap-4 shadow-xl p-6"
									>
										{activity.videoSrc.endsWith(".mp4") ? (
											<video
												src={activity.videoSrc}
												className={activity.className}
												autoPlay
												loop
												muted
											></video>
										) : (
											<img
												src={activity.videoSrc}
												className={activity.className}
												alt={activity.name}
											/>
										)}
										<h3 className="text-center text-xl font-semibold text-gray-800">
											{activity.name}
										</h3>
										<p className="text-sm text-gray-600 text-center">
											{activity.description}
										</p>
										{/* <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
											Read More
										</button> */}
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Activities;
