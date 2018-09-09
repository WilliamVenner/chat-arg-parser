const arg_parser_regex = /(?:"(.+?)" |'(.+?)' |(.+?) )/;
module.exports = function(cmd_prefix, input) {
	// check whether the input is a command
	if (input[0] === cmd_prefix) {
		let cmd;
		let args = [];
		
		// parse every space
		let unparsed_args = input.split(" ");
		cmd = unparsed_args[0].substr(cmd_prefix.length);
		
		// if the command itself is empty, the input was not a command
		if (cmd.length === 0) return false;
		
		// check whether there's actually arguments
		if (unparsed_args.length > 1) {
			// remove the command from our arguments array
			unparsed_args = unparsed_args.splice(1);
			// start a while loop so we can Regex exec each argument
			while (unparsed_args.length > 0) {
				// our Regex requires a space at the end of every argument, so add one if it's not there
				let exec = arg_parser_regex.exec(unparsed_args.join(" ").trimRight() + " ");
				// extract argument from our Regex groups
				let arg = exec[1] || exec[2] || exec[3];
				
				// add it to our argument list
				args.push(arg);
				
				unparsed_args = unparsed_args.splice(1);
			}
		}
		
		return [cmd, args];
	}
	return false;
};
