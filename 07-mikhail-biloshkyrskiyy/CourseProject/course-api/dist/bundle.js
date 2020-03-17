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
/******/ 	var hotCurrentHash = "3dbc5f724325f6e11f76";
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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\r\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nvar express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\r\nvar passport_2 = __importDefault(__webpack_require__(/*! @/middleware/passport */ \"./middleware/passport.ts\"));\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\n// IMPORT ROUTES\r\nvar index_1 = __importDefault(__webpack_require__(/*! @/routes/index */ \"./routes/index.ts\"));\r\nvar branches_1 = __importDefault(__webpack_require__(/*! @/routes/branches */ \"./routes/branches.ts\"));\r\nvar tracking_1 = __importDefault(__webpack_require__(/*! @/routes/tracking */ \"./routes/tracking.ts\"));\r\nvar localities_1 = __importDefault(__webpack_require__(/*! @/routes/localities */ \"./routes/localities.ts\"));\r\nvar services_1 = __importDefault(__webpack_require__(/*! @/routes/services */ \"./routes/services.ts\"));\r\n// IMPORT GRAPHQL\r\nvar schema_1 = __webpack_require__(/*! @/schema */ \"./schema/index.ts\");\r\nvar app = express_1.default();\r\nvar MongoStore = __webpack_require__(/*! connect-mongodb-session */ \"connect-mongodb-session\")(express_session_1.default);\r\n// MONGOOSE\r\nmongoose_1.default.Promise = global.Promise;\r\nmongoose_1.default.connect(keys_1.default.MONGODB_URI, {\r\n    useUnifiedTopology: true,\r\n    useNewUrlParser: true\r\n})\r\n    .then(function () { return console.log('MongoDB connected.'); })\r\n    .catch(function (error) { return console.log(error); });\r\n// STORE\r\nvar store = new MongoStore({\r\n    collection: 'sessions',\r\n    uri: keys_1.default.MONGODB_URI\r\n});\r\n// EXPRESS MIDDLEWARE\r\napp.use(cors_1.default());\r\napp.use(passport_1.default.initialize());\r\napp.use(express_1.default.json());\r\napp.use(express_1.default.urlencoded({ extended: false }));\r\napp.use(express_session_1.default({\r\n    secret: 'some secret value',\r\n    resave: false,\r\n    saveUninitialized: false,\r\n    store: store\r\n}));\r\napp.use(morgan_1.default('dev'));\r\npassport_2.default(passport_1.default);\r\n// ROUTER\r\napp.use('/api/', index_1.default);\r\napp.use('/api/branches', branches_1.default);\r\napp.use('/api/tracking', tracking_1.default);\r\napp.use('/api/localities', localities_1.default);\r\napp.use('/api/services', services_1.default);\r\n// LISTEN PORT\r\nvar PORT_REST_API = process.env.PORT || 5000;\r\nvar PORT_GRAPHQL = process.env.PORT || 4000;\r\nvar server = new apollo_server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: schema_1.resolvers });\r\napp.listen(PORT_REST_API, function () {\r\n    console.log(\"Rest api lisening o \" + PORT_REST_API);\r\n});\r\nserver.listen(PORT_GRAPHQL).then(function (_a) {\r\n    var url = _a.url;\r\n    console.log(\"GraphQL ready at \" + url);\r\n});\r\n\n\n//# sourceURL=webpack:///./app.ts?");

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

/***/ "./enum/menu.ts":
/*!**********************!*\
  !*** ./enum/menu.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Availability;\r\n(function (Availability) {\r\n    Availability[\"NoRegistrations\"] = \"NoRegistrations\";\r\n    Availability[\"Registrations\"] = \"Registrations\";\r\n})(Availability = exports.Availability || (exports.Availability = {}));\r\nvar MenuType;\r\n(function (MenuType) {\r\n    MenuType[\"Base\"] = \"Base\";\r\n    MenuType[\"Declaration\"] = \"Declaration\";\r\n    MenuType[\"Office\"] = \"Office\";\r\n})(MenuType = exports.MenuType || (exports.MenuType = {}));\r\n\n\n//# sourceURL=webpack:///./enum/menu.ts?");

/***/ }),

/***/ "./middleware/passport.ts":
/*!********************************!*\
  !*** ./middleware/passport.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar passport_jwt_1 = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar keys_1 = __importDefault(__webpack_require__(/*! @/config/keys */ \"./config/keys.ts\"));\r\n__webpack_require__(/*! @/models/user */ \"./models/user.ts\");\r\nvar User = mongoose_1.model('User');\r\nvar options = {\r\n    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),\r\n    secretOrKey: keys_1.default.JWT\r\n};\r\nfunction default_1(passport) {\r\n    var _this = this;\r\n    passport.use(new passport_jwt_1.Strategy(options, function (payload, done) { return __awaiter(_this, void 0, void 0, function () {\r\n        var user;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, User.findById(payload.id)];\r\n                case 1:\r\n                    user = _a.sent();\r\n                    try {\r\n                        if (user) {\r\n                            done(null, user);\r\n                        }\r\n                        else {\r\n                            done(null, false);\r\n                        }\r\n                    }\r\n                    catch (err) {\r\n                        console.log(err);\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); }));\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack:///./middleware/passport.ts?");

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

