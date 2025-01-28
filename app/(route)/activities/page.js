import React from "react";
import ScrollToTopButton from "@/app/_components/ScrollToTopButton";
import Activites from "./activities";
export const metadata = {
	title: "Our Activites - Elix Solution Sdn. Bhd.",
	description: "Activites Elix Solution",
};
function products() {
	return (
		<div className="overflow-x-hidden">
			<Activites />
			<ScrollToTopButton />
		</div>
	);
}

export default products;
