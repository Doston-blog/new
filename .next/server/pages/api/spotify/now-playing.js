"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/spotify/now-playing";
exports.ids = ["pages/api/spotify/now-playing"];
exports.modules = {

/***/ "(api)/./src/lib/spotify.ts":
/*!****************************!*\
  !*** ./src/lib/spotify.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNowPlaying\": () => (/* binding */ getNowPlaying),\n/* harmony export */   \"getTopTracks\": () => (/* binding */ getTopTracks)\n/* harmony export */ });\nconst client_id = process.env.SPOTIFY_CLIENT_ID;\nconst client_secret = process.env.SPOTIFY_CLIENT_SECRET;\nconst refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString(\"base64\");\nconst NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;\nconst TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\nconst getAccessToken = async ()=>{\n    const body = new URLSearchParams();\n    body.append(\"grant_type\", \"refresh_token\");\n    body.append(\"refresh_token\", refresh_token);\n    const response = await fetch(TOKEN_ENDPOINT, {\n        method: \"POST\",\n        headers: {\n            Authorization: `Basic ${basic}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: body\n    });\n    return response.json();\n};\nconst getNowPlaying = async ()=>{\n    const { access_token  } = await getAccessToken();\n    return fetch(NOW_PLAYING_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\nconst getTopTracks = async ()=>{\n    const { access_token  } = await getAccessToken();\n    return fetch(TOP_TRACKS_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3Nwb3RpZnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7QUFDL0MsTUFBTUMsYUFBYSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0cscUJBQXFCO0FBQ3ZELE1BQU1DLGFBQWEsR0FBR0wsT0FBTyxDQUFDQyxHQUFHLENBQUNLLHFCQUFxQjtBQUV2RCxNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsRUFBRVYsU0FBUyxDQUFDLENBQUMsRUFBRUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxRQUFRLENBQUMsUUFBUSxDQUFDO0FBQzdFLE1BQU1DLG9CQUFvQixHQUFHLENBQUMsc0RBQXNELENBQUM7QUFDckYsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQztBQUM1RixNQUFNQyxjQUFjLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQztBQUUvRCxNQUFNQyxjQUFjLEdBQUcsVUFBWTtJQUNqQyxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsZUFBZSxFQUFFO0lBQ2xDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDM0NGLElBQUksQ0FBQ0UsTUFBTSxDQUFDLGVBQWUsRUFBRVosYUFBYSxDQUFDLENBQUM7SUFFNUMsTUFBTWEsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ04sY0FBYyxFQUFFO1FBQzNDTyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7WUFDUEMsYUFBYSxFQUFFLENBQUMsTUFBTSxFQUFFZixLQUFLLENBQUMsQ0FBQztZQUMvQixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BEO1FBQ0RRLElBQUksRUFBRUEsSUFBSTtLQUNYLENBQUM7SUFFRixPQUFPRyxRQUFRLENBQUNLLElBQUksRUFBRSxDQUFDO0NBQ3hCO0FBRUQsTUFBTUMsYUFBYSxHQUFHLFVBQVk7SUFDaEMsTUFBTSxFQUFFQyxZQUFZLEdBQUUsR0FBRyxNQUFNWCxjQUFjLEVBQUU7SUFFL0MsT0FBT0ssS0FBSyxDQUFDUixvQkFBb0IsRUFBRTtRQUNqQ1UsT0FBTyxFQUFFO1lBQ1BDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRUcsWUFBWSxDQUFDLENBQUM7U0FDeEM7S0FDRixDQUFDLENBQUM7Q0FDSjtBQUVELE1BQU1DLFlBQVksR0FBRyxVQUFZO0lBQy9CLE1BQU0sRUFBRUQsWUFBWSxHQUFFLEdBQUcsTUFBTVgsY0FBYyxFQUFFO0lBRS9DLE9BQU9LLEtBQUssQ0FBQ1AsbUJBQW1CLEVBQUU7UUFDaENTLE9BQU8sRUFBRTtZQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVHLFlBQVksQ0FBQyxDQUFDO1NBQ3hDO0tBQ0YsQ0FBQyxDQUFDO0NBQ0o7QUFFc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctYmxvZy8uL3NyYy9saWIvc3BvdGlmeS50cz9kOTU4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNsaWVudF9pZCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX0lEO1xyXG5jb25zdCBjbGllbnRfc2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfU0VDUkVUO1xyXG5jb25zdCByZWZyZXNoX3Rva2VuID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9SRUZSRVNIX1RPS0VOIGFzIHN0cmluZztcclxuXHJcbmNvbnN0IGJhc2ljID0gQnVmZmVyLmZyb20oYCR7Y2xpZW50X2lkfToke2NsaWVudF9zZWNyZXR9YCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XHJcbmNvbnN0IE5PV19QTEFZSU5HX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9jdXJyZW50bHktcGxheWluZ2A7XHJcbmNvbnN0IFRPUF9UUkFDS1NfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrcz90aW1lX3JhbmdlPXNob3J0X3Rlcm1gO1xyXG5jb25zdCBUT0tFTl9FTkRQT0lOVCA9IGBodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbmA7XHJcblxyXG5jb25zdCBnZXRBY2Nlc3NUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gIGJvZHkuYXBwZW5kKFwiZ3JhbnRfdHlwZVwiLCBcInJlZnJlc2hfdG9rZW5cIik7XHJcbiAgYm9keS5hcHBlbmQoXCJyZWZyZXNoX3Rva2VuXCIsIHJlZnJlc2hfdG9rZW4pO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFRPS0VOX0VORFBPSU5ULCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IGJvZHksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXROb3dQbGF5aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goTk9XX1BMQVlJTkdfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFRPUF9UUkFDS1NfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldE5vd1BsYXlpbmcsIGdldFRvcFRyYWNrcyB9O1xyXG4iXSwibmFtZXMiOlsiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50X3NlY3JldCIsIlNQT1RJRllfQ0xJRU5UX1NFQ1JFVCIsInJlZnJlc2hfdG9rZW4iLCJTUE9USUZZX1JFRlJFU0hfVE9LRU4iLCJiYXNpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIk5PV19QTEFZSU5HX0VORFBPSU5UIiwiVE9QX1RSQUNLU19FTkRQT0lOVCIsIlRPS0VOX0VORFBPSU5UIiwiZ2V0QWNjZXNzVG9rZW4iLCJib2R5IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwianNvbiIsImdldE5vd1BsYXlpbmciLCJhY2Nlc3NfdG9rZW4iLCJnZXRUb3BUcmFja3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/spotify.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/spotify/now-playing.ts":
