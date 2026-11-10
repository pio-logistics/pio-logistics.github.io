# pio-logistics.github.io

PIO Logistics capabilities presentation: https://pio-logistics.github.io/

## Languages (EN / VI / 中文)

The page is written in English in `index.html`. `i18n.js` translates it to
Vietnamese and Simplified Chinese in the browser.

- Switch with the globe button (top right). The choice is remembered.
- Share a link in a given language: `?lang=vi` or `?lang=zh`
  (e.g. https://pio-logistics.github.io/?lang=zh).
- First visit with no choice saved: follows the browser language
  (Vietnamese / Chinese browsers open in VI / ZH, everything else in EN).

### Editing a translation

Open `i18n.js` and find the entry whose key is the exact English text on the
page, then edit its `vi` or `zh` value:

```js
'Fast export rates.': { vi: 'Báo giá xuất khẩu nhanh.', zh: '出口报价快。' },
```

If you change English text in `index.html`, change the matching key in
`i18n.js` too, otherwise that line stays in English in VI/ZH. Carrier names,
port codes, depot/ICD names, phone numbers and e-mails are intentionally not
translated.
