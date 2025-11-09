const baseUrl = "https://api.discogs.com";
const userAgent = "KappkePersonalWebsite/1.0 +https://kappke.dev";
const username = "yts0l";
const folderAll = 0;

const releasesByFolderUrl = `${baseUrl}/users/${username}/collection/folders/${folderAll}/releases`;

export default async function getDiscogsCollection(
  page: number = 1,
  perPage: number = 100,
  sort: "added" | "rating" = "rating"
): Promise<DiscogsCollectionResponse | null> {
  const response = await fetch(
    `${releasesByFolderUrl}?page=${page}&per_page=${perPage}&sort=${sort}&sort_order=desc`,
    {
      headers: {
        "User-Agent": userAgent,
      },
    }
  );

  if (!response.ok) {
    console.error(
      `Error fetching Discogs collection: ${response.status} ${response.statusText}`
    );

    return null;
  }

  const data = await response.json();

  const pagination = {
    currentPage: data.pagination.page,
    totalPages: data.pagination.pages,
    itemsPerPage: data.pagination.per_page,
    totalItems: data.pagination.items,
  };

  const releases = data.releases.map((release: any) => ({
    id: release.id,
    instanceId: release.instance_id,
    rating: release.rating,
    dateAdded: new Date(release.date_added),
    basicInformation: {
      id: release.basic_information.id,
      masterId: release.basic_information.master_id,
      thumb: release.basic_information.thumb,
      coverImage: release.basic_information.cover_image,
      title: release.basic_information.title,
      year: release.basic_information.year,
      formats: release.basic_information.formats.map((format: any) => ({
        name: format.name,
        quantity: format.quantity,
        descriptions: format.descriptions,
      })),
      labels: release.basic_information.labels.map((label: any) => ({
        id: label.id,
        name: label.name,
        catno: label.catno,
      })),
      artists: release.basic_information.artists.map((artist: any) => ({
        id: artist.id,
        name: artist.name,
      })),
      genres: release.basic_information.genres,
      styles: release.basic_information.styles,
    },
  }));

  return {
    pagination,
    releases,
  };
}

export type DiscogsRelease = {
  id: number;
  instanceId: number;
  rating: number;
  dateAdded: Date;
  basicInformation: DiscogsReleaseInformation;
};

export type DiscogsReleaseInformation = {
  id: number;
  masterId: number | null;
  thumb: string;
  coverImage: string;
  title: string;
  year: number;
  formats: DiscogsFormat[];
  labels: DiscogsLabel[];
  artists: DiscogsArtist[];
  genres: string[];
  styles: string[];
};

export type DiscogsFormat = {
  name: string;
  quantity: number;
  descriptions: string[];
};

export type DiscogsLabel = {
  id: number;
  name: string;
  catno: string;
};

export type DiscogsArtist = {
  id: number;
  name: string;
};

export type DiscogsCollectionResponse = {
  pagination: {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
  };
  releases: DiscogsRelease[];
};