/***/ "./models/article.ts":
/*!***************************!*\
  !*** ./models/article.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar Article;\r\n(function (Article) {\r\n    Article[\"Tariffs\"] = \"Tariffs\";\r\n})(Article || (Article = {}));\r\nvar ArticleSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    text: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    tags: {\r\n        type: Array(String),\r\n    },\r\n    typeArticle: {\r\n        type: Article,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('Article', ArticleSchema);\r\n\n\n//# sourceURL=webpack:///./models/article.ts?");

/***/ }),

/***/ "./models/calculation.ts":
/*!*******************************!*\
  !*** ./models/calculation.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar WeightRang;\r\n(function (WeightRang) {\r\n    WeightRang[WeightRang[\"XS\"] = 1] = \"XS\";\r\n    WeightRang[WeightRang[\"S\"] = 2] = \"S\";\r\n    WeightRang[WeightRang[\"M\"] = 3] = \"M\";\r\n    WeightRang[WeightRang[\"L\"] = 4] = \"L\";\r\n    WeightRang[WeightRang[\"XL\"] = 5] = \"XL\";\r\n    WeightRang[WeightRang[\"XXL\"] = 6] = \"XXL\";\r\n    WeightRang[WeightRang[\"XXXL\"] = 7] = \"XXXL\";\r\n})(WeightRang || (WeightRang = {}));\r\nvar LegthRang;\r\n(function (LegthRang) {\r\n    LegthRang[LegthRang[\"Short\"] = 1] = \"Short\";\r\n    LegthRang[LegthRang[\"Medium\"] = 2] = \"Medium\";\r\n    LegthRang[LegthRang[\"Long\"] = 3] = \"Long\";\r\n})(LegthRang || (LegthRang = {}));\r\nvar CalculationWeightSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 2,\r\n        required: true\r\n    },\r\n    type: {\r\n        type: WeightRang,\r\n        required: true\r\n    },\r\n    rang: {\r\n        type: Number,\r\n        required: true\r\n    }\r\n});\r\nvar CalculationLengthSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 2,\r\n        required: true\r\n    },\r\n    type: {\r\n        type: LegthRang,\r\n        required: true\r\n    },\r\n    rang: {\r\n        type: Number,\r\n        required: true\r\n    }\r\n});\r\nvar CalculationPriceSchema = new mongoose_1.Schema({\r\n    price: {\r\n        type: Number,\r\n        required: true\r\n    },\r\n    rang: {\r\n        type: Number,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('CalculationWeight', CalculationWeightSchema);\r\nmongoose_1.model('CalculationLegth', CalculationLengthSchema);\r\nmongoose_1.model('CalculationPrice', CalculationPriceSchema);\r\n\n\n//# sourceURL=webpack:///./models/calculation.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar ErrorSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    info: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    date: {\r\n        type: String,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('Error', ErrorSchema);\r\n\n\n//# sourceURL=webpack:///./models/error.ts?");

/***/ }),

/***/ "./models/menu.ts":
/*!************************!*\
  !*** ./models/menu.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar menu_1 = __webpack_require__(/*! @/enum/menu */ \"./enum/menu.ts\");\r\nvar MenuSchema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    icon: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    path: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    availability: {\r\n        type: menu_1.Availability,\r\n        required: true\r\n    },\r\n    typeMenu: {\r\n        type: menu_1.MenuType,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('Menu', MenuSchema);\r\n\n\n//# sourceURL=webpack:///./models/menu.ts?");

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

/***/ "./models/user.ts":
/*!************************!*\
  !*** ./models/user.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar AccessibilityType;\r\n(function (AccessibilityType) {\r\n    AccessibilityType[\"User\"] = \"User\";\r\n    AccessibilityType[\"Moderator\"] = \"Moderator\";\r\n    AccessibilityType[\"Administrator\"] = \"Administrator\";\r\n})(AccessibilityType || (AccessibilityType = {}));\r\nvar UserSchema = new mongoose_1.Schema({\r\n    login: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    accessibility: {\r\n        type: AccessibilityType,\r\n        required: true\r\n    },\r\n    password: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    },\r\n    email: {\r\n        type: String,\r\n        maxlength: 255,\r\n        minlength: 3,\r\n        required: true\r\n    }\r\n});\r\nmongoose_1.model('User', UserSchema);\r\n\n\n//# sourceURL=webpack:///./models/user.ts?");

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
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/advantages */ \"./models/advantages.ts\");\r\nvar Advantages = mongoose_1.model('Advantages');\r\nexports.AdvantagesType = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    type AdvantagesType {\\n        id: String,\\n        title: String,\\n        text: String,\\n        icon: String\\n    }\\n\\n    input AddAdvantages {\\n        id: String,\\n        title: String!,\\n        text: String!,\\n        icon: String!\\n    }\\n\\n    input UpdateAdvantages {\\n        id: String,\\n        title: String!,\\n        text: String,\\n        icon: String\\n    }\\n\"], [\"\\n    type AdvantagesType {\\n        id: String,\\n        title: String,\\n        text: String,\\n        icon: String\\n    }\\n\\n    input AddAdvantages {\\n        id: String,\\n        title: String!,\\n        text: String!,\\n        icon: String!\\n    }\\n\\n    input UpdateAdvantages {\\n        id: String,\\n        title: String!,\\n        text: String,\\n        icon: String\\n    }\\n\"])));\r\nexports.TypeDefsQuery = \"\\n    advantages: [AdvantagesType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addAdvantages(advantages: AddAdvantages!): AdvantagesType,\\n    removeAdvantages(id: String!): AdvantagesType,\\n    updateAdvantages(advantages: UpdateAdvantages!): AdvantagesType\\n\";\r\nexports.Query = {\r\n    advantages: function () { return Advantages.find(); }\r\n};\r\nexports.Mutation = {\r\n    addAdvantages: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var advantages;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Advantages.findOne({ title: args.advantages.title })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        advantages = new Advantages({\r\n                            title: args.advantages.title,\r\n                            text: args.advantages.text,\r\n                            icon: args.advantages.icon\r\n                        });\r\n                        return [2 /*return*/, advantages.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeAdvantages: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Advantages.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateAdvantages: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Advantages.findOneAndUpdate({ title: args.advantages.title }, {\r\n                        $set: {\r\n                            title: args.advantages.title,\r\n                            text: args.advantages.text,\r\n                            icon: args.advantages.icon\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./schema/advantages.ts?");

