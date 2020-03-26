import { gql } from 'apollo-boost';
import { getClient } from '@Services/spaceX-client';

const LAST_LAUNCHES = gql`{
  launchesPast(limit: 10) {
    id
    mission_name
    launch_date_utc
    launch_site {
      site_name_long
    }
    rocket {
      rocket_name
    }
    links {
      flickr_images
    }
  }
}`;

export async function getLastLaunches(fetch) {
  const client = getClient(fetch);
  const response = await client.query({
    query: LAST_LAUNCHES,
  });
  return response.data.launchesPast;
}
