import { create } from 'ipfs-http-client'

const ipfs_url = "";

// connect using a URL
const client = create(new URL(ipfs_url));

// call Core API methods to send the data
// to see the message, visit: http://{ipfs_url}/ipfs/QmZeTxJ5AgDqNBmMu5X7yxQRn79ZWfXbUGHEdn5WTeSWkb
const data = await client.add('From me to ipfs 0!'); 

console.log(data);
