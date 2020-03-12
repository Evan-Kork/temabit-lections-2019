/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "bbb695f5782d8d804ffc";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar express_graphql_1 = __importDefault(__webpack_require__(/*! express-graphql */ \"express-graphql\"));\r\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\r\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nvar express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\r\nvar passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\r\nvar passport_2 = __importDefault(__webpack_require__(/*! @/middleware/passport */ \"./middleware/passport.ts\"));\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\n// IMPORT ROUTES\r\nvar index_1 = __importDefault(__webpack_require__(/*! @/routes/index */ \"./routes/index.ts\"));\r\nvar branches_1 = __importDefault(__webpack_require__(/*! @/routes/branches */ \"./routes/branches.ts\"));\r\nvar tracking_1 = __importDefault(__webpack_require__(/*! @/routes/tracking */ \"./routes/tracking.ts\"));\r\nvar localities_1 = __importDefault(__webpack_require__(/*! @/routes/localities */ \"./routes/localities.ts\"));\r\nvar services_1 = __importDefault(__webpack_require__(/*! @/routes/services */ \"./routes/services.ts\"));\r\n// IMPORT GRAPHQL\r\nvar schema_1 = __importDefault(__webpack_require__(/*! @/schema */ \"./schema/index.ts\"));\r\nvar app = express_1.default();\r\nvar MongoStore = __webpack_require__(/*! connect-mongodb-session */ \"connect-mongodb-session\")(express_session_1.default);\r\n// MONGOOSE\r\nmongoose_1.default.Promise = global.Promise;\r\nmongoose_1.default.connect(keys_1.default.MONGODB_URI, {\r\n    useUnifiedTopology: true,\r\n    useNewUrlParser: true\r\n})\r\n    .then(function () { return console.log('MongoDB connected.'); })\r\n    .catch(function (error) { return console.log(error); });\r\n// STORE\r\nvar store = new MongoStore({\r\n    collection: 'sessions',\r\n    uri: keys_1.default.MONGODB_URI\r\n});\r\n// EXPRESS MIDDLEWARE\r\napp.use(cors_1.default());\r\napp.use(passport_1.default.initialize());\r\napp.use(express_1.default.json());\r\napp.use(express_1.default.urlencoded({ extended: false }));\r\napp.use(express_session_1.default({\r\n    secret: 'some secret value',\r\n    resave: false,\r\n    saveUninitialized: false,\r\n    store: store\r\n}));\r\napp.use(morgan_1.default('dev'));\r\npassport_2.default(passport_1.default);\r\napp.use('/graphql', express_graphql_1.default({\r\n    schema: schema_1.default,\r\n    graphiql: true\r\n}));\r\n// ROUTER\r\napp.use('/api/', index_1.default);\r\napp.use('/api/branches', branches_1.default);\r\napp.use('/api/tracking', tracking_1.default);\r\napp.use('/api/localities', localities_1.default);\r\napp.use('/api/services', services_1.default);\r\n// LISTEN PORT\r\nvar PORT = process.env.PORT || 5000;\r\napp.listen(PORT, function () {\r\n    console.log(\"App lisening o \" + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./config/keys.ts":
/*!************************!*\
  !*** ./config/keys.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    LOGIN: 'admin',\r\n    PASSWORD: 'admin',\r\n    MONGODB_URI: \"mongodb+srv://admin:admin@clustercourseproject-tbs6b.mongodb.net/test?retryWrites=true&w=majority\",\r\n    JWT: 'dev-jwt',\r\n    OPENAPI: 'http://openapi.justin.ua'\r\n};\r\n\n\n//# sourceURL=webpack:///./config/keys.ts?");

/***/ }),

/***/ "./controllers/branches.ts":
/*!*********************************!*\
  !*** ./controllers/branches.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\nexports.getAllBranches = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/branches?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.getBranches = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/branches/\" + req.params.id + \"?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.getBranchesLocality = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/branches?locality=\" + encodeURI(req.body.locality) + \"&output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.getBranchesLocator = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/branches_locator/\" + encodeURI(req.body.locator))\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.getBranchesTypes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/branch_types?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./controllers/branches.ts?");

/***/ }),

/***/ "./controllers/localities.ts":
/*!***********************************!*\
  !*** ./controllers/localities.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\nexports.getLocalities = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/localities?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.getAllLocalities = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/localities/all?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.getLocalitiesActivity = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/localities/activity?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./controllers/localities.ts?");

/***/ }),

