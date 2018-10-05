const DNS = require("dns");
// DNS.lookup('iana.org', (err, address, family) => {
//     console.log('address: %j family: IPv%s', address, family);
//   });
DNS.resolve4("www.mum.edu", (err, addresses) => {
  if (err) throw err;
  console.log(`addresses: ${JSON.stringify(addresses)}`);
});
function DNSPromise() {
  return new Promise(function(DNSP, NotFound) {
    setTimeout(() => {
      DNS.resolve4("www.mum.edu", (err, addresses) => {
        if (err) throw err;
        console.log(`addresses: ${JSON.stringify(addresses)}`);
        DNSP();
      });
    }, 5000);
  });
}
async function DNSAsyncWait() {
  try {
    console.log("Before");
    await DNSPromise();
    console.log("after");
  } catch (error) {
    console.log("error");
  }
}
const { from } = require("rxjs");
from(DNSPromise()).subscribe(e => console.log("done"));
DNSPromise();
DNSAsyncWait();
