<script>
  async function loadForecastScroll() {
    const response = await fetch('forecast.md');
    const markdown = await response.text();

    // Convert markdown to HTML (requires marked.js or similar)
    const html = marked.parse(markdown);

    document.getElementById('forecast-content').innerHTML = html;

    // Extract and display date
    const dateMatch = markdown.match(/\*\*Date:\*\* (.+)/);
    if (dateMatch) {
      document.getElementById('forecast-date').textContent = dateMatch[1];
    }
  }

  window.onload = loadForecastScroll;
</script>
