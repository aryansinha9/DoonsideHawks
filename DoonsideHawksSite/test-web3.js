const fetch = require('node:fetch'); // Or native fetch in modern Node
(async () => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        access_key: '2c8c871a-c320-4c3f-8bb8-5d8c0f37ce00',
        name: "Test User",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Test message with exactly ten chars minimum."
      })
    });
    const text = await response.text();
    console.log("Status:", response.status);
    console.log("Body:", text);
  } catch(e) {
    console.error("Error:", e);
  }
})();
