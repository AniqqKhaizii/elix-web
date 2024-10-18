import React from "react";
import * as motion from "framer-motion/client";
import { delay } from "framer-motion";
const Team = () => {
	return (
		<section className="py-12 flex flex-col gap-20 dark:bg-dark lg:pb-20 bg-[url('/TeamBg.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
			<div className="container mx-auto max-w-screen-4xl">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center">
							<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
							<span className="mt-2 mb-2 block text-xl font-semibold text-primary">
								Leadership Team
							</span>
							<h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"></h2>
						</div>
					</div>
				</div>

				<div className="-mx-2 flex flex-wrap justify-center">
					<LeaderCard
						name="Amsyar Mohamad"
						profession="Chief Executive Officer (CEO) / Director"
						detail="Experienced in the field of back-end apps development for more than 15 years. His job is to develop / maintain web apps functionality and his involvement in the management of the company's operations."
						imageSrc="/person.jpg"
						variants="variants1"
					/>
					<LeaderCard
						name="Ahmad Muhsin Mubarak"
						profession="Chief Strategy Officer (CSO)"
						detail="Experienced in the field of programming, technical & marketing for more than 15 years. Responsible for creating a company’s vision, communicating the plan with all those involved, executing the business initiatives and sustaining implementation efforts. "
						imageSrc="/person.jpg"
						variants="variants2"
					/>
					<LeaderCard
						name="Eisen Tan"
						profession="Chief Technical Officer (CTO)"
						detail="Experienced in the field of back-end and front-end apps development for more than 20 years. The highest technology executive position in the company that leads the technology or engineering department. "
						imageSrc="/person.jpg"
						variants="variants3"
					/>
				</div>
			</div>

			<div className="container mx-auto">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center">
							<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
							<span className="mt-2 mb-2 block text-xl font-semibold text-primary">
								Technical Team
							</span>
							<h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"></h2>
						</div>
					</div>
				</div>

				<div className="-mx-4 flex flex-wrap justify-center gap-4">
					<TeamCard
						name="Afify Mirza"
						profession="Mobile App Developer"
						imageSrc="/person.jpg"
						variants="variants1"
					/>
					<TeamCard
						name="Aniq Khaizi"
						profession="Software Developer"
						imageSrc="/person.jpg"
						variants="variants2"
					/>
					<TeamCard
						name="Afiqah Khosni"
						profession="Software Developer"
						imageSrc="/person.jpg"
						variants="variants3"
					/>
					<TeamCard
						name="Aishah Zaini"
						profession="Software Developer"
						imageSrc="/person.jpg"
						variants="variants4"
					/>
					<TeamCard
						name="Imran"
						profession="Mobile App Developer"
						imageSrc="/person.jpg"
						variants="variants5"
					/>
				</div>
			</div>

			<div className="container mx-auto">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center">
							<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
							<span className="mt-2 mb-2 block text-xl font-semibold text-primary">
								Advisory Board
							</span>
							<h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"></h2>
						</div>
					</div>
				</div>

				<div className="-mx-4 flex flex-wrap justify-center gap-4">
					<div className="-mx-4 flex flex-wrap justify-center gap-4">
						<TeamCard
							name="Ts. Dr. Raslan Ahmad"
							profession="Advisory Chairman"
							imageSrc="/person.jpg"
							variants="variants1"
						/>
					</div>
					<TeamCard
						name="Assoc. Prof Dr. Zuraida Abal Abas"
						profession="Data Analytics Advisor"
						imageSrc="/person.jpg"
						variants="variants2"
					/>
					<TeamCard
						name="Prof. Madya Dr. Azhari Samsu Baharuddin"
						profession="Data Analytics Advisor (Artificial Intelligence)"
						imageSrc="/person.jpg"
						variants="variants3"
					/>
					<TeamCard
						name="Tuan Hj. Badrul Azmi Amran"
						profession="Business Development Advisor"
						imageSrc="/person.jpg"
						variants="variants4"
					/>
				</div>
			</div>
		</section>
	);
};

