import { gql } from 'apollo-boost';
import { getClient } from '@Services/spaceX-client';
import { sortByLaunchDate } from '@Lib/misc';

const LAST_LAUNCHES = gql`
query($limit: Int!, $offset: Int!) {
  launchesPastResult(limit: $limit, offset: $offset, order:"launch_date_utc", sort:"desc") {
    data {
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
    result {
      totalCount
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
  return { launches: response.data.launchesPastResult.data, totalCount: response.data.launchesPastResult.result.totalCount };
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
      id
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