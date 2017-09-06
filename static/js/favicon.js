/*
 * Copyright (C) 2017 ExE Boss
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";
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
					/*
					let size;
					let link2;

					size = 18 * window.devicePixelRatio;
					link2 = document.createElement("link");
					link2.setAttribute("rel",	"apple-touch-icon-precomposed");
					link2.setAttribute("sizes", `${size}x${size}`);
					link2.setAttribute("href",	"/static/img/favicon/fxios-8.0-titlebar.png");
					document.head.insertBefore(link2, document.getElementById("global-head-link-icons-end"));

					size = 29 * window.devicePixelRatio;
					link2 = document.createElement("link");
					link2.setAttribute("rel",	"apple-touch-icon-precomposed");
					link2.setAttribute("sizes",	`${size}x${size}`);
					link2.setAttribute("href",	"/static/img/favicon/fxios-8.0-small.png");
					document.head.insertBefore(link2, document.getElementById("global-head-link-icons-end"));

					size = 76 * window.devicePixelRatio;
					link.setAttribute("sizes",	`${size}x${size}`);
					link.setAttribute("href",	"/static/img/favicon/fxios-8.0.png");
					*/
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