/***/ "./controllers/services.ts":
/*!*********************************!*\
  !*** ./controllers/services.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\nexports.getServices = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/services?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./controllers/services.ts?");

/***/ }),

/***/ "./controllers/tracking.ts":
/*!*********************************!*\
  !*** ./controllers/tracking.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\nexports.getTracking = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/tracking/\" + req.params.number + \"?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.getHistoryTracking = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, node_fetch_1.default(keys_1.default.OPENAPI + \"/tracking_history/\" + req.params.number + \"?output=compact\")\r\n                    .then(function (response) { return response.json(); })\r\n                    .then(function (result) { return res.json(result); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./controllers/tracking.ts?");

/***/ }),

/***/ "./enum/calculation.ts":
/*!*****************************!*\
  !*** ./enum/calculation.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nexports.WeightRangEnum = new graphql_1.GraphQLEnumType({\r\n    name: 'WeightRangEnum',\r\n    values: {\r\n        'XS': { value: 1 },\r\n        'S': { value: 2 },\r\n        'M': { value: 3 },\r\n        'L': { value: 4 },\r\n        'XL': { value: 5 },\r\n        'XXL': { value: 6 },\r\n        'XXXL': { value: 7 },\r\n    }\r\n});\r\nexports.LegthRangEnum = new graphql_1.GraphQLEnumType({\r\n    name: 'LegthRangEnum',\r\n    values: {\r\n        'Short': { value: 1 },\r\n        'Medium': { value: 2 },\r\n        'Long': { value: 3 },\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./enum/calculation.ts?");

/***/ }),

/***/ "./enum/menu.ts":
/*!**********************!*\
  !*** ./enum/menu.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nexports.AvailabilityEnum = new graphql_1.GraphQLEnumType({\r\n    name: 'AvailabilityEnum',\r\n    values: {\r\n        NoRegistrations: { value: 'NoRegistrations' },\r\n        Registrations: { value: 'Registrations' },\r\n    }\r\n});\r\nexports.MenuEnum = new graphql_1.GraphQLEnumType({\r\n    name: 'TypeMenuEnum',\r\n    values: {\r\n        Base: { value: 'Base' },\r\n        Declaration: { value: 'Declaration' },\r\n        Office: { value: 'Office' }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./enum/menu.ts?");

/***/ }),

/***/ "./middleware/passport.ts":
/*!********************************!*\
  !*** ./middleware/passport.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar passport_jwt_1 = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\nvar options = {\r\n    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),\r\n    secretOrKey: keys_1.default.JWT\r\n};\r\nfunction default_1(passport) {\r\n    var _this = this;\r\n    passport.use(new passport_jwt_1.Strategy(options, function (payload, done) { return __awaiter(_this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            try {\r\n                done(null, true);\r\n            }\r\n            catch (err) {\r\n                console.log(err);\r\n            }\r\n            return [2 /*return*/];\r\n        });\r\n    }); }));\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack:///./middleware/passport.ts?");

/***/ }),

/***/ "./models/advantages.ts":
/*!******************************!*\
  !*** ./models/advantages.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar AdvantagesSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    icon: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    text: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('Advantages', AdvantagesSchema);\r\n\n\n//# sourceURL=webpack:///./models/advantages.ts?");

/***/ }),

