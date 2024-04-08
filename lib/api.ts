// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const FEATURED_EDITIONS = `
{
    contentTypeLocationCollection(where: {featured: true}) {
      items {
        sys {
          id
        }
        heroImage {
          title
          description
          url
        }
        city
        country
        startDate
        endDate
        timeZone
        temperature
        accomodationsCollection {
          items {
            price
          }
        }
      }
    }
    homeWhatWeOfferCollection {
      items {
        title
        description
        image {
          title
          url
        }
      }
    }
  }
`;

const GET_FAQS = `
{
    faqCollection {
      items {
        title
        image {
          url
          title
        }
      }
    }
  }
`;

const GET_ALL_EDITIONS = `
{
    contentTypeLocationCollection(where: {featured: true}) {
      items {
        sys {
          id
        }
        heroImage {
          title
          description
          url
        }
        city
        country
        startDate
        endDate
        timeZone
        temperature
        accomodationsCollection {
          items {
            price
          }
        }
      }
    }
  }
`;

const GET_ALL_BLOGSS = `
{
    blogCollection {
      items {
        title
        category
        cardImage {
          url
          title
        }
      }
    }
  }
`;
const GET_LOCATION_BY_ID = (locationId: string) => `
{
    contentTypeLocation(id: "${locationId}") {
      city
      country
      timeZone
      temperature
      startDate
      endDate
      description
      heroImage {
        url
      }
      description2 {
        json
      }
      facilitiesCollection {
        items {
          title
          description
        }
      }
      managerCollection {
        items {
          name
          description {
            json
          }
          profileImage {
            url
          }
        }
      }
      highlightsCollection {
        items {
          tag
          image {
            url
          }
          title
          description
        }
      }
      accomodationsCollection {
        items {
          title
          price
          description
          spotsLeft
          imagesCollection {
            items {
              url
            }
          }
        }
      }
    }
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

export const getFeaturedEditions = async () => {
  const data = await fetchGraphQL(FEATURED_EDITIONS);
  return data?.data;
};

export const getAllEditions = async () => {
  const data = await fetchGraphQL(GET_ALL_EDITIONS);
  return data?.data;
};

export const getFaqs = async () => {
  const data = await fetchGraphQL(GET_FAQS);
  return data?.data;
};

export const getAllBlogs = async () => {
  const data = await fetchGraphQL(GET_ALL_BLOGSS);
  return data?.data;
};

export const getLocationById = async ({
  locationId,
}: {
  locationId: string;
}) => {
  const data = await fetchGraphQL(GET_LOCATION_BY_ID(locationId));
  return data?.data;
};
