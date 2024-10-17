import React from "react";
import * as motion from "framer-motion/client";
const Team = () => {
	return (
		<section className="py-12 dark:bg-dark lg:pb-20 ">
			<div className="container mx-auto">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center">
							<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
							<span className="mt-2 mb-2 block text-lg font-semibold text-primary">
								Leadership Team
							</span>
							<h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"></h2>
						</div>
					</div>
				</div>

				<div className="-mx-4 flex flex-wrap justify-center">
					<TeamCard
						name="Amsyar Mohamad"
						profession="Director"
						detail="Experienced in the field of back-end apps programming for more than 15 years. His job is to develop / maintain SPKB's web apps functionality and his involvement in the management of the company's operations."
						imageSrc="/person.jpg"
						variants="variants1"
					/>
					<TeamCard
						name="Ahmad Muhsin Mubarak"
						profession="Chief Strategy Officer (CSO)"
						detail="Experienced in the field of programming, technical & marketing for more than 15 years. Responsible for creating a company’s vision, communicating the plan with all those involved, executing the business initiatives and sustaining implementation efforts. "
						imageSrc="/person.jpg"
						variants="variants2"
					/>
					<TeamCard
						name="Eisen Tan"
						profession="Chief Technical Officer (CTO)"
						detail="Experienced in the field of back-end and front-end apps programming for more than 20 years. The highest technology executive position in the company that leads the technology or engineering department. "
						imageSrc="/person.jpg"
						variants="variants3"
					/>
					{/* <TeamCard
						name="Afify Mirza"
						profession="Mobile App Developer"
						imageSrc="/person.jpg"
					/>
					<TeamCard
						name="Aniq Khaizi"
						profession="Software Developer"
						imageSrc="/Team5.jpeg"
					/>
					<TeamCard
						name="Afiqah Khosni"
						profession="Software Developer"
						imageSrc="/person.jpg"
					/>
					<TeamCard
						name="Aishah Zaini"
						profession="Software Developer"
						imageSrc="/person.jpg"
					/>
					<TeamCard
						name="Imran"
						profession="Mobile App Developer (Internship)"
						imageSrc="/person.jpg"
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Team;

const TeamCard = ({ imageSrc, name, profession, detail, variants }) => {
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
				className="w-full px-4 md:w-1/2 xl:w-1/4"
			>
				<div className="mx-auto mb-10 w-full h-full border border-gray-300">
					<img src={imageSrc} alt="" className="w-full" />
					<div className="relative -mt-10 mx-10 overflow-hidden rounded-lg bg-white dark:bg-dark-2 text-center">
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