/***/ "./models/calculation.ts":
/*!*******************************!*\
  !*** ./models/calculation.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar WeightRang;\r\n(function (WeightRang) {\r\n    WeightRang[WeightRang[\"XS\"] = 1] = \"XS\";\r\n    WeightRang[WeightRang[\"S\"] = 2] = \"S\";\r\n    WeightRang[WeightRang[\"M\"] = 3] = \"M\";\r\n    WeightRang[WeightRang[\"L\"] = 4] = \"L\";\r\n    WeightRang[WeightRang[\"XL\"] = 5] = \"XL\";\r\n    WeightRang[WeightRang[\"XXL\"] = 6] = \"XXL\";\r\n    WeightRang[WeightRang[\"XXXL\"] = 7] = \"XXXL\";\r\n})(WeightRang || (WeightRang = {}));\r\nvar LegthRang;\r\n(function (LegthRang) {\r\n    LegthRang[LegthRang[\"Short\"] = 1] = \"Short\";\r\n    LegthRang[LegthRang[\"Medium\"] = 2] = \"Medium\";\r\n    LegthRang[LegthRang[\"Long\"] = 3] = \"Long\";\r\n})(LegthRang || (LegthRang = {}));\r\nvar CalculationWeightSchema = new mongoose_1.Schema({\r\n    weight: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 2,\r\n        required: true\r\n    },\r\n    rang: {\r\n        type: WeightRang,\r\n        maxlength: 255,\r\n        minlength: 2,\r\n        required: true\r\n    }\r\n});\r\nvar CalculationLengthSchema = new mongoose_1.Schema({\r\n    parcelLength: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 2,\r\n        required: true\r\n    },\r\n    rang: {\r\n        type: LegthRang,\r\n        maxlength: 255,\r\n        minlength: 2,\r\n        required: true\r\n    }\r\n});\r\nvar CalculationPriceSchema = new mongoose_1.Schema({\r\n    price: {\r\n        type: Number,\r\n        required: true\r\n    },\r\n    rang: {\r\n        type: Number,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('CalculationWeight', CalculationWeightSchema);\r\nmongoose_1.model('CalculationLegth', CalculationLengthSchema);\r\nmongoose_1.model('CalculationPrice', CalculationPriceSchema);\r\n\n\n//# sourceURL=webpack:///./models/calculation.ts?");

/***/ }),

/***/ "./models/command.ts":
/*!***************************!*\
  !*** ./models/command.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar CommandSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    position: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    img: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('Command', CommandSchema);\r\n\n\n//# sourceURL=webpack:///./models/command.ts?");

/***/ }),

/***/ "./models/error.ts":
/*!*************************!*\
  !*** ./models/error.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar ErrorSchema = new mongoose_1.Schema({\r\n    error: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    errorInfo: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    date: {\r\n        type: String,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('Error', ErrorSchema);\r\n\n\n//# sourceURL=webpack:///./models/error.ts?");

/***/ }),

/***/ "./models/menu.ts":
/*!************************!*\
  !*** ./models/menu.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar Availability;\r\n(function (Availability) {\r\n    Availability[\"NoRegistrations\"] = \"NoRegistrations\";\r\n    Availability[\"Registrations\"] = \"Registrations\";\r\n})(Availability || (Availability = {}));\r\nvar MenuType;\r\n(function (MenuType) {\r\n    MenuType[\"Base\"] = \"Base\";\r\n    MenuType[\"Declaration\"] = \"Declaration\";\r\n    MenuType[\"Office\"] = \"Office\";\r\n})(MenuType || (MenuType = {}));\r\nvar MenuSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    icon: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    path: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    availability: {\r\n        type: Availability,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    typeMenu: {\r\n        type: MenuType,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('Menu', MenuSchema);\r\n\n\n//# sourceURL=webpack:///./models/menu.ts?");

/***/ }),

/***/ "./models/quote.ts":
/*!*************************!*\
  !*** ./models/quote.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar QuoteSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    text: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('Quote', QuoteSchema);\r\n\n\n//# sourceURL=webpack:///./models/quote.ts?");

/***/ }),

/***/ "./models/sponsor.ts":
/*!***************************!*\
  !*** ./models/sponsor.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar SponsorSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    logotype: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    text: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3\r\n    }\r\n});\r\nmongoose_1.model('Sponsor', SponsorSchema);\r\n\n\n//# sourceURL=webpack:///./models/sponsor.ts?");

/***/ }),

/***/ "./routes/branches.ts":
/*!****************************!*\
  !*** ./routes/branches.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar branches_1 = __webpack_require__(/*! @/controllers/branches */ \"./controllers/branches.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/', branches_1.getAllBranches);\r\nrouter.post('/locality', branches_1.getBranchesLocality);\r\nrouter.post('/locator', branches_1.getBranchesLocator);\r\nrouter.get('/types', branches_1.getBranchesTypes);\r\nrouter.get('/:id', branches_1.getBranches);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/branches.ts?");

/***/ }),

/***/ "./routes/index.ts":
/*!*************************!*\
  !*** ./routes/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar router = express_1.default.Router();\r\nrouter.get('/', function (req, res) {\r\n    res.json({ 'index': 'index' });\r\n});\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/index.ts?");

/***/ }),

