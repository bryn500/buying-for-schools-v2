const nunjucks = require('nunjucks')
const marked = require('marked')
const utils = require('./utils')

const dbTreeFramework = app => (framework, summary = '') => {
  const body = framework.body || ''
  const renderedResult = nunjucks.render('dbTreeFramework.njk', {
    summary,
    locals: app.locals,
    providerFull: utils.getProviderFull(framework.provider),
    providerShort: utils.getProviderShort(framework.provider),
    body: marked(body),
    title: framework.title,
    url: framework.url,
    pageTitle: framework.title
  })
  return renderedResult
}

module.exports = dbTreeFramework
