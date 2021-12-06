  
  // Helper to make GET requests to  contentfull
  export async function fetchAPI(path) {
    const requestUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
  async function fetchGraphql(query, { variables } = {}) {
      console.log(query);
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

  export async function getProducts() {
    const products = await fetchGraphql(`query {
        productsCollection {
          items{
            name,
            price,
            avatar {
                url
                  },
            slug,
            feature
            
          }
        }
      }`);
      console.log('called', products)
    return products;
  }