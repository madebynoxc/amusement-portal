
export default async (req, res) => {
  const url = `https://discordapp.com/api/oauth2/authorize?client_id=342122771578486784&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdiscordauth&response_type=code&scope=identify%20guilds`

  res.writeHead(302, {Location: url})
  res.end()
}