/***/ }),

/***/ "./schema/article.ts":
/*!***************************!*\
  !*** ./schema/article.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/article */ \"./models/article.ts\");\r\nvar Article = mongoose_1.model('Article');\r\nvar EnumArticleTypeGql = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    enum EnumArticleType {\\n        Tariffs\\n    }\\n\"], [\"\\n    enum EnumArticleType {\\n        Tariffs\\n    }\\n\"])));\r\nexports.ArticleType = apollo_server_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    \", \"\\n\\n    type ArticleType {\\n        id: String,\\n        title: String,\\n        text: String,\\n        tags: String,\\n        typeArticle: EnumArticleType\\n    }\\n\\n    input AddArticle {\\n        id: String,\\n        title: String!,\\n        text: String!,\\n        tags: String!,\\n        typeArticle: EnumArticleType!\\n    }\\n\\n    input UpdateArticle {\\n        id: String,\\n        title: String!,\\n        text: String,\\n        tags: String,\\n        typeArticle: EnumArticleType\\n    }\\n\"], [\"\\n    \", \"\\n\\n    type ArticleType {\\n        id: String,\\n        title: String,\\n        text: String,\\n        tags: String,\\n        typeArticle: EnumArticleType\\n    }\\n\\n    input AddArticle {\\n        id: String,\\n        title: String!,\\n        text: String!,\\n        tags: String!,\\n        typeArticle: EnumArticleType!\\n    }\\n\\n    input UpdateArticle {\\n        id: String,\\n        title: String!,\\n        text: String,\\n        tags: String,\\n        typeArticle: EnumArticleType\\n    }\\n\"])), EnumArticleTypeGql);\r\nexports.TypeDefsQuery = \"\\n    article: [ArticleType],\\n    getTypeArticle(type: EnumArticleType!): [ArticleType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addArticle(article: AddArticle!): ArticleType,\\n    removeArticle(id: String!): ArticleType,\\n    updateArticle(article: UpdateArticle!): ArticleType\\n\";\r\nexports.Query = {\r\n    article: function () { return Article.find(); },\r\n    getTypeArticle: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Article.find({ typeArticle: args.type })];\r\n            case 1: return [2 /*return*/, _a.sent()];\r\n        }\r\n    }); }); },\r\n};\r\nexports.Mutation = {\r\n    addArticle: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var article;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Article.findOne({ title: args.article.title })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        article = new Article({\r\n                            title: args.article.title,\r\n                            text: args.article.text,\r\n                            tags: args.article.tags,\r\n                            typeArticle: args.article.typeArticle\r\n                        });\r\n                        return [2 /*return*/, article.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeArticle: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Article.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateArticle: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Article.findOneAndUpdate({ title: args.article.title }, {\r\n                        $set: {\r\n                            title: args.article.title,\r\n                            text: args.article.text,\r\n                            tags: args.article.tags,\r\n                            typeArticle: args.article.typeArticle\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1, templateObject_2;\r\n\n\n//# sourceURL=webpack:///./schema/article.ts?");

/***/ }),

