import { gql } from 'apollo-boost';
import { getClient } from '@Services/spaceX-client';
import { sortByLaunchDate } from '@Lib/misc';

const LAST_LAUNCHES = gql`
query($limit: Int!, $offset: Int!) {
  launches(limit: $limit, offset: $offset, order:"launch_date_utc", sort:"desc") {
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

export async function getLaunches(fetch, pageNumber, pageSize) {
  const client = getClient(fetch);
  const limit = pageSize;
  const offset = (pageNumber - 1) * pageSize;
  const response = await client.query({
    query: LAST_LAUNCHES,
    variables: { limit, offset }
  });
  return response.data.launches;
}

const GET_LAUNCHES_COUNT = gql`
{
  launches {
    id
  }
}`;
export async function getLaunchesCount(fetch) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_LAUNCHES_COUNT,
  });
  return response.data.launches.length;
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
      rocket {
        id
      }
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

const GET_ROCKET_LAUNCHES = gql`
query ($rocketId: String!) {
  launches(find: {rocket_id: $rocketId}, order:"launch_date_utc", sort:"desc") {
    id
    launch_date_utc
    mission_name
  }
}`;
export async function getRocketLaunches(fetch, rocketId) {
  const client = getClient(fetch);
  const response = await client.query({
    query: GET_ROCKET_LAUNCHES,
    variables: { rocketId }
  });
  return response.data.launches.sort(
    sortByLaunchDate
  );
}