/***/ "./routes/localities.ts":
/*!******************************!*\
  !*** ./routes/localities.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar localities_1 = __webpack_require__(/*! @/controllers/localities */ \"./controllers/localities.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/', localities_1.getLocalities);\r\nrouter.get('/all', localities_1.getAllLocalities);\r\nrouter.get('/activity', localities_1.getLocalitiesActivity);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/localities.ts?");

/***/ }),

/***/ "./routes/services.ts":
/*!****************************!*\
  !*** ./routes/services.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar services_1 = __webpack_require__(/*! @/controllers/services */ \"./controllers/services.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/', services_1.getServices);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/services.ts?");

/***/ }),

/***/ "./routes/tracking.ts":
/*!****************************!*\
  !*** ./routes/tracking.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar tracking_1 = __webpack_require__(/*! @/controllers/tracking */ \"./controllers/tracking.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/history/:number', tracking_1.getHistoryTracking);\r\nrouter.get('/:number', tracking_1.getTracking);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/tracking.ts?");

/***/ }),

/***/ "./schema/advantages.ts":
/*!******************************!*\
  !*** ./schema/advantages.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\n__webpack_require__(/*! @/models/advantages */ \"./models/advantages.ts\");\r\nvar Advantages = mongoose_1.model('Advantages');\r\nvar AdvantagesType = new graphql_1.GraphQLObjectType({\r\n    name: 'Advantages',\r\n    fields: function () { return ({\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        },\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        icon: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        text: {\r\n            type: graphql_1.GraphQLString\r\n        }\r\n    }); }\r\n});\r\nexports.getAdvantages = {\r\n    type: new graphql_1.GraphQLList(AdvantagesType),\r\n    resolve: function (parent, args) {\r\n        return Advantages.find();\r\n    }\r\n};\r\nexports.addAdvantages = {\r\n    type: AdvantagesType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        icon: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        text: {\r\n            type: graphql_1.GraphQLString\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var advantages;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Advantages.findOne({ title: args.title })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            advantages = new Advantages({\r\n                                title: args.title,\r\n                                icon: args.icon,\r\n                                text: args.text\r\n                            });\r\n                            return [2 /*return*/, advantages.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.removeAdvantages = {\r\n    type: AdvantagesType,\r\n    args: {\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Advantages.findByIdAndRemove(args.id)];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.updateAdvantages = {\r\n    type: AdvantagesType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        icon: {\r\n            type: graphql_1.GraphQLString\r\n        },\r\n        text: {\r\n            type: graphql_1.GraphQLString\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Advantages.findOneAndUpdate({ title: args.title }, {\r\n                            $set: {\r\n                                title: args.title,\r\n                                icon: args.icon,\r\n                                text: args.text\r\n                            }\r\n                        }).setOptions({ omitUndefined: true })];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./schema/advantages.ts?");

/***/ }),