/***/ "./schema/calculation.ts":
/*!*******************************!*\
  !*** ./schema/calculation.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/calculation */ \"./models/calculation.ts\");\r\nvar CalculationWeight = mongoose_1.model('CalculationWeight');\r\nvar CalculationLength = mongoose_1.model('CalculationLegth');\r\nvar CalculationPrice = mongoose_1.model('CalculationPrice');\r\nvar EnumCalculationWeightRangGql = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    enum EnumCalculationWeightRang {\\n        XS,\\n        S,\\n        M,\\n        L,\\n        XL,\\n        XXL,\\n        XXXL\\n    }\\n\"], [\"\\n    enum EnumCalculationWeightRang {\\n        XS,\\n        S,\\n        M,\\n        L,\\n        XL,\\n        XXL,\\n        XXXL\\n    }\\n\"])));\r\nvar EnumCalculationLengthRangGql = apollo_server_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    enum EnumCalculationLengthRang {\\n        Short,\\n        Medium,\\n        Long\\n    }\\n\"], [\"\\n    enum EnumCalculationLengthRang {\\n        Short,\\n        Medium,\\n        Long\\n    }\\n\"])));\r\nexports.CalculationType = apollo_server_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n    \", \"\\n    \", \"\\n\\n    type CalculationWeightType {\\n        id: String,\\n        title: String,\\n        type: EnumCalculationWeightRang,\\n        rang: Int\\n    }\\n\\n    type CalculationLengthType {\\n        id: String,\\n        title: String,\\n        type: EnumCalculationLengthRang,\\n        rang: Int\\n    }\\n\\n    type CalculationPriceType {\\n        id: String,\\n        price: Int,\\n        rang: Int\\n    }\\n\\n    input AddCalculationWeight {\\n        id: String,\\n        title: String!,\\n        type: EnumCalculationWeightRang!,\\n        rang: Int!\\n    }\\n\\n    input UpdateCalculationWeight {\\n        id: String,\\n        title: String!,\\n        type: EnumCalculationWeightRang!,\\n        rang: Int\\n    }\\n\\n    input AddCalculationLength {\\n        id: String,\\n        title: String!,\\n        type: EnumCalculationLengthRang!,\\n        rang: Int!\\n    }\\n\\n    input UpdateCalculationLength {\\n        id: String,\\n        title: String!,\\n        type: EnumCalculationLengthRang!,\\n        rang: Int\\n    }\\n\\n    input AddCalculationPrice {\\n        id: String,\\n        price: Int!,\\n        rang: Int!\\n    }\\n\\n    input UpdateCalculationPrice {\\n        id: String,\\n        price: Int!,\\n        rang: Int!\\n    }\\n\"], [\"\\n    \", \"\\n    \", \"\\n\\n    type CalculationWeightType {\\n        id: String,\\n        title: String,\\n        type: EnumCalculationWeightRang,\\n        rang: Int\\n    }\\n\\n    type CalculationLengthType {\\n        id: String,\\n        title: String,\\n        type: EnumCalculationLengthRang,\\n        rang: Int\\n    }\\n\\n    type CalculationPriceType {\\n        id: String,\\n        price: Int,\\n        rang: Int\\n    }\\n\\n    input AddCalculationWeight {\\n        id: String,\\n        title: String!,\\n        type: EnumCalculationWeightRang!,\\n        rang: Int!\\n    }\\n\\n    input UpdateCalculationWeight {\\n        id: String,\\n        title: String!,\\n        type: EnumCalculationWeightRang!,\\n        rang: Int\\n    }\\n\\n    input AddCalculationLength {\\n        id: String,\\n        title: String!,\\n        type: EnumCalculationLengthRang!,\\n        rang: Int!\\n    }\\n\\n    input UpdateCalculationLength {\\n        id: String,\\n        title: String!,\\n        type: EnumCalculationLengthRang!,\\n        rang: Int\\n    }\\n\\n    input AddCalculationPrice {\\n        id: String,\\n        price: Int!,\\n        rang: Int!\\n    }\\n\\n    input UpdateCalculationPrice {\\n        id: String,\\n        price: Int!,\\n        rang: Int!\\n    }\\n\"])), EnumCalculationWeightRangGql, EnumCalculationLengthRangGql);\r\nexports.TypeDefsQuery = \"\\n    calculationWeight: [CalculationWeightType],\\n    calculationLength: [CalculationLengthType],\\n    calculationPrice: [CalculationPriceType],\\n    getTypeCalculationWeight(type: EnumCalculationWeightRang!): [CalculationWeightType]\\n    getTypeCalculationLength(type: EnumCalculationLengthRang!): [CalculationLengthType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addCalculationWeight(calculationWeight: AddCalculationWeight!): CalculationWeightType,\\n    removeCalculationWeight(id: String!): CalculationWeightType,\\n    updateCalculationWeight(calculationWeight: AddCalculationWeight!): CalculationWeightType,\\n\\n    addCalculationLength(calculationLength: AddCalculationLength!): CalculationLengthType,\\n    removeCalculationLength(id: String!): CalculationLengthType,\\n    updateCalculationLength(calculationLength: AddCalculationLength!): CalculationLengthType,\\n\\n    addCalculationPrice(calculationPrice: AddCalculationPrice!): CalculationPriceType,\\n    removeCalculationPrice(id: String!): CalculationPriceType,\\n    updateCalculationPrice(calculationPrice: AddCalculationPrice!): CalculationPriceType\\n\";\r\nexports.Query = {\r\n    calculationWeight: function () { return CalculationWeight.find(); },\r\n    calculationLength: function () { return CalculationLength.find(); },\r\n    calculationPrice: function () { return CalculationPrice.find(); },\r\n    getTypeCalculationWeight: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, CalculationWeight.find({ type: args.type })];\r\n            case 1: return [2 /*return*/, _a.sent()];\r\n        }\r\n    }); }); },\r\n    getTypeCalculationLength: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, CalculationLength.find({ type: args.type })];\r\n            case 1: return [2 /*return*/, _a.sent()];\r\n        }\r\n    }); }); }\r\n};\r\nexports.Mutation = {\r\n    addCalculationWeight: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var calculationWeight;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationWeight.findOne({ title: args.calculationWeight.title, type: args.calculationWeight.type })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        calculationWeight = new CalculationWeight({\r\n                            title: args.calculationWeight.title,\r\n                            type: args.calculationWeight.type,\r\n                            rang: args.calculationWeight.rang\r\n                        });\r\n                        return [2 /*return*/, calculationWeight.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    addCalculationLength: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var calculationLength;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationLength.findOne({ title: args.calculationLength.title, type: args.calculationLength.type })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        calculationLength = new CalculationLength({\r\n                            title: args.calculationLength.title,\r\n                            type: args.calculationLength.type,\r\n                            rang: args.calculationLength.rang\r\n                        });\r\n                        return [2 /*return*/, calculationLength.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    addCalculationPrice: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var calculationPrice;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationPrice.findOne({ rang: args.calculationPrice.rang })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        calculationPrice = new CalculationPrice({\r\n                            price: args.calculationPrice.price,\r\n                            rang: args.calculationPrice.rang\r\n                        });\r\n                        return [2 /*return*/, calculationPrice.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeCalculationWeight: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationWeight.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    removeCalculationLength: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationLength.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    removeCalculationPrice: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationPrice.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateCalculationWeight: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationWeight.findOneAndUpdate({ title: args.calculationWeight.title, type: args.calculationWeight.type }, {\r\n                        $set: {\r\n                            title: args.calculationWeight.title,\r\n                            type: args.calculationWeight.type,\r\n                            rang: args.calculationWeight.rang\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateCalculationLength: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationLength.findOneAndUpdate({ title: args.calculationLength.title, type: args.calculationLength.type }, {\r\n                        $set: {\r\n                            title: args.calculationLength.title,\r\n                            type: args.calculationLength.type,\r\n                            rang: args.calculationLength.rang\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateCalculationPrice: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, CalculationPrice.findOneAndUpdate({ rang: args.calculationPrice.rang }, {\r\n                        $set: {\r\n                            price: args.calculationPrice.price,\r\n                            rang: args.calculationPrice.rang\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1, templateObject_2, templateObject_3;\r\n\n\n//# sourceURL=webpack:///./schema/calculation.ts?");