/*!**********************************************!*\
  !*** ./src/pages/api/spotify/now-playing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var src_lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/spotify */ \"(api)/./src/lib/spotify.ts\");\n\nasync function handler(req, res) {\n    const response = await (0,src_lib_spotify__WEBPACK_IMPORTED_MODULE_0__.getNowPlaying)();\n    if (response.status === 204 || response.status > 400) {\n        return res.status(200).json({\n            isPlaying: false\n        });\n    }\n    const song = await response.json();\n    if (song.item === null) {\n        return res.status(200).json({\n            isPlaying: false\n        });\n    }\n    const isPlaying = song.is_playing;\n    const title = song.item.name;\n    const artist = song.item.artists.map((_artist)=>_artist.name\n    ).join(\", \");\n    const album = song.item.album.name;\n    const albumImageUrl = song.item.album.images[0].url;\n    const songUrl = song.item.external_urls.spotify;\n    res.setHeader(\"Cache-Control\", \"public, s-maxage=60, stale-while-revalidate=30\");\n    return res.status(200).json({\n        album,\n        albumImageUrl,\n        artist,\n        isPlaying,\n        songUrl,\n        title\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Nwb3RpZnkvbm93LXBsYXlpbmcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDZ0Q7QUFFakMsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1KLDhEQUFhLEVBQUU7SUFFdEMsSUFBSUksUUFBUSxDQUFDQyxNQUFNLEtBQUssR0FBRyxJQUFJRCxRQUFRLENBQUNDLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDcEQsT0FBT0YsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxTQUFTLEVBQUUsS0FBSztTQUFFLENBQUMsQ0FBQztLQUNuRDtJQUVELE1BQU1DLElBQUksR0FBRyxNQUFNSixRQUFRLENBQUNFLElBQUksRUFBRTtJQUVsQyxJQUFJRSxJQUFJLENBQUNDLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDdEIsT0FBT04sR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxTQUFTLEVBQUUsS0FBSztTQUFFLENBQUMsQ0FBQztLQUNuRDtJQUVELE1BQU1BLFNBQVMsR0FBR0MsSUFBSSxDQUFDRSxVQUFVO0lBQ2pDLE1BQU1DLEtBQUssR0FBR0gsSUFBSSxDQUFDQyxJQUFJLENBQUNHLElBQUk7SUFDNUIsTUFBTUMsTUFBTSxHQUFHTCxJQUFJLENBQUNDLElBQUksQ0FBQ0ssT0FBTyxDQUM3QkMsR0FBRyxDQUFDLENBQUNDLE9BQVksR0FBS0EsT0FBTyxDQUFDSixJQUFJO0lBQUEsQ0FBQyxDQUNuQ0ssSUFBSSxDQUFDLElBQUksQ0FBQztJQUNiLE1BQU1DLEtBQUssR0FBR1YsSUFBSSxDQUFDQyxJQUFJLENBQUNTLEtBQUssQ0FBQ04sSUFBSTtJQUNsQyxNQUFNTyxhQUFhLEdBQUdYLElBQUksQ0FBQ0MsSUFBSSxDQUFDUyxLQUFLLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBRztJQUNuRCxNQUFNQyxPQUFPLEdBQUdkLElBQUksQ0FBQ0MsSUFBSSxDQUFDYyxhQUFhLENBQUNDLE9BQU87SUFFL0NyQixHQUFHLENBQUNzQixTQUFTLENBQ1gsZUFBZSxFQUNmLGdEQUFnRCxDQUNqRCxDQUFDO0lBRUYsT0FBT3RCLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDMUJZLEtBQUs7UUFDTEMsYUFBYTtRQUNiTixNQUFNO1FBQ05OLFNBQVM7UUFDVGUsT0FBTztRQUNQWCxLQUFLO0tBQ04sQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctYmxvZy8uL3NyYy9wYWdlcy9hcGkvc3BvdGlmeS9ub3ctcGxheWluZy50cz9hZGFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldE5vd1BsYXlpbmcgfSBmcm9tIFwic3JjL2xpYi9zcG90aWZ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXROb3dQbGF5aW5nKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPiA0MDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzUGxheWluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb25nID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBpZiAoc29uZy5pdGVtID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBpc1BsYXlpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNQbGF5aW5nID0gc29uZy5pc19wbGF5aW5nO1xyXG4gIGNvbnN0IHRpdGxlID0gc29uZy5pdGVtLm5hbWU7XHJcbiAgY29uc3QgYXJ0aXN0ID0gc29uZy5pdGVtLmFydGlzdHNcclxuICAgIC5tYXAoKF9hcnRpc3Q6IGFueSkgPT4gX2FydGlzdC5uYW1lKVxyXG4gICAgLmpvaW4oXCIsIFwiKTtcclxuICBjb25zdCBhbGJ1bSA9IHNvbmcuaXRlbS5hbGJ1bS5uYW1lO1xyXG4gIGNvbnN0IGFsYnVtSW1hZ2VVcmwgPSBzb25nLml0ZW0uYWxidW0uaW1hZ2VzWzBdLnVybDtcclxuICBjb25zdCBzb25nVXJsID0gc29uZy5pdGVtLmV4dGVybmFsX3VybHMuc3BvdGlmeTtcclxuXHJcbiAgcmVzLnNldEhlYWRlcihcclxuICAgIFwiQ2FjaGUtQ29udHJvbFwiLFxyXG4gICAgXCJwdWJsaWMsIHMtbWF4YWdlPTYwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTMwXCJcclxuICApO1xyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgYWxidW0sXHJcbiAgICBhbGJ1bUltYWdlVXJsLFxyXG4gICAgYXJ0aXN0LFxyXG4gICAgaXNQbGF5aW5nLFxyXG4gICAgc29uZ1VybCxcclxuICAgIHRpdGxlLFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXROb3dQbGF5aW5nIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImlzUGxheWluZyIsInNvbmciLCJpdGVtIiwiaXNfcGxheWluZyIsInRpdGxlIiwibmFtZSIsImFydGlzdCIsImFydGlzdHMiLCJtYXAiLCJfYXJ0aXN0Iiwiam9pbiIsImFsYnVtIiwiYWxidW1JbWFnZVVybCIsImltYWdlcyIsInVybCIsInNvbmdVcmwiLCJleHRlcm5hbF91cmxzIiwic3BvdGlmeSIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/spotify/now-playing.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/spotify/now-playing.ts"));
module.exports = __webpack_exports__;

})();