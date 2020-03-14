const fs = require("fs");
const path = require("path");
const ScanDir = require("./ScanDir_first");

const dir_name_from = "src_2";
const dir_name_to = "src_1";
const files = new Map();
const scan_dir = new ScanDir();

scan_dir.on("fileOpen", open_file_for_write);
scan_dir.on("fileRead", write_data_to_file);
scan_dir.on("fileClose", close_file);

scan_dir.scan(dir_name_from);

//---------------------------------------------------------------------

function open_file_for_write(err, file_name, path_to_file, file_handler = null, read_file = null) {

	if ( err ) {
		console.log("Error: " + err.message);
		return;
	}

	path_to_file = path.join(dir_name_to, path_to_file);
	fs.mkdirSync(path_to_file, { recursive: true });
	const file_path = path.join(path_to_file, file_name);
	
	fs.open(file_path, "w", (err, handler) => {

		if ( err ) {
			console.log("Error: " + err.message);
			read_file(false);
			return;
		}

		 files.set(file_handler.fd, handler);
		 console.log(`Open file for write: ${file_name} N: ${handler}`);
		 read_file(true);
	});
}

//---------------------------------------------------------------------

function write_data_to_file(err, file_handler, bytesRead = null, buffer = null, read_next = null) {
	
	const handler = files.get(file_handler.fd);
	
	if ( err ) {
		console.log("Error: " + err.message);
		close_file(file_handler);
		return;
	}

	console.log(`Write data to file N: ${handler}`);

	fs.write(handler, buffer, 0, bytesRead, err => {

		if ( err ) {
			console.log("Error: " + err.message);
			close_file(file_handler);
			read_next(false);
			return;
		}
		
		read_next(true);
	});
}

//---------------------------------------------------------------------

function close_file(file_handler) {

	if (!files.has(file_handler.fd)) return;

	const handler = files.get(file_handler.fd);
	fs.closeSync(handler);
	files.delete(file_handler.fd);
	console.log(`File has copied N: ${handler}`);
}

//---------------------------------------------------------------------