/***/ }),

/***/ "./schema/command.ts":
/*!***************************!*\
  !*** ./schema/command.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/command */ \"./models/command.ts\");\r\nvar Command = mongoose_1.model('Command');\r\nexports.CommandType = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    type CommandType {\\n        id: String,\\n        title: String,\\n        position: String,\\n        img: String\\n    }\\n\\n    input AddCommand {\\n        id: String,\\n        title: String!,\\n        position: String!,\\n        img: String!\\n    }\\n\\n    input UpdateCommand {\\n        id: String,\\n        title: String!,\\n        position: String,\\n        img: String\\n    }\\n\"], [\"\\n    type CommandType {\\n        id: String,\\n        title: String,\\n        position: String,\\n        img: String\\n    }\\n\\n    input AddCommand {\\n        id: String,\\n        title: String!,\\n        position: String!,\\n        img: String!\\n    }\\n\\n    input UpdateCommand {\\n        id: String,\\n        title: String!,\\n        position: String,\\n        img: String\\n    }\\n\"])));\r\nexports.TypeDefsQuery = \"\\n    command: [CommandType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addCommand(command: AddCommand!): CommandType,\\n    removeCommand(id: String!): CommandType,\\n    updateCommand(command: UpdateCommand!): CommandType\\n\";\r\nexports.Query = {\r\n    command: function () { return Command.find(); }\r\n};\r\nexports.Mutation = {\r\n    addCommand: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var command;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Command.findOne({ title: args.command.title })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        command = new Command({\r\n                            title: args.command.title,\r\n                            position: args.command.position,\r\n                            img: args.command.img\r\n                        });\r\n                        return [2 /*return*/, command.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeCommand: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Command.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateCommand: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Command.findOneAndUpdate({ title: args.command.title }, {\r\n                        $set: {\r\n                            title: args.command.title,\r\n                            position: args.command.position,\r\n                            img: args.command.img\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./schema/command.ts?");

/***/ }),

