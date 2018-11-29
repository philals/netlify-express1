function appHtml(email) {
  return `
<!DOCTYPE html><html><head><title>Serverless Netlify Xero SSO App</title><style>body {
  width: 650px;
  margin: auto;
}
h1 {
  text-align: center;
}
p {
  text-align: center;
}
.mountain-logo {
  display: block;
  width: 10rem;
  margin: auto;
}
label {
  display: block;
}</style></head><body><h1>Serverless Zeit Xero SSO App</h1><img class="mountain-logo" src="/images/volcano.png"><p>Welcome ${email}</p></body></html>`
}

module.exports = { rootHtml, appHtml }
