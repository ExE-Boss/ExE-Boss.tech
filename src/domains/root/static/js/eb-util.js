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

/** @typedef	{object}	BrowserInfo
 * @property	{string}	name	The browser name
 * @property	{string}	vendor	The browser vendor
 * @property	{string}	version	The browser version
 * @property	{string}	[buildID]	The browser build ID
 */
/** @typedef	{object}	PlatformInfo
 * @property	{string}	os	The platform’s operating system.
 * @property	{string}	version	The operating system’s version.
 */
/** @typedef	{object}	UserAgentInfo
 * @property	{BrowserInfo}	browser	The browser info
 * @property	{PlatformInfo}	platform	The platform info
 */
/**
 * @type Object
 */
const EBUtil = (() => { // eslint-disable-line no-unused-vars
	/**
	 * @return {UserAgentInfo} The user agent info
	 */
	const parseUserAgent = () => {
		const ua = window.navigator.userAgent;
		const iOSuserAgent = /^Mozilla\/[\d.]+ \(i[A-Z]\w*; CPU (?:.* )*OS (\d+(?:_\d+)*) like Mac OS X\) AppleWebKit\/\d+(?:\.\d+)* \(KHTML, like Gecko\)/i;
		let match;
		/** @type BrowserInfo */
		let browserInfo;
		/** @type PlatformInfo */
		let platformInfo;

		if ((match = iOSuserAgent.exec(window.navigator.userAgent)) !== null) {
			platformInfo = {
				os: "ios",
				version: match[1].replace("_", ".")
			};
			const browserData = /(\w+)\/(\d+(?:\.\d+)*(?:\w+\d+(?:\.\d+)*)?) (?:.* )*Safari\/\d+(?:\.\d+)*/i.exec(ua.substring(match[0].length).trim());
			if (browserData !== null) {
				switch (browserData[1]) {
					case "Version": {
						browserInfo = {
							name:	"Safari",
							vendor:	"Apple",
							version:	browserData[2]
						};
						break;
					} case "FxiOS": {
						browserInfo = {
							name:	"Firefox",
							vendor:	"Mozilla"
						};
						if (/[a-zA-Z]+/.test(browserData[2])) {
							[
								browserInfo.version,
								browserInfo.buildID,
							] = browserData[2].split(/[a-zA-Z]+/, 2);
						} else {
							[,browserInfo.version] = browserData;
						}
						break;
					} case "CriOS": {
						browserInfo = {
							name:	"Chrome",
							vendor:	"Google",
							version:	browserData[2]
						};
						break;
					}
				}
			}
		}

		return {
			browser:	browserInfo	|| {name: "Unknown", vendor: "Unknown", version: "Unknown"},
			platform:	platformInfo	|| {os: "Unknown", version: "Unknown"}
		};
	};

	return {
		/**
		 * Gets the data as returned by the user agent string.
		 *
		 * Might not always work and should not be used for supplying
		 * different code to different browsers.
		 *
		 * @return {UserAgentInfo} The user agent info
		 */
		getUAInfo: () => {
			return parseUserAgent();
		}
	};
})();