/***/ "./schema/error.ts":
/*!*************************!*\
  !*** ./schema/error.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/error */ \"./models/error.ts\");\r\nvar Error = mongoose_1.model('Error');\r\nexports.ErrorType = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    type ErrorType {\\n        id: String,\\n        title: String,\\n        info: String,\\n        date: String\\n    }\\n\\n    input AddError {\\n        id: String,\\n        title: String!,\\n        info: String!,\\n        date: String!\\n    }\\n\\n    input UpdateError {\\n        id: String,\\n        title: String!,\\n        info: String,\\n        date: String\\n    }\\n\"], [\"\\n    type ErrorType {\\n        id: String,\\n        title: String,\\n        info: String,\\n        date: String\\n    }\\n\\n    input AddError {\\n        id: String,\\n        title: String!,\\n        info: String!,\\n        date: String!\\n    }\\n\\n    input UpdateError {\\n        id: String,\\n        title: String!,\\n        info: String,\\n        date: String\\n    }\\n\"])));\r\nexports.TypeDefsQuery = \"\\n    error: [ErrorType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addError(error: AddError!): ErrorType,\\n    removeError(id: String!): ErrorType,\\n    updateError(error: UpdateError!): ErrorType\\n\";\r\nexports.Query = {\r\n    error: function () { return Error.find(); }\r\n};\r\nexports.Mutation = {\r\n    addError: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var error;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Error.findOne({ title: args.error.title })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        error = new Error({\r\n                            title: args.error.title,\r\n                            info: args.error.info,\r\n                            date: args.error.date\r\n                        });\r\n                        return [2 /*return*/, error.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeError: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Error.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateError: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Error.findOneAndUpdate({ error: args.error.title }, {\r\n                        $set: {\r\n                            title: args.error.title,\r\n                            info: args.error.info,\r\n                            date: args.error.date\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./schema/error.ts?");

/***/ }),

/***/ "./schema/index.ts":
/*!*************************!*\
  !*** ./schema/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar menu_1 = __webpack_require__(/*! @/schema/menu */ \"./schema/menu.ts\");\r\nvar quote_1 = __webpack_require__(/*! @/schema/quote */ \"./schema/quote.ts\");\r\nvar advantages_1 = __webpack_require__(/*! @/schema/advantages */ \"./schema/advantages.ts\");\r\nvar sponsor_1 = __webpack_require__(/*! @/schema/sponsor */ \"./schema/sponsor.ts\");\r\nvar article_1 = __webpack_require__(/*! @/schema/article */ \"./schema/article.ts\");\r\nvar calculation_1 = __webpack_require__(/*! @/schema/calculation */ \"./schema/calculation.ts\");\r\nvar command_1 = __webpack_require__(/*! @/schema/command */ \"./schema/command.ts\");\r\nvar error_1 = __webpack_require__(/*! @/schema/error */ \"./schema/error.ts\");\r\nvar user_1 = __webpack_require__(/*! @/schema/user */ \"./schema/user.ts\");\r\nvar TypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n\\n    type Query {\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n    }\\n\\n    type Mutation {\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n    }\\n\"], [\"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n    \", \"\\n\\n    type Query {\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n    }\\n\\n    type Mutation {\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n        \", \"\\n    }\\n\"])), menu_1.MenuType, quote_1.QuoteType, advantages_1.AdvantagesType, sponsor_1.SponsorType, article_1.ArticleType, calculation_1.CalculationType, command_1.CommandType, error_1.ErrorType, user_1.UserType, menu_1.TypeDefsQuery, quote_1.TypeDefsQuery, advantages_1.TypeDefsQuery, sponsor_1.TypeDefsQuery, article_1.TypeDefsQuery, calculation_1.TypeDefsQuery, command_1.TypeDefsQuery, error_1.TypeDefsQuery, user_1.TypeDefsQuery, menu_1.TypeDefsMutation, quote_1.TypeDefsMutation, advantages_1.TypeDefsMutation, sponsor_1.TypeDefsMutation, article_1.TypeDefsMutation, calculation_1.TypeDefsMutation, command_1.TypeDefsMutation, error_1.TypeDefsMutation, user_1.TypeDefsMutation);\r\nvar Resolvers = {\r\n    Query: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, menu_1.Query), quote_1.Query), advantages_1.Query), sponsor_1.Query), article_1.Query), calculation_1.Query), command_1.Query), error_1.Query), user_1.Query),\r\n    Mutation: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, menu_1.Mutation), quote_1.Mutation), advantages_1.Mutation), sponsor_1.Mutation), article_1.Mutation), calculation_1.Mutation), command_1.Mutation), error_1.Mutation), user_1.Mutation)\r\n};\r\nexports.typeDefs = __assign({}, TypeDefs);\r\nexports.resolvers = __assign({}, Resolvers);\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./schema/index.ts?");

/***/ }),

