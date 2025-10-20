function injectScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(src);
    script.type = 'text/javascript';
    script.onload = function () {
      resolve();
      this.remove();
    };
    script.onerror = reject;
    document.documentElement.appendChild(script);
  });
}
(async () => {
  try {    
    await injectScript('lib/abc.js');
    await injectScript('lib/jquery.js');
    await injectScript('lib/socket.js');
    await injectScript('lib/main.js');
    console.log('All scripts loaded.');
  } catch (err) {
    console.error('Error fetching or injecting scripts:', err);
    alert(`Failed to load scripts: ${err.message}`);
  }
})();

