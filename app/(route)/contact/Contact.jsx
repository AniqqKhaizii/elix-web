import React from "react";
import Map from "./Map";

function Contact() {
	return (
		<section className="bg-gray-100 mt-[9vh]">
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
					<div className="lg:col-span-2 lg:py-20">
						<p className="max-w-xl text-4xl font-bold text-zinc-700">
							Contact Us
						</p>

						<div className="flex flex-col mt-8 gap-4">
							<p
								href="#"
								className="flex flex-row gap-4 text-2xl font-bold text-pink-600"
							>
								{" "}
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
								03-8656 3595 / 03-9656 3596{" "}
							</p>

							<address className="flex flex-row gap-4 mt-2 not-italic">
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
								Unit A-3A-11, Street Mall One South, Jalan OS, Taman Serdang
								Perdana, Seksyen 6, 43300 Seri Kembangan, Selangor, Malaysia
							</address>

							<address className="flex flex-row gap-4 mt-2 italic">
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
								enquiry@elix.com.my
							</address>
						</div>
					</div>

					<div className="rounded-lg bg-white shadow-lg lg:col-span-3 ">
						<Map />
						{/* <form action="#" className="space-y-4">
							<div>
								<label className="sr-only" htmlFor="name">
									Name
								</label>
								<input
									className="w-full rounded-lg border border-gray-500 shadow-sm p-3 text-sm"
									placeholder="Name"
									type="text"
									id="name"
								/>
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label className="sr-only" htmlFor="email">
										Email
									</label>
									<input
										className="w-full rounded-lg border border-gray-500 shadow-sm p-3 text-sm"
										placeholder="Email address"
										type="email"
										id="email"
									/>
								</div>

								<div>
									<label className="sr-only" htmlFor="phone">
										Phone
									</label>
									<input
										className="w-full rounded-lg border border-gray-500 shadow-sm p-3 text-sm"
										placeholder="Phone Number"
										type="tel"
										id="phone"
									/>
								</div>
							</div>

							<div>
								<label className="sr-only" htmlFor="message">
									Message
								</label>

								<textarea
									className="w-full rounded-lg border border-gray-500 shadow-sm p-3 text-sm"
									placeholder="Message"
									rows="8"
									id="message"
								></textarea>
							</div>

							<div className="mt-4">
								<button
									type="submit"
									className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
								>
									Send Enquiry
								</button>
							</div>
						</form> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