/***/ "./schema/menu.ts":
/*!************************!*\
  !*** ./schema/menu.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/menu */ \"./models/menu.ts\");\r\nvar Menu = mongoose_1.model('Menu');\r\nvar EnumAvailabilityGql = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    enum EnumAvailability {\\n        NoRegistrations,\\n        Registrations\\n    }\\n\"], [\"\\n    enum EnumAvailability {\\n        NoRegistrations,\\n        Registrations\\n    }\\n\"])));\r\nvar EnumMenuTypeGql = apollo_server_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    enum EnumMenuType {\\n        Base,\\n        Declaration,\\n        Office\\n    }\\n\"], [\"\\n    enum EnumMenuType {\\n        Base,\\n        Declaration,\\n        Office\\n    }\\n\"])));\r\nexports.MenuType = apollo_server_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n    \", \"\\n    \", \"\\n\\n    type MenuType {\\n        id: String,\\n        title: String,\\n        icon: String,\\n        path: String,\\n        availability: EnumAvailability\\n        typeMenu: EnumMenuType\\n    }\\n\\n    input AddMenu {\\n        id: String,\\n        title: String!,\\n        icon: String!,\\n        path: String!,\\n        availability: EnumAvailability!,\\n        typeMenu: EnumMenuType!\\n    }\\n\\n    input UpdateMenu {\\n        id: String,\\n        title: String!,\\n        icon: String,\\n        path: String,\\n        availability: EnumAvailability,\\n        typeMenu: EnumMenuType\\n    }\\n\"], [\"\\n    \", \"\\n    \", \"\\n\\n    type MenuType {\\n        id: String,\\n        title: String,\\n        icon: String,\\n        path: String,\\n        availability: EnumAvailability\\n        typeMenu: EnumMenuType\\n    }\\n\\n    input AddMenu {\\n        id: String,\\n        title: String!,\\n        icon: String!,\\n        path: String!,\\n        availability: EnumAvailability!,\\n        typeMenu: EnumMenuType!\\n    }\\n\\n    input UpdateMenu {\\n        id: String,\\n        title: String!,\\n        icon: String,\\n        path: String,\\n        availability: EnumAvailability,\\n        typeMenu: EnumMenuType\\n    }\\n\"])), EnumAvailabilityGql, EnumMenuTypeGql);\r\nexports.TypeDefsQuery = \"\\n    menu: [MenuType],\\n    getTypeMenu(type: EnumMenuType!): [MenuType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addMenu(menu: AddMenu!): MenuType,\\n    removeMenu(id: String!): MenuType,\\n    updateMenu(menu: UpdateMenu!): MenuType\\n\";\r\nexports.Query = {\r\n    menu: function () { return Menu.find(); },\r\n    getTypeMenu: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Menu.find({ typeMenu: args.type })];\r\n            case 1: return [2 /*return*/, _a.sent()];\r\n        }\r\n    }); }); },\r\n};\r\nexports.Mutation = {\r\n    addMenu: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var menu;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Menu.findOne({ title: args.menu.title })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        menu = new Menu({\r\n                            title: args.menu.title,\r\n                            icon: args.menu.icon,\r\n                            path: args.menu.path,\r\n                            availability: args.menu.availability,\r\n                            typeMenu: args.menu.typeMenu\r\n                        });\r\n                        return [2 /*return*/, menu.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeMenu: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Menu.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateMenu: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Menu.findOneAndUpdate({ title: args.menu.title }, {\r\n                        $set: {\r\n                            title: args.menu.title,\r\n                            icon: args.menu.icon,\r\n                            path: args.menu.path,\r\n                            availability: args.menu.availability,\r\n                            typeMenu: args.menu.typeMenu\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1, templateObject_2, templateObject_3;\r\n\n\n//# sourceURL=webpack:///./schema/menu.ts?");

/***/ }),

/***/ "./schema/quote.ts":
/*!*************************!*\
  !*** ./schema/quote.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/quote */ \"./models/quote.ts\");\r\nvar Quote = mongoose_1.model('Quote');\r\nexports.QuoteType = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    type QuoteType {\\n        id: String,\\n        title: String,\\n        text: String\\n    }\\n\\n    input AddQuote {\\n        id: String,\\n        title: String!,\\n        text: String!\\n    }\\n\\n    input UpdateQuote {\\n        id: String,\\n        title: String!,\\n        text: String\\n    }\\n\"], [\"\\n    type QuoteType {\\n        id: String,\\n        title: String,\\n        text: String\\n    }\\n\\n    input AddQuote {\\n        id: String,\\n        title: String!,\\n        text: String!\\n    }\\n\\n    input UpdateQuote {\\n        id: String,\\n        title: String!,\\n        text: String\\n    }\\n\"])));\r\nexports.TypeDefsQuery = \"\\n    quote: [QuoteType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addQuote(quote: AddQuote!): QuoteType,\\n    removeQuote(id: String!): QuoteType,\\n    updateQuote(quote: UpdateQuote!): QuoteType\\n\";\r\nexports.Query = {\r\n    quote: function () { return Quote.find(); }\r\n};\r\nexports.Mutation = {\r\n    addQuote: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var quote;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Quote.findOne({ title: args.quote.title })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        quote = new Quote({\r\n                            title: args.quote.title,\r\n                            text: args.quote.text\r\n                        });\r\n                        return [2 /*return*/, quote.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeQuote: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Quote.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateQuote: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Quote.findOneAndUpdate({ title: args.quote.title }, {\r\n                        $set: {\r\n                            title: args.quote.title,\r\n                            text: args.quote.text\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./schema/quote.ts?");

/***/ }),

