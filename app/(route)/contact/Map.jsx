import React from "react";

function Map() {
	return (
		<div className="google-map-code p-4 bg-white">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1911639443347!2d101.70600740833493!3d3.0433830649558757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4aa791a43ed3%3A0xce5dbafc282ec20b!2sOne%20South%20Street%20Mall!5e0!3m2!1sen!2smy!4v1727852383700!5m2!1sen!2smy"
				width="100%"
				height="450"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}

export default Map;
