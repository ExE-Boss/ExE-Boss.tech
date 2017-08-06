/*
 * Copyright 2017 ExE Boss.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* global EBUtil */

$(() => {
	let uaInfo = EBUtil.getUAInfo();
	if (uaInfo.platform.os === "ios") {
		let link = document.createElement("link");
		link.setAttribute("rel",	"apple-touch-icon-precomposed");
		switch (uaInfo.browser.name) {
			case "Safari": {
				link.setAttribute("href",	"/static/img/favicon/apple.png");
				break;
			} case "Firefox": {
				let majorVersion = Number(uaInfo.browser.version.split(".")[0]);
				if (majorVersion >= 8) {
//					let size;
//					let link2;
//
//					size = 18 * window.devicePixelRatio;
//					link2 = document.createElement("link");
//					link2.setAttribute("rel",	"apple-touch-icon-precomposed");
//					link2.setAttribute("sizes", `${size}x${size}`);
//					link2.setAttribute("href",	"/static/img/favicon/fxios-8.0-titlebar.png");
//					document.head.insertBefore(link2, document.getElementById("global-head-link-icons-end"));
//
//					size = 29 * window.devicePixelRatio;
//					link2 = document.createElement("link");
//					link2.setAttribute("rel",	"apple-touch-icon-precomposed");
//					link2.setAttribute("sizes",	`${size}x${size}`);
//					link2.setAttribute("href",	"/static/img/favicon/fxios-8.0-small.png");
//					document.head.insertBefore(link2, document.getElementById("global-head-link-icons-end"));
//
//					size = 76 * window.devicePixelRatio;
//					link.setAttribute("sizes",	`${size}x${size}`);
//					link.setAttribute("href",	"/static/img/favicon/fxios-8.0.png");
				}
				break;
			}
		}
		if (link.hasAttribute("href")) {
			document.head.insertBefore(link, document.getElementById("global-head-link-icons-end"));
		}
	}
	document.getElementById("global-head-link-icons-end").removeAttribute("id");
});