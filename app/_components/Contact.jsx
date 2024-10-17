import React from "react";

function Contact() {
	return (
		<section className="bg-gradient-to-b from-[#d3e7f0] to-[#ffffff]">
			<div className="flex flex-col justify-center items-center p-8 md:p-12 lg:px-16 lg:py-24">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
						Any Enquiry ?
					</h2>

					<p className="hidden text-gray-500 sm:mt-4 sm:block">
						If you have any enquiries or need further information regarding our
						enforcement system solutions, please feel free to reach out to us.
						We are here to assist you and provide the support you need.
					</p>
				</div>

				<div className="flex justify-center items-centermx-auto mt-8 max-w-xl">
					<a href="/contact">
						<button
							type="submit"
							className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
						>
							<span className="text-sm font-medium"> Contact Us </span>
						</button>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
