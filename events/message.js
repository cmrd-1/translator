// Contain the message response for languages
module.exports = (client, msg) => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(client.config.PREFIX) !== 0) return;

  const args = msg.content
    .slice(client.config.PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, msg, args);
};
