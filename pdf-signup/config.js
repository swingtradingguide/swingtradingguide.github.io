// Edit these values only. The page reads everything from here.
window.PDF_CONFIG = {
  whatsappNumber: "917397133633",   // business number, digits only with country code
  whatsappChannel: "https://whatsapp.com/channel/0029VbE4NV7A89Mjhakz8Y45",
  youtube: "https://www.youtube.com/@SwingTradingGuideIN",
  instagram: "https://www.instagram.com/swing_trading._.guide/",
  metaPixelId: "2482065458990092",  // same Meta dataset as the main landing page; empty = off
  clarityId: "ze1p6wrgdy",          // Microsoft Clarity project; empty = off
  formEndpoint: "https://script.google.com/macros/s/AKfycbwbkihIiZYUM6cT-S-e1etATbco3Q4aP6kZkolDA95KrkCqYE8rXCVaL5vV9JYNBlIw/exec",   // Apps Script web app for the "STG PDF Leads" sheet. Empty = dry run, nothing is saved.
  pdfs: [                           // one card per PDF; the title goes into the WhatsApp message
    { id: "reversal",    title: "Reversal Setups",    clip: "assets/setup-Rev.mp4",  note: "Macro trend shifts and traps, each confirmed by a change of structure." },
    { id: "momentum",    title: "Momentum Setups",    clip: "assets/setup-Mom.mp4",  note: "Daily closes through a horizontal zone, and the retest that held." },
    { id: "retracement", title: "Retracement Setups", clip: "assets/setup-Retr.mp4", note: "Pullbacks into higher-low zones, with the 1-hour shift that triggered each entry." }
  ]
};
