"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function Header() {
	const [sticky, setSticky] = useState(false);
	const [isHomePage, setIsHomePage] = useState(true);
	const [location, setLocation] = useState({});
	useEffect(() => {
		setLocation(window.location.pathname);
		window.location.pathname === "/"
			? setIsHomePage(true)
			: setIsHomePage(false);
		const handleScroll = () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const Menu = [
		{
			id: 1,
			name: "HOME",
			path: "/",
		},
		{
			id: 2,
			name: "ABOUT US",
			path: "/about",
		},
		{
			id: 3,
			name: "SOLUTIONS",
			path: "/solutions",
		},
		{
			id: 4,
			name: "PRODUCTS",
			path: "/products",
		},
		{
			id: 5,
			name: "ACTIVITES",
			path: "/activities",
		},
		{
			id: 6,
			name: "CONTACT US",
			path: "/contact",
		},
	];

	const openNavbar = () => {
		document.getElementById("menu").classList.toggle("hidden");
	};

	return (
		<div
			className={`fixed z-50 top-0 lg:w-full sm:w-full lg:px-52 md:px-20 shadow-sm transition-all ease-in-out duration-300 ${
				sticky || !isHomePage
					? "bg-white shadow-lg py-3 text-gray-900"
					: "bg-transparent shadow-lg py-3 text-gray-900"
			}`}
		>
			<div className="flex justify-between lg:w-full items-center w-screen px-4">
				<Image src="/ELIX_Logo.webp" alt="ELIX Logo" width={150} height={150} />
				<ul className="md:flex md:flex-row lg:flex lg:flex-row gap-8 flex-col hidden font-semibold">
					{Menu.map((item, index) => {
						const isActive = location === item.path;

						return (
							<a href={item.path} key={index}>
								<li
									className={`hover:text-gray-900 hover:scale-105 transition-all ease-in-out cursor-pointer drop-shadow-lg ${
										isActive ? "border-b-4 border-blue-500" : ""
									}`}
								>
									{item.name}
								</li>
							</a>
						);
					})}
				</ul>
				<button
					onClick={() => openNavbar()}
					className="relative group flex px-4 lg:hidden"
				>
					<div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-blue-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
						<div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
							<div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
							<div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
							<div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

							<div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
								<div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
								<div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
							</div>
						</div>
					</div>
				</button>
			</div>
			<ul
				className="space-y-1 hidden w-screen mt-4 bg-white shadow-lg"
				id="menu"
			>
				<li>
					<a
						href="/"
						className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
					>
						<span className="text-sm font-medium"> HOME </span>
					</a>
				</li>

				<li>
					<a
						href="/about"
						className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700"
					>
						<span className="text-sm font-medium"> ABOUT US </span>
					</a>
				</li>

				<li>
					<details className="group [&_summary::-webkit-details-marker]:hidden">
						<summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							<div className="flex items-center gap-2">
								<span className="text-sm font-medium"> SOLUTIONS </span>
							</div>

							<span className="shrink-0 transition duration-300 group-open:-rotate-180">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</summary>

						<ul className="mt-2 space-y-1 px-4">
							<li>
								<a
									href="/solutions"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									SPKB
								</a>
							</li>

							<li>
								<a
									href="/solutions"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									INTEGRATED OPERATION CENTRE
								</a>
							</li>
							<li>
								<a
									href="/solutions"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									SPPB
								</a>
							</li>
							<li>
								<a
									href="/solutions"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									Super App
								</a>
							</li>
						</ul>
					</details>
				</li>

				<li>
					<details className="group [&_summary::-webkit-details-marker]:hidden">
						<summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
							<div className="flex items-center gap-2">
								<span className="text-sm font-medium"> PRODUCTS </span>
							</div>

							<span className="shrink-0 transition duration-300 group-open:-rotate-180">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</summary>

						<ul className="mt-2 space-y-1 px-4">
							<li>
								<a
									href="/products"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									HANDHELD
								</a>
							</li>

							<li>
								<a
									href="/products"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									PRINTER
								</a>
							</li>
							<li>
								<a
									href="/products"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									BODYWORN CAMERA
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									DJI DRONE
								</a>
							</li>
						</ul>
					</details>
				</li>

				<li>
					<a
						href="/contact"
						className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
					>
						<span className="text-sm font-medium"> CONTACT US </span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;
