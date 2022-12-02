const apiConfig = {
	baseUrl: "https://api.themoviedb.org/3/",
	apiKey: "11fdf8e9390734ace83180a470ee0b5a",
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
