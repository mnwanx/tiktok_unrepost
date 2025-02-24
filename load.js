async function load() {
    let response = await fetch("https://raw.githubusercontent.com/mnwanx/tiktok_unrepost/refs/heads/master/main.js");
    let script = await response.text();
    eval(script);
  }

load();