import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<footer className="bg-[url('/Footer.webp')] bg-cover bg-center bg-no-repeat text-white]">
			<div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<div className="flex justify-center text-teal-600 sm:justify-start">
							<Image
								src="/ELIX_logo_outlined.png"
								alt="logo"
								width={300}
								height={200}
								className="drop-shadow-lg drop-shadow-white"
							/>
						</div>

						<p className="mt-6 max-w-md text-center text-xl font-semibold leading-relaxed text-gray-100 sm:max-w-xs sm:text-left">
							Sales & Product Enquiry
						</p>
						<p className="max-w-md text-center font-light leading-relaxed text-gray-100 sm:max-w-xs sm:text-left">
							sales@elix.com.my
						</p>
						<p className="mt-6 max-w-md text-center text-xl font-semibold leading-relaxed text-gray-100 sm:max-w-xs sm:text-left">
							Product & Software Support
						</p>
						<p className="max-w-md text-center font-light leading-relaxed text-gray-100 sm:max-w-xs sm:text-left">
							support@elix.com.my
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
						<div className="text-center sm:text-left">
							<p className="text-lg font-medium text-gray-100">About Us</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-400 transition hover:text-blue-400/75"
										href="#"
									>
										Company Profile
									</a>
								</li>

								<li>
									<a
										className="text-gray-400 transition hover:text-blue-400/75"
										href="#"
									>
										Meet the Team
									</a>
								</li>

								<li>
									<a
										className="text-gray-400 transition hover:text-blue-400/75"
										href="#"
									>
										{" "}
										Careers{" "}
									</a>
								</li>
							</ul>
						</div>

						<div className="text-center sm:text-left">
							<p className="text-lg font-medium text-gray-100">Our Services</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="text-gray-400 transition hover:text-blue-400/75"
										href="#"
									>
										Data Staging Platform (DSP)
									</a>
								</li>

								<li>
									<a
										className="text-gray-400 transition hover:text-blue-400/75"
										href="#"
									>
										{" "}
										Integrated Enforcement System (SPKB){" "}
									</a>
								</li>

								<li>
									<a
										className="text-gray-400 transition hover:text-blue-400/75"
										href="#"
									>
										{" "}
										Integrated Command Centre (ICC){" "}
									</a>
								</li>
							</ul>
						</div>

						<div className="text-center sm:text-left">
							<p className="text-lg font-medium text-gray-100">Contact Us</p>

							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<a
										className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
										href="#"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="size-5 shrink-0 text-gray-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>

										<span className="flex-1 text-gray-400">
											elixsolution@gmail.com
										</span>
									</a>
								</li>

								<li>
									<a
										className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
										href="#"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="size-5 shrink-0 text-gray-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>

										<span className="flex-1 text-gray-400">
											03-8656 3595 / 03-9656 3596
										</span>
									</a>
								</li>

								<li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="size-5 shrink-0 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>

									<address className="-mt-0.5 flex-1 not-italic text-gray-400">
										Unit A-3A-11, Street Mall One South, Jalan OS, Taman Serdang
										Perdana, Seksyen 6, 43300 Seri Kembangan, Selangor, Malaysia
									</address>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-gray-100 pt-6">
					<div className="text-center sm:flex sm:justify-between sm:text-left">
						<p className="flex text-sm text-gray-500 gap-2">
							<span className="block sm:inline">All rights reserved.</span>

							<a
								className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
								href="#"
							>
								Terms & Conditions
							</a>

							<span>&middot;</span>

							<a
								className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
								href="#"
							>
								Privacy Policy
							</a>
						</p>

						<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
							Copyright &copy; 2024{" "}
							<span className="font-bold">Elix Solution Sdn. Bhd.</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
