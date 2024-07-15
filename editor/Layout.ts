// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import { HTML } from "imperative-html/dist/esm/elements-strict";
import { ColorConfig } from "./ColorConfig";

export class Layout {
	private static readonly _layoutMap: {[K: string]: string} = {
		"small": "",
		"lospec": `\
			/* lospec layout */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
					display: block;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: 1fr; /* minmax(0, 1fr) min-content; Chrome 80 grid layout regression. https://bugs.chromium.org/p/chromium/issues/detail?id=1050307 */
					grid-template-rows: 60px auto 168px;
					grid-template-areas: "settings-area" "pattern-area" "track-area";
				}
				.beepboxEditor .pattern-area {
					width: calc(100% - 280px);
					height: 100%;
					overflow: hidden;
					margin-left: 280px;
				}
				.beepboxEditor .track-area {
					width: 100%;
					display: flex;
					flex-direction: column;
					margin-left: 280px;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 1;
					overflow: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: absolute;
					left: 0;
					top: 64px;
					width: 280px;
					height: 659px;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 240px;
					overflow-x: hidden;
					padding: 1em;
				}
				.beepboxEditor .song-settings-area {
					overflow-y: initial; /*dont scroll, just overlap*/
				}
				
				.beepboxEditor .settings-area {
					width: 100%;
					display: grid;
					grid-template-columns: 388px minmax(0, 1fr) 240px;
					grid-template-rows: auto minmax(0, 1fr);
					grid-template-areas:
						"menu-area play-pause-area song-settings-area"
						"version-area play-pause-area song-settings-area";
				}

				/* file menu */
				.beepboxEditor .menu-area { 
					flex-direction: row;
				}
				.beepboxEditor .menu select { 
					text-align: left;
  					text-align-last: left;
				}
				.beepboxEditor .menu::before, .beepboxEditor .menu::after {
					display: none;
				}
				
				/*play/pause controls*/
				.beepboxEditor .play-pause-area {
					width: 150px;
				}

				/*editor controls*/
				.beepboxEditor .song-settings-area {
					overflow-y: hidden;
				}	
				.beepboxEditor .song-settings-area:hover {
					overflow-y: initial;
				}	
				.beepboxEditor .song-settings-area .editor-controls {
					background-color: ${ColorConfig.editorBackground};
					z-index: 1;
					padding: 1em 2em;
				}
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor.selectRow {
					height: 2em;
				}
				.beepboxEditor .trackAndMuteContainer {
					max-height: 446px;
				}

				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
					scrollbar-color: ${ColorConfig.uiWidgetBackground} ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
			}
			#text-content {
				display: none;
			}
		`,
		"long": `\

			/* long layout */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: minmax(0, 1fr) 390px; /* minmax(0, 1fr) min-content; Chrome 80 grid layout regression. https://bugs.chromium.org/p/chromium/issues/detail?id=1050307 */
					grid-template-rows: minmax(481px, 1fr) minmax(0, min-content);
					grid-template-areas: "pattern-area settings-area" "track-area track-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .track-area {
					width: 100%;
					display: flex;
					flex-direction: column;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 1;
					overflow: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: relative;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				.beepboxEditor .song-settings-area {
					overflow-y: auto;
				}
				
				.beepboxEditor .settings-area {
					width: 390px;
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
					grid-template-rows: auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"instrument-settings-area version-area"
						"instrument-settings-area play-pause-area"
						"instrument-settings-area menu-area"
						"instrument-settings-area song-settings-area";
				}
				
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor.selectRow {
					height: 2em;
				}
				.beepboxEditor .trackAndMuteContainer {
					max-height: 446px;
				}

				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
					scrollbar-color: ${ColorConfig.uiWidgetBackground} ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
			}
		`,
		"tall": `\
			/* tall layout */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 192px;
					grid-template-rows: 1fr;
					grid-template-areas: "track-area pattern-area settings-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .track-area {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 0;
					overflow: auto;
					flex-basis: initial;
					flex-grow: 0;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				
				.beepboxEditor .settings-area {
					width: 192px;
					position: relative;
					overflow-y: auto;
					grid-template-columns: minmax(0, 1fr);
					grid-template-rows: auto auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"version-area"
						"play-pause-area"
						"menu-area"
						"song-settings-area"
						"instrument-settings-area";
				}
				.beepboxEditor .version-area {
					position: sticky;
					top: 0;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .play-pause-area {
					position: sticky;
					top: 22px;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .menu-area {
					position: sticky;
					top: 82px;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
					scrollbar-color: ${ColorConfig.uiWidgetBackground} ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
			}
		`,
		"wide": `\
			/* wide (JB) layout */
			@media (min-width: 1001px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 10vh;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: 512px minmax(0, 1fr) 30em;
					grid-template-rows: minmax(481px, 1fr) min-content;
					grid-template-areas: "track-area pattern-area settings-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .track-area {
					width: 100%;
					height: 100%;
					max-height: 100%
				}
				.beepboxEditor .editor-widget-column {
					flex: 0;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					flex: 0;
					flex-basis: initial;
					flex-grow: 0;
					overflow-y: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: relative;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				
				.beepboxEditor .song-settings-area {
					overflow-y: auto;
				}
				
				.beepboxEditor .settings-area {
					width: 30em;
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
					grid-template-rows: auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"instrument-settings-area version-area"
						"instrument-settings-area play-pause-area"
						"instrument-settings-area menu-area"
						"instrument-settings-area song-settings-area";
				}
				.beepboxEditor .version-area {
					position: sticky;
					top: 0;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .play-pause-area {
					position: sticky;
					top: 22px;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .menu-area {
					position: sticky;
					top: 82px;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				
				.beepboxEditor .trackContainer {
					overflow: visible;
				}
			}
		`,
	}
		
		private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({type: "text/css"}));
		
	public static setLayout(layout: string): void {
		this._styleElement.textContent = this._layoutMap[layout];
	}
}
