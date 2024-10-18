import React from "react";

const Ioc = () => {
	return (
		<section className="bg-CommandCentre">
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<h2 className="text-4xl font-bold sm:text-5xl text-center sm:text-left text-white">
						Integrated Operation Centre (SPKB-IOC)
					</h2>
					<hr className="mx-auto w-[60%] h-[2px] mt-4 mb-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
				</div>

				<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16">
					<section>
						<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
							<ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-5">
								<li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
									<div className="group relative block">
										<img
											src="/IOC/4.jpg"
											alt=""
											className="aspect-square w-full object-cover transition duration-200 hover:scale-105"
										/>
									</div>
								</li>
								<li>
									<div className="group relative block">
										<img
											src="/SPKB-ICC_logo.jpg"
											alt=""
											className="aspect-square w-full object-cover transition duration-200 hover:scale-105"
										/>
									</div>
								</li>

								<li>
									<div className="group relative block">
										<img
											src="/IOC/1.jpg"
											alt=""
											className="aspect-square w-full object-cover transition duration-200 hover:scale-105"
										/>
									</div>
								</li>

								<li className="lg:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1">
									<div className="group relative block">
										<img
											src="/IOC/2.jpg"
											alt=""
											className="aspect-square w-full object-cover transition duration-200 hover:scale-105"
										/>
									</div>
								</li>
							</ul>
						</div>
					</section>

					<div className=" bg-white/40 p-6 backdrop-blur-md mx-auto max-w-screen-xl text-lg">
						<article className="space-y-12 text-gray-200 border border-gray-100 p-20">
							<ol className="list-inside list-disc grid grid-cols-1 sm:grid-cols-3 gap-12">
								<li className="max-w-screen-sm">
									<strong>Centralized Data Sharing & Analytics</strong>
									<p>
										The IOC should act as a single point of access for all
										departments and agencies involved in enforcement, licensing,
										public complaints, and legal matters within the local
										council. This will ensure:
									</p>
								</li>

								<li>
									<strong>Enhanced Security & Compliance</strong>
									<p>
										Security is paramount in managing sensitive legal and public
										data. The IOC should prioritize:
									</p>
								</li>

								<li>
									<strong>Public Complaints & Engagement System</strong>
									<p>
										The operation center will act as the hub for receiving,
										categorizing, and responding to public complaints and
										queries, facilitating:
									</p>
								</li>
							</ol>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Ioc;
