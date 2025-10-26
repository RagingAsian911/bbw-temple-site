npm install @botpress/client
import { Client } from '@botpress/client'
import { Client } from '@botpress/client'

const client = new Client({
  token: 'bp_pat_fcJf4SgP7ruFikUYdUw0qbeMuWouKm5iVOFS',
  botId: '1a58f83d-e99f-4edb-b259-d736ebde5ea3',
  workspaceId: 'wkspace_01K5JYP96NQPD6V8KWH5BYV4PS'
})
await client.messages.create({
  userId: 'web:user123',
  type: 'text',
  text: 'Welcome to Oracle Vault 🔮'
})
await client.conversations.start({
  userId: 'web:user123',
  channel: 'web',
  flow: 'start'
})
const { files } = await client.listFiles({})
const { tables } = await client.listTables({})

})
await client.messages.create({
  userId: 'whatsapp:+1234567890', // or 'web:user123'
  type: 'text',
  text: 'Hi Oracle Vault!',
  tags: ['affiliate', 'crypto']
})
await client.conversations.start({
  userId: 'whatsapp:+1234567890',
  channel: 'whatsapp',
  flow: 'start'
})
import express from 'express'
const app = express()
app.use(express.json())

app.post('/webhook', async (req, res) => {
  const { from, body } = req.body
  await client.messages.create({
    userId: `whatsapp:${from}`,
    type: 'text',
    text: body
  })
  res.sendStatus(200)
})

app.listen(3000, () => console.log('Webhook listening on port 3000'))
const client = new Client({
  token: process.env.BOTPRESS_PAT,
  ...
})