/***/ "./schema/calculation.ts":
/*!*******************************!*\
  !*** ./schema/calculation.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nvar calculation_1 = __webpack_require__(/*! @/enum/calculation */ \"./enum/calculation.ts\");\r\n__webpack_require__(/*! @/models/calculation */ \"./models/calculation.ts\");\r\nvar CalculationWeight = mongoose_1.model('CalculationWeight');\r\nvar CalculationLength = mongoose_1.model('CalculationLegth');\r\nvar CalculationPrice = mongoose_1.model('CalculationPrice');\r\nvar CalculationWeightType = new graphql_1.GraphQLObjectType({\r\n    name: 'CalculationWeight',\r\n    fields: function () { return ({\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        },\r\n        weight: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        rang: {\r\n            type: new graphql_1.GraphQLNonNull(calculation_1.WeightRangEnum)\r\n        }\r\n    }); }\r\n});\r\nvar CalculationLengthType = new graphql_1.GraphQLObjectType({\r\n    name: 'CalculationLegth',\r\n    fields: function () { return ({\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        },\r\n        parcelLength: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        rang: {\r\n            type: new graphql_1.GraphQLNonNull(calculation_1.LegthRangEnum)\r\n        }\r\n    }); }\r\n});\r\nvar CalculationPriceType = new graphql_1.GraphQLObjectType({\r\n    name: 'CalculationPrice',\r\n    fields: function () { return ({\r\n        price: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)\r\n        },\r\n        rang: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)\r\n        }\r\n    }); }\r\n});\r\nexports.getCalculationWeight = {\r\n    type: new graphql_1.GraphQLList(CalculationWeightType),\r\n    resolve: function (parent, args) {\r\n        return CalculationWeight.find();\r\n    }\r\n};\r\nexports.getCalculationLength = {\r\n    type: new graphql_1.GraphQLList(CalculationLengthType),\r\n    resolve: function (parent, args) {\r\n        return CalculationLength.find();\r\n    }\r\n};\r\nexports.getCalculationPrice = {\r\n    type: new graphql_1.GraphQLList(CalculationPriceType),\r\n    resolve: function (parent, args) {\r\n        return CalculationPrice.find();\r\n    }\r\n};\r\nexports.getTypeCalculationPrice = {\r\n    type: new graphql_1.GraphQLList(CalculationPriceType),\r\n    args: {\r\n        rang: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return CalculationPrice.find({\r\n            rang: args.rang\r\n        });\r\n    }\r\n};\r\nexports.addCalculationWeight = {\r\n    type: CalculationWeightType,\r\n    args: {\r\n        weight: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        rang: {\r\n            type: new graphql_1.GraphQLNonNull(calculation_1.WeightRangEnum)\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var weight;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationWeight.findOne({ weight: args.weight })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            weight = new CalculationWeight({\r\n                                weight: args.weight,\r\n                                rang: args.rang\r\n                            });\r\n                            return [2 /*return*/, weight.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.addCalculationLength = {\r\n    type: CalculationLengthType,\r\n    args: {\r\n        parcelLength: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        rang: {\r\n            type: new graphql_1.GraphQLNonNull(calculation_1.LegthRangEnum)\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var length_1;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationLength.findOne({ parcelLength: args.parcelLength })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            length_1 = new CalculationLength({\r\n                                parcelLength: args.parcelLength,\r\n                                rang: args.rang\r\n                            });\r\n                            return [2 /*return*/, length_1.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.addCalculationPrice = {\r\n    type: CalculationPriceType,\r\n    args: {\r\n        price: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)\r\n        },\r\n        rang: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var calculationPrice;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationPrice.findOne({ rang: args.rang })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            calculationPrice = new CalculationPrice({\r\n                                price: args.price,\r\n                                rang: args.rang\r\n                            });\r\n                            return [2 /*return*/, calculationPrice.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.removeCalculationWeight = {\r\n    type: CalculationWeightType,\r\n    args: {\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationWeight.findByIdAndRemove(args.id)];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.removeCalculationLength = {\r\n    type: CalculationLengthType,\r\n    args: {\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationLength.findByIdAndRemove(args.id)];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.removeCalculationPrice = {\r\n    type: CalculationPriceType,\r\n    args: {\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationPrice.findByIdAndRemove(args.id)];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.updateCalculationWeight = {\r\n    type: CalculationWeightType,\r\n    args: {\r\n        weight: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        rang: {\r\n            type: calculation_1.WeightRangEnum\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationWeight.findOneAndUpdate({ weight: args.weight }, {\r\n                            $set: {\r\n                                weight: args.weight,\r\n                                rang: args.rang\r\n                            }\r\n                        }).setOptions({ omitUndefined: true })];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.updateCalculationLength = {\r\n    type: CalculationLengthType,\r\n    args: {\r\n        parcelLength: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        rang: {\r\n            type: calculation_1.LegthRangEnum\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationLength.findOneAndUpdate({ parcelLength: args.parcelLength }, {\r\n                            $set: {\r\n                                parcelLength: args.parcelLength,\r\n                                rang: args.rang\r\n                            }\r\n                        }).setOptions({ omitUndefined: true })];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.updateCalculationPrice = {\r\n    type: CalculationPriceType,\r\n    args: {\r\n        price: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)\r\n        },\r\n        rang: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, CalculationPrice.findOneAndUpdate({ price: args.price }, {\r\n                            $set: {\r\n                                price: args.price,\r\n                                rang: args.rang\r\n                            }\r\n                        }).setOptions({ omitUndefined: true })];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./schema/calculation.ts?");

/***/ }),

