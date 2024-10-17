import React from "react";

const Certificate = () => {
	return (
		<section className="bg-[url('/background.webp')] bg-cover bg-no-repeat text-white py-10 px-10">
			<div className="container mx-auto">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-4xl text-center">
							<hr className="w-16 h-1 mx-auto bg-blue-600 rounded-full" />
							<h2 className="mt-4 mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
								Recognition & Certification
							</h2>
							<p className="max-w-4xl text-base text-body-color dark:text-dark-6">
								Rely on our 16 years of expertise and achievements. With a
								proven track record spanning over eight years and a collection
								of prestigious awards and recognitions, we are committed to
								delivering exceptional quality and service every step of the
								way.
							</p>
						</div>
					</div>
				</div>

				<div className="-mx-4 flex flex-wrap justify-center">
					<TeamCard name="Cert2" imageSrc="/Certificate/Cert2.png" />
					<TeamCard name="Cert3" imageSrc="/Certificate/Cert3.png" />
					<TeamCard name="Cert4" imageSrc="/Certificate/Cert4.png" />
					{/* <TeamCard name="Cert5" imageSrc="/Certificate/Cert5.png" /> */}
				</div>
			</div>
		</section>
	);
};

export default Certificate;

const TeamCard = ({ imageSrc, name }) => {
	return (
		<>
			<div className="w-full px-4 md:w-1/2 xl:w-1/4">
				<div className="mx-auto mb-10 w-full max-w-[400px]">
					<div className="relative overflow-hidden">
						<img src={imageSrc} alt="" className="w-full h-[500px]" />
					</div>
				</div>
			</div>
		</>
	);
};