/***/ "./schema/sponsor.ts":
/*!***************************!*\
  !*** ./schema/sponsor.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/sponsor */ \"./models/sponsor.ts\");\r\nvar Sponsor = mongoose_1.model('Sponsor');\r\nexports.SponsorType = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    type SponsorType {\\n        id: String,\\n        title: String,\\n        logotype: String,\\n        text: String\\n    }\\n\\n    input AddSponsor {\\n        id: String,\\n        title: String!,\\n        logotype: String!,\\n        text: String!\\n    }\\n\\n    input UpdateSponsor {\\n        id: String,\\n        title: String!,\\n        logotype: String,\\n        text: String\\n    }\\n\"], [\"\\n    type SponsorType {\\n        id: String,\\n        title: String,\\n        logotype: String,\\n        text: String\\n    }\\n\\n    input AddSponsor {\\n        id: String,\\n        title: String!,\\n        logotype: String!,\\n        text: String!\\n    }\\n\\n    input UpdateSponsor {\\n        id: String,\\n        title: String!,\\n        logotype: String,\\n        text: String\\n    }\\n\"])));\r\nexports.TypeDefsQuery = \"\\n    sponsor: [SponsorType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addSponsor(sponsor: AddSponsor!): SponsorType,\\n    removeSponsor(id: String!): SponsorType,\\n    updateSponsor(sponsor: UpdateSponsor!): SponsorType\\n\";\r\nexports.Query = {\r\n    sponsor: function () { return Sponsor.find(); }\r\n};\r\nexports.Mutation = {\r\n    addSponsor: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var sponsor;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Sponsor.findOne({ title: args.sponsor.title })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        sponsor = new Sponsor({\r\n                            title: args.sponsor.title,\r\n                            text: args.sponsor.text,\r\n                            logotype: args.sponsor.logotype\r\n                        });\r\n                        return [2 /*return*/, sponsor.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeSponsor: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Sponsor.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateSponsor: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, Sponsor.findOneAndUpdate({ title: args.sponsor.title }, {\r\n                        $set: {\r\n                            title: args.sponsor.title,\r\n                            text: args.sponsor.text,\r\n                            logotype: args.sponsor.logotype\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1;\r\n\n\n//# sourceURL=webpack:///./schema/sponsor.ts?");

/***/ }),

/***/ "./schema/user.ts":
/*!************************!*\
  !*** ./schema/user.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar apollo_server_1 = __webpack_require__(/*! apollo-server */ \"apollo-server\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n__webpack_require__(/*! @/models/user */ \"./models/user.ts\");\r\nvar User = mongoose_1.model('User');\r\nvar EnumUserTypeGql = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    enum EnumUserType {\\n        User,\\n        Moderator,\\n        Administrator\\n    }\\n\"], [\"\\n    enum EnumUserType {\\n        User,\\n        Moderator,\\n        Administrator\\n    }\\n\"])));\r\nexports.UserType = apollo_server_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    \", \"\\n\\n    type UserType {\\n        id: String,\\n        login: String,\\n        accessibility: EnumUserType,\\n        password: String,\\n        email: String\\n    }\\n\\n    input AddUser {\\n        id: String,\\n        login: String!,\\n        accessibility: EnumUserType,\\n        password: String,\\n        email: String\\n    }\\n\\n    input UpdateUser {\\n        id: String,\\n        login: String!,\\n        accessibility: EnumUserType!,\\n        password: String!,\\n        email: String!\\n    }\\n\"], [\"\\n    \", \"\\n\\n    type UserType {\\n        id: String,\\n        login: String,\\n        accessibility: EnumUserType,\\n        password: String,\\n        email: String\\n    }\\n\\n    input AddUser {\\n        id: String,\\n        login: String!,\\n        accessibility: EnumUserType,\\n        password: String,\\n        email: String\\n    }\\n\\n    input UpdateUser {\\n        id: String,\\n        login: String!,\\n        accessibility: EnumUserType!,\\n        password: String!,\\n        email: String!\\n    }\\n\"])), EnumUserTypeGql);\r\nexports.TypeDefsQuery = \"\\n    user: [UserType],\\n    getTypeUser(type: EnumUserType!): [UserType]\\n\";\r\nexports.TypeDefsMutation = \"\\n    addUser(user: AddUser!): UserType,\\n    removeUser(id: String!): UserType,\\n    updateUser(user: UpdateUser!): UserType\\n\";\r\nexports.Query = {\r\n    user: function () { return User.find(); }\r\n};\r\nexports.Mutation = {\r\n    addUser: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var user;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, User.findOne({ login: args.user.login })];\r\n                case 1:\r\n                    if ((_a.sent()) === null) {\r\n                        user = new User({\r\n                            login: args.user.login,\r\n                            accessibility: args.user.accessibility,\r\n                            password: args.user.password,\r\n                            email: args.user.email\r\n                        });\r\n                        return [2 /*return*/, user.save()];\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); },\r\n    removeUser: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, User.findByIdAndRemove(args.id)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); },\r\n    updateUser: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, User.findOneAndUpdate({ login: args.user.login }, {\r\n                        $set: {\r\n                            login: args.user.login,\r\n                            accessibility: args.user.accessibility,\r\n                            password: args.user.password,\r\n                            email: args.user.email\r\n                        }\r\n                    }).setOptions({ omitUndefined: true })];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    }); }\r\n};\r\nvar templateObject_1, templateObject_2;\r\n\n\n//# sourceURL=webpack:///./schema/user.ts?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\temabit-lections-2019\\07-mikhail-biloshkyrskiyy\\CourseProject\\course-api\\app.ts */\"./app.ts\");\n\n\n//# sourceURL=webpack:///multi_./app.ts?");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server\");\n\n//# sourceURL=webpack:///external_%22apollo-server%22?");

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

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

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