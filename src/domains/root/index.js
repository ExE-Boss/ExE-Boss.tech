/*
* Copyright (C) 2019 ExE Boss
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
/// <reference path="../../types.d.ts"/>

/** @type {SiteIndex} */
module.exports = {
	config: {
		title: "ExE Boss",
		author: "ExE Boss",

		url: "https://ExE-Boss.tech",
	},
	defaults: [
		{
			values: {
				contentSecurityPolicy: [
					{
						name: "default-src",
						value: [
							"'self'",
						],
					},
					{
						name: "script-src",
						value: [
							"'self'",
							"https://cdnjs.cloudflare.com/",
						],
					},
					{
						name: "style-src",
						value: [
							"'self'",
							"https://cdnjs.cloudflare.com/",
						],
					},
					{
						name: "font-src",
						value: [
							"'self'",
							"https://cdnjs.cloudflare.com/",
						],
					},
					{
						name: "img-src",
						value: [
							"'self'",
							"https://*/",
							"data:",
						],
					},
					{
						name: "frame-ancestors",
						value: [
							"'self'",
						],
					},
				],
			},
		},
	],
	pages: {
		"index": {
			includeCss: [
				"index",
			],
		},
		"web-extensions": {
			title: "WebExtensions",
			includeCss: [
				"web-extensions",
			],
			includeJs: [
				"btn-group-variable",
			],
		},
		"404": {
			title: "404 Error",
			includeFooter: false,
			includeCss: [
				"http-status",
			],
		},
	},
};
