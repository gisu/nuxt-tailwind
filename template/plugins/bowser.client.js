// More Information https://github.com/lancedikson/bowser
import bowser from 'bowser'

const customOutput = true
const docHead = document.querySelector('html')
const browser = bowser.getParser(window.navigator.userAgent)
const browserName = browser.getBrowserName()
const browserVersion = browser.getBrowserVersion()
const platformTypeInfo = browser.getPlatformType(true)
const version = browserVersion
  .toLowerCase()
  .replace(' ', '-')
  .split('.', 1)[0]
const name = browserName.toLowerCase().replace(' ', '-')

if (customOutput) {
  // Use the switch condition if you want to customize the output
  switch (browserName) {
    case 'Microsoft Edge':
      docHead.classList.add('edge', `edge-${version}`)
      break

    case 'Internet Explorer':
      docHead.classList.add('ie')
      docHead.classList.add(`ie-${version}`)
      break

    case 'Firefox':
      docHead.classList.add('firefox', `firefox-${version}`)
      break

    case 'Safari':
      docHead.classList.add('safari', `safari-${version}`)
      break

    case 'Chrome':
      docHead.classList.add('chrome', `chrome-${version}`)
      break

    case 'Opera':
      docHead.classList.add('opera', `opera-${version}`)
      break
  }

  docHead.classList.add(platformTypeInfo)
} else {
  // Generate Classes based on Browser and BrowserVersion
  docHead.classList.add(name, `${name}-${version}`)
}