/***/ "./schema/command.ts":
/*!***************************!*\
  !*** ./schema/command.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\n__webpack_require__(/*! @/models/command */ \"./models/command.ts\");\r\nvar Command = mongoose_1.model('Command');\r\nvar CommandType = new graphql_1.GraphQLObjectType({\r\n    name: 'Command',\r\n    fields: function () { return ({\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        },\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        position: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        img: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        }\r\n    }); }\r\n});\r\nexports.getCommand = {\r\n    type: new graphql_1.GraphQLList(CommandType),\r\n    resolve: function (parent, args) {\r\n        return Command.find();\r\n    }\r\n};\r\nexports.addCommand = {\r\n    type: CommandType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        position: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        img: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var advantages;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Command.findOne({ title: args.title })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            advantages = new Command({\r\n                                title: args.title,\r\n                                position: args.position,\r\n                                img: args.img\r\n                            });\r\n                            return [2 /*return*/, advantages.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.removeCommand = {\r\n    type: CommandType,\r\n    args: {\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Command.findByIdAndRemove(args.id)];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.updateCommand = {\r\n    type: CommandType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        position: {\r\n            type: graphql_1.GraphQLString\r\n        },\r\n        img: {\r\n            type: graphql_1.GraphQLString\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Command.findOneAndUpdate({ title: args.title }, {\r\n                            $set: {\r\n                                title: args.title,\r\n                                position: args.position,\r\n                                img: args.img\r\n                            }\r\n                        }).setOptions({ omitUndefined: true })];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./schema/command.ts?");

/***/ }),

/***/ "./schema/error.ts":
/*!*************************!*\
  !*** ./schema/error.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\n__webpack_require__(/*! @/models/error */ \"./models/error.ts\");\r\nvar Error = mongoose_1.model('Error');\r\nvar ErrorType = new graphql_1.GraphQLObjectType({\r\n    name: 'Error',\r\n    fields: function () { return ({\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        },\r\n        error: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        errorInfo: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        date: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        }\r\n    }); }\r\n});\r\nexports.getError = {\r\n    type: new graphql_1.GraphQLList(ErrorType),\r\n    resolve: function (parent, args) {\r\n        return Error.find();\r\n    }\r\n};\r\nexports.addError = {\r\n    type: ErrorType,\r\n    args: {\r\n        error: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        errorInfo: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        date: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var error;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Error.findOne({ error: args.error })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            error = new Error({\r\n                                error: args.error,\r\n                                errorInfo: args.errorInfo,\r\n                                date: args.date\r\n                            });\r\n                            return [2 /*return*/, error.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./schema/error.ts?");

/***/ }),

/***/ "./schema/index.ts":
/*!*************************!*\
  !*** ./schema/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nvar menu_1 = __webpack_require__(/*! @/schema/menu */ \"./schema/menu.ts\");\r\nvar advantages_1 = __webpack_require__(/*! @/schema/advantages */ \"./schema/advantages.ts\");\r\nvar sponsor_1 = __webpack_require__(/*! @/schema/sponsor */ \"./schema/sponsor.ts\");\r\nvar command_1 = __webpack_require__(/*! @/schema/command */ \"./schema/command.ts\");\r\nvar quote_1 = __webpack_require__(/*! @/schema/quote */ \"./schema/quote.ts\");\r\nvar calculation_1 = __webpack_require__(/*! @/schema/calculation */ \"./schema/calculation.ts\");\r\nvar error_1 = __webpack_require__(/*! @/schema/error */ \"./schema/error.ts\");\r\nexports.Query = new graphql_1.GraphQLObjectType({\r\n    name: 'Query',\r\n    fields: {\r\n        getTypeMenu: menu_1.getTypeMenu,\r\n        getMenu: menu_1.getMenu,\r\n        getAdvantages: advantages_1.getAdvantages,\r\n        getSponsor: sponsor_1.getSponsor,\r\n        getCommand: command_1.getCommand,\r\n        getQuote: quote_1.getQuote,\r\n        getCalculationLength: calculation_1.getCalculationLength,\r\n        getCalculationWeight: calculation_1.getCalculationWeight,\r\n        getCalculationPrice: calculation_1.getCalculationPrice,\r\n        getTypeCalculationPrice: calculation_1.getTypeCalculationPrice,\r\n        getError: error_1.getError\r\n    }\r\n});\r\nexports.Mutation = new graphql_1.GraphQLObjectType({\r\n    name: 'Mutation',\r\n    fields: {\r\n        addMenu: menu_1.addMenu,\r\n        removeMenu: menu_1.removeMenu,\r\n        updateMenu: menu_1.updateMenu,\r\n        addAdvantages: advantages_1.addAdvantages,\r\n        removeAdvantages: advantages_1.removeAdvantages,\r\n        updateAdvantages: advantages_1.updateAdvantages,\r\n        addSponsor: sponsor_1.addSponsor,\r\n        removeSponsor: sponsor_1.removeSponsor,\r\n        updateSponsor: sponsor_1.updateSponsor,\r\n        addCommand: command_1.addCommand,\r\n        removeCommand: command_1.removeCommand,\r\n        updateCommand: command_1.updateCommand,\r\n        addQuote: quote_1.addQuote,\r\n        removeQuote: quote_1.removeQuote,\r\n        updateQuote: quote_1.updateQuote,\r\n        addCalculationLength: calculation_1.addCalculationLength,\r\n        removeCalculationLength: calculation_1.removeCalculationLength,\r\n        addCalculationWeight: calculation_1.addCalculationWeight,\r\n        updateCalculationLength: calculation_1.updateCalculationLength,\r\n        updateCalculationWeight: calculation_1.updateCalculationWeight,\r\n        removeCalculationWeight: calculation_1.removeCalculationWeight,\r\n        addCalculationPrice: calculation_1.addCalculationPrice,\r\n        removeCalculationPrice: calculation_1.removeCalculationPrice,\r\n        updateCalculationPrice: calculation_1.updateCalculationPrice,\r\n        addError: error_1.addError\r\n    }\r\n});\r\nexports.default = new graphql_1.GraphQLSchema({\r\n    query: exports.Query,\r\n    mutation: exports.Mutation\r\n});\r\n\n\n//# sourceURL=webpack:///./schema/index.ts?");

