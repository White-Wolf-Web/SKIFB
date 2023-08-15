import React, { useState, useEffect, useRef, useCallback } from "react";
import "../COMPOSANTS/infiniteScroll.css";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

export default function InfiniteScroll() {
	const [dataImg, setDataImg] = useState([[], [], []]);
	const [pageIndex, setPageIndex] = useState(1);
	const [searchState, setSearchState] = useState("random");
	const [firstCall, setFirstCall] = useState(true);

	const infiniteFetchData = useCallback(() => {
		fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=nZ4Obmcw4FnWAjRAlJLYiP46ybPCe34vEDJdSNZlM4U`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const imgsReceived = [];

				data.results.forEach((img) => {
					imgsReceived.push(img.urls.regular);
				});

				let index = 0;
				setDataImg((oldDataImg) => {
					const newFreshState = [...oldDataImg];
					for (let i = 0; i < 3; i++) {
						for (let j = 0; j < 10; j++) {
							newFreshState[i].push(imgsReceived[index]);
							index++;
						}
					}
					return newFreshState;
				});

				setFirstCall(false);
			});
	}, [pageIndex, searchState]);  // removed dataImg from dependencies

	const searchFetchData = useCallback(() => {
		fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=TccZKDXp9rzfJUM7avYkdoikF-6NFDgdYhvZF5HiunQ`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const imgsReceived = [];

				data.results.forEach((img) => {
					imgsReceived.push(img.urls.regular);
				});

				let index = 0;
				setDataImg(() => {
					const newFreshState = [[], [], []];
					for (let i = 0; i < 3; i++) {
						for (let j = 0; j < 10; j++) {
							newFreshState[i].push(imgsReceived[index]);
							index++;
						}
					}
					return newFreshState;
				});
			});
	}, [pageIndex, searchState]);  // removed dataImg from dependencies

	useEffect(() => {
		if (firstCall) return;
		searchFetchData();
	}, [searchState, firstCall, searchFetchData]);

	useEffect(() => {
		infiniteFetchData();
	}, [pageIndex, infiniteFetchData]);

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchState(inpRef.current.value);
		setPageIndex(1);
	};

	const inpRef = useRef();

	useEffect(() => {
		window.addEventListener("scroll", infiniteCheck);

		return () => {
			window.removeEventListener("scroll", infiniteCheck);
		};
	}, []);

	const infiniteCheck = () => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

		if (scrollHeight - scrollTop === clientHeight) {
			setPageIndex((pageIndex) => pageIndex + 1);
		}
	};

	return (
		<div className="infiniteScrollContainer">
			<form onSubmit={handleSearch}>
				<label htmlFor="search">Votre recherche</label>
				<input type="text" id="search" ref={inpRef} />
			</form>
			<div className="card-list">
				<div>
					{dataImg[0].map((img) => {
						return <Image key={uuidv4()} src={img} alt="unsplash 1ere serie" />;
					})}
				</div>
				<div>
					{dataImg[1].map((img) => {
						return <Image key={uuidv4()} src={img} alt="unsplash 2nd serie " />;
					})}
				</div>
				<div>
					{dataImg[2].map((img) => {
						return <Image key={uuidv4()} src={img} alt="unsplash 3e serie" />;
					})}
				</div>
			</div>
		</div>
	);
}
