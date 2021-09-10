export default function nameFormatter(name) {
  return name.toLowerCase().replace(/ /g, "").replace("&", "And")
}

export function createHashName(name) {
  return name.toLowerCase().replace(/ /g, "").replace(" ", "-")
}
