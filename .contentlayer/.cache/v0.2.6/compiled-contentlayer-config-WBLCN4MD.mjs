// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// src/lib/remark-img-to-jsx.ts
import { visit } from "unist-util-visit";
import sizeOf from "image-size";
import fs from "fs";
function remarkImgToJsx() {
  return (tree) => {
    visit(tree, (node) => node.type === "paragraph" && node.children.some((n) => n.type === "image"), (node) => {
      const imageNode = node.children.find((n) => n.type === "image");
      if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
        const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`);
        imageNode.type = "mdxJsxFlowElement", imageNode.name = "Image", imageNode.attributes = [
          { type: "mdxJsxAttribute", name: "alt", value: imageNode.alt },
          { type: "mdxJsxAttribute", name: "src", value: imageNode.url },
          {
            type: "mdxJsxAttribute",
            name: "width",
            value: dimensions.width
          },
          {
            type: "mdxJsxAttribute",
            name: "height",
            value: dimensions.height
          }
        ];
        node.type = "div";
        node.children = [imageNode];
      }
    });
  };
}

// contentlayer.config.ts
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "post/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false },
    draft: { type: "boolean", required: false },
    tags: {
      type: "list",
      of: {
        type: "string"
      },
      default: ["linh tinh"],
      description: "Tags for the post",
      required: false
    }
  },
  computedFields
}));
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    logo: { type: "string", required: true }
  },
  computedFields
}));
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true }
  },
  computedFields
}));
var contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Post, Snippet, Page],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath, remarkImgToJsx],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeKatex,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-WBLCN4MD.mjs.map
