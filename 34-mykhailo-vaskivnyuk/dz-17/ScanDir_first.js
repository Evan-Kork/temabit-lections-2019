const fs = require("fs");
const path = require("path");
const EventEmmiter = require("events");

//---------------------------------------------------------------------

class ScanDir {

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
				const file_name = dirent.name;
				const file_path = dirent_path;
				const path_to_file = path.relative(this.dir_to_scan, dir.path);
				const buffer = Buffer.alloc(1024);
				let file_handler;
	
				try {

					file_handler = await fs.promises.open(file_path);
				
					console.log(`Open file for read: ${path_to_file} / ${file_name} N: ${file_handler.fd}`);
	
					this.emmiter.emit("fileOpen", null, file_name, path_to_file, file_handler,
						(can_read) => {
							if (can_read) {
								this.read_file(file_handler, file_name, buffer)
							} else {
								fs.closeSync(file_handler.fd);
							}
						}
					);

				} catch (err) {

					this.emmiter.emit("fileOpen", err, file_name, path_to_file);

				}
			}
		}
	}

	read_file(file_handler, file_name, buffer) {

		fs.read(file_handler.fd, buffer, 0, 1024, null, (err, bytesRead, buffer) => {
			
			console.log(`Read file data: ${file_name} N: ${file_handler.fd}`);
			
			if ( err ) {
				
				this.emmiter.emit("fileRead",
					err,
					file_handler
				);

				this.close_file (file_handler);

				return;					
			}
			
			if ( !bytesRead ) {
				this.close_file(file_handler);
				return;
			}

			this.emmiter.emit("fileRead",
					err,
					file_handler,
					bytesRead,
					buffer,
					(read_next) => { 
						if (read_next) {
							this.read_file(file_handler, file_name, buffer);
						} else {
							this.close_file (file_handler);
						}
					}
			);
		});
	}

	close_file (file_handler) {
	
		fs.closeSync(file_handler.fd);
		this.emmiter.emit("fileClose", file_handler);
	}
}


//---------------------------------------------------------------------

module.exports = ScanDir;

//---------------------------------------------------------------------