/***/ }),

/***/ "./schema/menu.ts":
/*!************************!*\
  !*** ./schema/menu.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nvar menu_1 = __webpack_require__(/*! @/enum/menu */ \"./enum/menu.ts\");\r\n__webpack_require__(/*! @/models/menu */ \"./models/menu.ts\");\r\nvar Menu = mongoose_1.model('Menu');\r\nvar MenuType = new graphql_1.GraphQLObjectType({\r\n    name: 'Menu',\r\n    fields: function () { return ({\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        },\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        icon: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        path: {\r\n            type: graphql_1.GraphQLString\r\n        },\r\n        availability: {\r\n            type: menu_1.AvailabilityEnum\r\n        },\r\n        typeMenu: {\r\n            type: menu_1.MenuEnum\r\n        }\r\n    }); }\r\n});\r\nexports.getTypeMenu = {\r\n    type: new graphql_1.GraphQLList(MenuType),\r\n    args: {\r\n        typeMenu: {\r\n            type: menu_1.MenuEnum\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return Menu.find({\r\n            typeMenu: args.typeMenu\r\n        });\r\n    }\r\n};\r\nexports.getMenu = {\r\n    type: new graphql_1.GraphQLList(MenuType),\r\n    resolve: function (parent, args) {\r\n        return Menu.find();\r\n    }\r\n};\r\nexports.addMenu = {\r\n    type: MenuType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        icon: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        path: {\r\n            type: graphql_1.GraphQLString\r\n        },\r\n        availability: {\r\n            type: menu_1.AvailabilityEnum\r\n        },\r\n        typeMenu: {\r\n            type: menu_1.MenuEnum\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var menu;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Menu.findOne({ title: args.title })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            menu = new Menu({\r\n                                title: args.title,\r\n                                icon: args.icon,\r\n                                path: args.path,\r\n                                availability: args.availability,\r\n                                typeMenu: args.typeMenu\r\n                            });\r\n                            return [2 /*return*/, menu.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.removeMenu = {\r\n    type: MenuType,\r\n    args: {\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Menu.findByIdAndRemove(args.id)];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.updateMenu = {\r\n    type: MenuType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        icon: {\r\n            type: graphql_1.GraphQLString\r\n        },\r\n        path: {\r\n            type: graphql_1.GraphQLString\r\n        },\r\n        availability: {\r\n            type: menu_1.AvailabilityEnum\r\n        },\r\n        typeMenu: {\r\n            type: menu_1.MenuEnum\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Menu.findOneAndUpdate({ title: args.title }, {\r\n                            $set: {\r\n                                title: args.title,\r\n                                icon: args.icon,\r\n                                path: args.path,\r\n                                availability: args.availability,\r\n                                typeMenu: args.typeMenu\r\n                            }\r\n                        }).setOptions({ omitUndefined: true })];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./schema/menu.ts?");

