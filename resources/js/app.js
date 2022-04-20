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
  resolve: (name) => {
    const page = require(`./Pages/${name}`).default
    page.layout ??= (page) => <Default children={page} />
    return page
  },
  setup({ el, App, props }) {
    return render(<App {...props} />, el)
  },
})

InertiaProgress.init({
  color: "#ff0000",
  showSpinner: true,
})
