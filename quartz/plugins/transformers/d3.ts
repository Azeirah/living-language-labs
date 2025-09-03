import { QuartzTransformerPlugin } from "../types"
import { Root, Code } from "mdast"
import { visit } from "unist-util-visit"
import { Root as HtmlRoot, Element } from "hast"
// @ts-ignore
import d3Script from "../../components/scripts/d3.inline"

interface Options {
  d3Version?: string
  containerClass?: string
}

const defaultOptions: Options = {
  d3Version: "7",
  containerClass: "d3-container",
}

export const D3: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "D3",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root, file) => {
            visit(tree, "code", (node: Code) => {
              if (node.lang === "d3js") {
                file.data.hasD3Diagram = true
                node.data = {
                  hProperties: {
                    className: ["d3js"],
                    "data-d3-code": node.value,
                  },
                }
              }
            })
          }
        }
      ]
    },
    htmlPlugins() {
      return []
    },
    externalResources() {
      const js = []
      
      js.push({
        script: d3Script,
        loadTime: "afterDOMReady",
        contentType: "inline",
        moduleType: "module",
      })

      return { js }
    },
  }
}