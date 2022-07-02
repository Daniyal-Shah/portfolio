import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "dsy6119j",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token:
    "skWWXiatsmEw18EUkjLsfrcUw10NKlnULnn4FUVmx6jswfK8y4yFE8E8BbBacAxiUuk7EBerFfz8MMzsqqh3OqjtdOn0e4YZT9om6yEhsFVmX479RFIIG7LVzz0Fz6GvbnY01zgA8S3GuLAeRAzCsughuly0PpL8mf7BYxMi6H568psq8iAm",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
