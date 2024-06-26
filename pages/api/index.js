  
  // Helper to make GET requests to  contentfull
  export async function fetchAPI(path) {
    const requestUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
  async function fetchGraphql(query, { variables } = {}) {
    const requestUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
   const res = await fetch(requestUrl, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       authorization: `Bearer ${accessToken}`, // add our access token header
     },
     body: JSON.stringify({
       query,
       variables,
     }),
   });
  
   const json = await res.json();
   if (json.errors) {
     console.error(json.errors);
     throw new Error("Failed to fetch API");
   }
  
   return json.data;
  }

  export async function getFeatureProducts() {
    const products = await fetchGraphql(`query {
        productsCollection(where: {
          feature: true
        }) {
          items{
            name,
            price,
            avatar {
                url
                  },
            slug,
            feature
            description
          }
        }
      }`);
    return products;
  }

  export async function getAllProducts() {
    const products = await fetchGraphql(`
    query {
      productsCollection {
        items{
          name,
          price,
          slug,
          avatar {
            url
          },
          type {
            id,
          }, 
          description
        }
      }
    }`);
    return products?.productsCollection?.items;
  }
  
export async function getProductTypes() {
  const types = await fetchGraphql(`
  {
    typesCollection {
      items{
        id,
        name
      }
    }
  }`);
  return types?.typesCollection?.items;
}