let d3Import: any = undefined

document.addEventListener("nav", async () => {
  const center = document.querySelector(".center") as HTMLElement
  const nodes = center.querySelectorAll("code.d3js") as NodeListOf<HTMLElement>
  if (nodes.length === 0) return

  // Load D3 if not already loaded
  if (typeof (window as any).d3 === 'undefined') {
    d3Import ||= await import("https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js")
  }

  for (const node of nodes) {
    const d3Code = node.getAttribute("data-d3-code")
    if (!d3Code) continue

    // Parse HTML and script sections
    const htmlMatch = d3Code.match(/<d3html>([\s\S]*?)<\/d3html>/)
    const scriptMatch = d3Code.match(/<script type="d3">([\s\S]*?)<\/script>/)
    
    const htmlContent = htmlMatch ? htmlMatch[1].trim() : ""
    const scriptContent = scriptMatch ? scriptMatch[1].trim() : d3Code.trim()

    // Get or create container
    const pre = node.parentElement as HTMLPreElement
    let container = pre.querySelector(".d3-container") as HTMLElement
    
    if (!container) {
      container = document.createElement("div")
      container.className = "d3-container"
      container.style.cssText = "width: 100%; margin: 1em 0;"
      pre.replaceWith(container)
    }

    // Clear any existing content
    container.innerHTML = ""

    try {
      // Add HTML content first if present
      if (htmlContent) {
        container.innerHTML = htmlContent
      }

      // Create a function that executes the D3 code with the container in scope
      const executeD3 = new Function("container", "d3", `window.setTimeout(() => {${scriptContent}}, 10)`)
      executeD3((window as any).d3.select(container), (window as any).d3)
    } catch (error) {
      console.error('D3 visualization error:', error)
      container.innerHTML = `<div style="color: red; padding: 10px; border: 1px solid red;">Error rendering D3 visualization: ${error.message}</div>`
    }
  }
})