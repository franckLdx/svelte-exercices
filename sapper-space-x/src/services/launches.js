import { gql } from 'apollo-boost';
import { getClient } from '@Services/spaceX-client';

const LAST_LAUNCHES = gql`
query($limit: Int!, $offset: Int!) {
  launchesPast(limit: $limit, offset: $offset) {
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

export async function getLaunchesPast(fetch, pageNumber, pageSize) {
  const client = getClient(fetch);
  const limit = pageSize;
  const offset = (pageNumber - 1) * pageSize;
  const response = await client.query({
    query: LAST_LAUNCHES,
    variables: { limit, offset }
  });
  return response.data.launchesPast;
}

const LAST_LAUNCHES_ALL = gql`
{
  launchesPast {
    id
  }
}`;
export async function getLastLaunchesCount(fetch) {
  const client = getClient(fetch);
  const response = await client.query({
    query: LAST_LAUNCHES_ALL,
  });
  return response.data.launchesPast.length;
}

const GET_LAUNCH = gql`
query($id: ID!) {
  launch(id: $id) {
    id
    mission_name
    details
    launch_date_utc
    launch_site {
      site_name_long
    }
    links {
      mission_patch
      flickr_images
      mission_patch_small
      wikipedia
      video_link
    }
    rocket {
      rocket_name
      rocket_type
    }
    ships {
      name
      model
      image
    }
  }
}`;
export async function getLaunch(fetch, id) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_LAUNCH,
    variables: { id }
  });
  return response.data.launch;
}
