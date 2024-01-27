<template>
  <FormLikeWrapper>
    <article class="prose" v-html="html"></article>
  </FormLikeWrapper>
</template>

<script setup lang="ts">
import { useMarkdown } from "~/composables/useMarkdown"
import content from "~/content/agb.md?raw"

const { html } = useMarkdown(content)
</script>
