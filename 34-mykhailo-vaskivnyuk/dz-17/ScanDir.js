const fs = require("fs");
const path = require("path");
const EventEmmiter = require("events");

//---------------------------------------------------------------------

class ScanDir1 {

	constructor() {
		this.dir_to_scan = "";
		this.emmiter = new EventEmmiter();
	}

	scan (dir_name) {
		this.dir_to_scan = dir_name;
		this.scan_dir(dir_name);
	}

	on (event, listener) {
		this.emmiter.on(event, listener);
	}

	async scan_dir (dir_name) {

		const dir = await fs.promises.opendir(dir_name);
	
		for await (const dirent of dir) {
	
			const dirent_path = path.join(dir.path, dirent.name);
	
			if ( dirent.isDirectory() ) {
				this.scan_dir(dirent_path);
			} else {
				fs.promises.open(dirent_path)
				.then( file_handler => {
					console.log("Open file for read: " + dirent_path);
					this.emmiter.emit("fileOpen", file_handler, dirent_path);
				})
				.catch(console.log);
			}
		}
	}
}

//---------------------------------------------------------------------

class ScanDir2 {

	constructor() {
		this.dir_to_scan = "";
		this.emmiter = new EventEmmiter();
	}

	scan (dir_name) {
		this.dir_to_scan = dir_name;
		this.scan_dir(dir_name);
	}

	on (event, listener) {
		this.emmiter.on(event, listener);
	}

	async scan_dir (dir_name) {

		const dir = await fs.promises.opendir(dir_name);
	
		for await (const dirent of dir) {
			const dirent_path = path.join(dir.path, dirent.name);
	
			if ( dirent.isDirectory() ) {
				this.scan_dir(dirent_path);
				continue;
			}

			console.log("File to copy: " + dirent_path);
			this.emmiter.emit("fileOpen", dirent_path);
		}
	}
}

class ScanDir3 {

	constructor() {
		this.dir_to_scan = "";
		this.emmiter = new EventEmmiter();
	}

	scan (dir_name) {
		this.dir_to_scan = dir_name;
		this.scan_dir(dir_name);
	}

	on (event, listener) {
		this.emmiter.on(event, listener);
	}

	async scan_dir (dir_name) {

		const dir = await fs.promises.opendir(dir_name);
	
		for await (const dirent of dir) {
	
			const dirent_path = path.join(dir.path, dirent.name);
	
			if ( dirent.isDirectory() ) {
				this.scan_dir(dirent_path);
			} else {
				const stream = fs.createReadStream(dirent_path);

				stream.on("ready", () => {
					console.log("Open file for read: " + dirent_path);
					this.emmiter.emit("fileOpen", stream, dirent_path);
				});
					
				stream.on("error", console.log);
			}
		}
	}
}

//---------------------------------------------------------------------

module.exports = { ScanDir1, ScanDir2, ScanDir3 };

//---------------------------------------------------------------------