export default Team;

const LeaderCard = ({ imageSrc, name, profession, detail, variants }) => {
	const variantsMap = {
		variants1: {
			offscreen: {
				x: -200,
				transition: {
					type: "linear",
					duration: 0.8,
				},
			},
			onscreen: {
				x: 0,
				transition: {
					type: "linear",
					duration: 0.8,
				},
			},
		},
		variants2: {
			offscreen: {
				y: 200,
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
		},
		variants3: {
			offscreen: {
				x: 200,
				transition: {
					type: "linear",
					duration: 0.8,
				},
			},
			onscreen: {
				x: 0,
				transition: {
					type: "linear",
					duration: 0.8,
				},
			},
		},
	};

	return (
		<>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				variants={variantsMap[variants]}
				className="w-full px-4 md:w-1/2 xl:w-1/3"
			>
				<div className="mx-auto mb-10 w-full h-full border border-gray-300 bg-white">
					<img src={imageSrc} alt="" className="w-full" />
					<div className="relative -mt-10 mx-10 overflow-hidden dark:bg-dark-2 text-center">
						<h3 className="text-xl font-semibold text-dark dark:text-white">
							{name}
						</h3>
						<p className="text-md text-body-color dark:text-dark-6">
							{profession}
						</p>
						<hr className="w-[95%] h-[2px] mx-auto bg-gray-300 rounded-full my-2" />
						<p className="mx-auto text-center text-sm text-body-color max-w-sm">
							{detail}
						</p>
					</div>
				</div>
			</motion.div>
		</>
	);
};

const TeamCard = ({ imageSrc, name, profession, detail, variants }) => {
	const variantsMap = {
		variants1: {
			offscreen: {
				y: 100,
				transition: {
					type: "linear",
					duration: 0.3,
				},
			},
			onscreen: {
				y: 0,
				transition: {
					delay: 0,
					type: "linear",
					duration: 0.3,
				},
			},
		},
		variants2: {
			offscreen: {
				y: 100,
				transition: {
					type: "linear",
					duration: 0.3,
				},
			},
			onscreen: {
				y: 0,
				transition: {
					delay: 0.1,
					type: "linear",
					duration: 0.3,
				},
			},
		},
		variants3: {
			offscreen: {
				y: 200,
				transition: {
					type: "linear",
					duration: 0.3,
				},
			},
			onscreen: {
				y: 0,
				transition: {
					delay: 0.2,
					type: "linear",
					duration: 0.3,
				},
			},
		},
		variants4: {
			offscreen: {
				y: 100,
				transition: {
					type: "linear",
					duration: 0.3,
				},
			},
			onscreen: {
				y: 0,
				transition: {
					delay: 0.3,
					type: "linear",
					duration: 0.3,
				},
			},
		},
		variants5: {
			offscreen: {
				y: 100,
				transition: {
					type: "linear",
					duration: 0.3,
				},
			},
			onscreen: {
				y: 0,
				transition: {
					delay: 0.4,
					type: "linear",
					duration: 0.3,
				},
			},
		},
	};

	return (
		<>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				variants={variantsMap[variants]}
				className="w-full px-4 md:w-1/2 xl:w-1/4"
			>
				<div className="mx-auto mb-10 w-full h-full border border-gray-300 bg-white">
					<img src={imageSrc} alt="" className="w-full" />
					<div className="relative mt-5 mx-10 overflow-hidden rounded-lg bg-white dark:bg-dark-2 text-center">
						<h3 className="text-xl font-semibold text-dark dark:text-white">
							{name}
						</h3>
						<p className="text-md text-body-color dark:text-dark-6">
							{profession}
						</p>
						<hr className="w-[80%] h-[2px] mx-auto bg-blue-600 rounded-full my-2" />
						<p className="text-sm text-body-color dark:text-dark-6">{detail}</p>
					</div>
				</div>
			</motion.div>
		</>
	);
};
