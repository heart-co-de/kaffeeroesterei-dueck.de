import markdownit from "markdown-it"
const md = markdownit()

export const useMarkdown = (markdownStringMaybeRef: MaybeRef<string>) => {
  const html = computed(() => {
    return md.render(unref(markdownStringMaybeRef))
  })
  return { html }
}
