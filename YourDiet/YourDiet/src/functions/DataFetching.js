import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function fetchDishes(spaceID, accessToken) {
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: spaceID,
    accessToken: accessToken
  });
  const entries = await client.getEntries();
  let dishes = entries.items.map(item => {
    const imagesURLs = item.fields.images.map(image => image.fields.file.url);
    let dish = {
      id: item.fields.id,
      name: item.fields.name,
      description: documentToReactComponents(item.fields.description),
      ingredients: item.fields.ingredients,
      recipe: documentToReactComponents(item.fields.recipe),
      imagesURLs: imagesURLs,
      mainImageURL: item.fields.mainImage.fields.file.url
    };
    return dish;
  });
  return dishes;
}
