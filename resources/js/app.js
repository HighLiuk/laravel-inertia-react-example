require("./bootstrap")

import React from "react"
import { render } from "react-dom"
import { createInertiaApp } from "@inertiajs/inertia-react"
import { InertiaProgress } from "@inertiajs/progress"
import Default from "./Layouts/Default"

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel"

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async (name) => {
    const { default: page } = await import(`./Pages/${name}`)
    page.layout ??= (page) => <Default children={page} />
    return page
  },
  setup({ el, App, props }) {
    return render(<App {...props} />, el)
  },
})

InertiaProgress.init({
  color: "#2563eb",
  showSpinner: true,
})
