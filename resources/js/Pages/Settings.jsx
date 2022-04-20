import Default from "@/Layouts/Default"

export default function Settings() {
  return <h1 className="text-4xl font-bold">Settings</h1>
}

Settings.layout = (page) => <Default children={page} />
