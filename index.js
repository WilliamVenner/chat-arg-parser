const arg_parser_regex = /(?:"((?:\\"|.)+?)" |(.+?) )/;
module.exports = function(cmd_prefix, input) {
	if (input[0] === cmd_prefix) {
		let cmd;
		let args = [];
		let unparsed_args = input.split(" ");
		cmd = unparsed_args[0].substr(cmd_prefix.length);
		if (cmd.length === 0) return false;
		if (unparsed_args.length > 1) {
			unparsed_args = unparsed_args.splice(1);
			while (unparsed_args.length > 0) {
				let exec = arg_parser_regex.exec(unparsed_args.join(" ").trimRight() + " ");
				let arg = exec[1] || exec[2];
				args.push(arg.replace('\\"', '"'));
				unparsed_args = unparsed_args.splice(1);
			}
		}
		return [cmd, args];
	}
	return false;
};