/***/ }),

/***/ "./schema/quote.ts":
/*!*************************!*\
  !*** ./schema/quote.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\n__webpack_require__(/*! @/models/quote */ \"./models/quote.ts\");\r\nvar Quote = mongoose_1.model('Quote');\r\nvar QuoteType = new graphql_1.GraphQLObjectType({\r\n    name: 'Quote',\r\n    fields: function () { return ({\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        },\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        text: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        }\r\n    }); }\r\n});\r\nexports.getQuote = {\r\n    type: new graphql_1.GraphQLList(QuoteType),\r\n    resolve: function (parent, args) {\r\n        return Quote.find();\r\n    }\r\n};\r\nexports.addQuote = {\r\n    type: QuoteType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        text: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var advantages;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Quote.findOne({ title: args.title })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            advantages = new Quote({\r\n                                title: args.title,\r\n                                text: args.text\r\n                            });\r\n                            return [2 /*return*/, advantages.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.removeQuote = {\r\n    type: QuoteType,\r\n    args: {\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Quote.findByIdAndRemove(args.id)];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.updateQuote = {\r\n    type: QuoteType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        text: {\r\n            type: graphql_1.GraphQLString\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Quote.findOneAndUpdate({ title: args.title }, {\r\n                            $set: {\r\n                                title: args.title,\r\n                                text: args.text\r\n                            }\r\n                        }).setOptions({ omitUndefined: true })];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./schema/quote.ts?");

/***/ }),

/***/ "./schema/sponsor.ts":
/*!***************************!*\
  !*** ./schema/sponsor.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\n__webpack_require__(/*! @/models/sponsor */ \"./models/sponsor.ts\");\r\nvar Sponsor = mongoose_1.model('Sponsor');\r\nvar SponsorType = new graphql_1.GraphQLObjectType({\r\n    name: 'Sponsor',\r\n    fields: function () { return ({\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        },\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        logotype: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        text: {\r\n            type: graphql_1.GraphQLString\r\n        }\r\n    }); }\r\n});\r\nexports.getSponsor = {\r\n    type: new graphql_1.GraphQLList(SponsorType),\r\n    resolve: function (parent, args) {\r\n        return Sponsor.find();\r\n    }\r\n};\r\nexports.addSponsor = {\r\n    type: SponsorType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        logotype: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        text: {\r\n            type: graphql_1.GraphQLString\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var advantages;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Sponsor.findOne({ title: args.title })];\r\n                    case 1:\r\n                        if ((_a.sent()) === null) {\r\n                            advantages = new Sponsor({\r\n                                title: args.title,\r\n                                logotype: args.logotype,\r\n                                text: args.text\r\n                            });\r\n                            return [2 /*return*/, advantages.save()];\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.removeSponsor = {\r\n    type: SponsorType,\r\n    args: {\r\n        id: {\r\n            type: graphql_1.GraphQLID\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Sponsor.findByIdAndRemove(args.id)];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\nexports.updateSponsor = {\r\n    type: SponsorType,\r\n    args: {\r\n        title: {\r\n            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)\r\n        },\r\n        logotype: {\r\n            type: graphql_1.GraphQLString\r\n        },\r\n        text: {\r\n            type: graphql_1.GraphQLString\r\n        }\r\n    },\r\n    resolve: function (parent, args) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Sponsor.findOneAndUpdate({ title: args.title }, {\r\n                            $set: {\r\n                                title: args.title,\r\n                                logotype: args.logotype,\r\n                                text: args.text\r\n                            }\r\n                        }).setOptions({ omitUndefined: true })];\r\n                    case 1: return [2 /*return*/, _a.sent()];\r\n                }\r\n            });\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./schema/sponsor.ts?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\temabit-lections-2019\\07-mikhail-biloshkyrskiyy\\CourseProject\\course-api\\app.ts */\"./app.ts\");\n\n\n//# sourceURL=webpack:///multi_./app.ts?");

/***/ }),

/***/ "connect-mongodb-session":
/*!******************************************!*\
  !*** external "connect-mongodb-session" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongodb-session\");\n\n//# sourceURL=webpack:///external_%22connect-mongodb-session%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ })

/******/ });